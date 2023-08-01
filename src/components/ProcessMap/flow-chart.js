// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
/**
 * 流程图操作工具类
 * @param any[] 扁平数组，可选
 * 实例提供 节点插入{insert},节点删除{delete}方法
 * 实例提供 网关判定{isGwNode},分支条件判定{isConditionNode}方法
 * 实例提供 转扁平数组{toArray}方法
 * 实例提供 节点类型{TYPE}属性对象
 * create by Fan
 */
// import store from '@/store';
class Flowchart {
  constructor(arr = []) {
    // JSONTree
    this.data = {};
    // 节点类型
    this.TYPE = {
      AUDIT: 'AUDIT',
      FLOW: 'FLOW',
      DISTRIBUTION: 'DISTRIBUTION',
      GW_PARALLEL: 'GW_PARALLEL',
      GW_EXCLUSIVE: 'GW_EXCLUSIVE',
      CARBON_COPY: 'CARBON_COPY',
      properties: {
        AUDIT: '审批节点',
        FLOW: '分支条件',
        DISTRIBUTION: '任务分发节点',
        GW_PARALLEL: '并行网关节点',
        GW_EXCLUSIVE: '排他网关节点',
        CARBON_COPY: '抄送节点'
      }
    };
    // 所有节点Map
    this._maps = {};

    if (arr.length) {
      /* 初始化：转换已有节点*/
      // 转换为Map，主要用于节点检索
      this._maps = this._arrToMaps(arr);
      // 转为JSONTree
      this.data = this._arrToJSONTree(arr);
    } else {
      /* 初始化：默认节点：开始-连线、发起-连线、结束, nodeId后端约定固定*/
      this._insertNodes({
        nodesOpts: [{ type: Node.TYPE.START, nodeId: 'Start_Node' }, { type: Node.TYPE.FLOW }, { type: Node.TYPE.LAUNCH, nodeId: 'Launch_Node' }, { type: Node.TYPE.FLOW }, { type: Node.TYPE.END, nodeId: 'End_Node' }]
      });
    }
  }

  /**
   * 获取当前流程图的平铺数组
   * @return {*[]} 平铺数组
   */
  toArray() {
    let dataArr = [];
    for (const [key, value] of Object.entries(this._maps)) {
      let item = Object.assign({}, value);
      /* 移除流程绘制中的辅助字段*/
      delete item.child;
      delete item.conditions;
      delete item.showWay;
      dataArr.push(item);
    }
    return dataArr;
  }

  /**
   * 向目标节点后插入节点
   * @param targetNode 目标节点：普通节点为节点后的FLOW节点，网关即为网关，分支条件即为分支条件
   * @param type {TYPE} 需要插入的节点类型
   */
  insert(targetNode, type) {
    if (!this.TYPE[type]) throw '错误, 不支持的节点类型';
    if (!(this.isGwNode(targetNode) === 1 || this.isConditionNode(targetNode))) {
      /*target除了 起始网关 和 分支条件，都需在target的child(FLOW）后添加新节点*/
      targetNode = targetNode.child;
    }
    if (type === Node.TYPE.GW_EXCLUSIVE || type === Node.TYPE.GW_PARALLEL) {
      /* 节点下增加网关（网关f + [FLOW:condition, FLOW:condition] + 网关b + FLOW）*/
      /* 节点插入顺序: (网关f + FLOW:condition + 网关b + FLOW) + FLOW:condition */
      let pairId = Node.buildId('GW');
      // 网关f + FLOW:condition + 网关b + FLOW
      this._insertNodes({
        targetNode,
        nodesOpts: [{ type, pairId, pairPosition: Node.GW_POSITION.START }, { type: Node.TYPE.FLOW, showWay: Node.SHOW_WAY.CONDITION }, { type, pairId, pairPosition: Node.GW_POSITION.END }, { type: Node.TYPE.FLOW }]
      });
      // + FLOW:condition
      this._insertNodes({
        targetNode: targetNode.child,
        nodesOpts: [{ type: Node.TYPE.FLOW, showWay: Node.SHOW_WAY.CONDITION }]
      });
    } else if (type === Node.TYPE.FLOW) {
      /*网关下增加分支条件（FLOW:condition）*/
      if (this.isGwNode(targetNode) !== 1) throw '错误，只能在网关下添加分支条件';
      this._insertNodes({
        targetNode,
        nodesOpts: [{ type: Node.TYPE.FLOW, showWay: Node.SHOW_WAY.CONDITION }]
      });
    } else {
      /*节点下增加普通节点（节点 + FLOW）*/
      this._insertNodes({
        targetNode,
        nodesOpts: [{ type }, { type: Node.TYPE.FLOW }]
      });
    }
  }

  /**
   * 删除当前节点
   * @param node 当前节点
   */
  delete(node) {
    if (this.isConditionNode(node)) {
      /*分支条件*/
      let gwStartNode = this._findPrevNode(node); // 起始网关
      if (gwStartNode.outgoingList.length === 2) {
        /*仅有两条分支, 删除整个网关*/
        this._deleteNode(gwStartNode);
      } else {
        /*两条分支以上, 删除当前分支*/
        // 从起始网关移除当前节点
        this._splice(gwStartNode.outgoingList, node.nodeId);
        // 从起始网关移除当前分支条件
        this._splice(gwStartNode.conditions, node);
        // 从结束网关移除当前分支条件的末节点
        let GwEndNode = gwStartNode.child;
        let conditionEndNode = this._findConditionEndNode(GwEndNode, node);
        this._splice(GwEndNode.incomingList, conditionEndNode.nodeId);
      }
    } else {
      /*网关或普通节点*/
      this._deleteNode(node);
    }
    this._maps = this._toMap();
  }

  /**
   * 根据nodeId更新node
   * @param {*} nodeId
   * @param {*} node {props:{}}
   */
  updateNode(nodeId, node) {
    const targetNode = this._maps[nodeId];
    Object.assign(targetNode, node);
  }

  /**
   * 判定当前节点是否是网关
   * @param node 当前节点
   * @return {number} 0：不是网关，>0：是网关，1：起始网关，2：结束网关
   * @private
   */
  isGwNode(node) {
    if (node.pairPosition === Node.GW_POSITION.START) return 1;
    if (node.pairPosition === Node.GW_POSITION.END) return 2;
    return 0;
  }

  /**
   * 判定当前节点是否是分支条件
   * @param node 当前节点
   * @return {boolean} true/false
   * @private
   */
  isConditionNode(node) {
    return node.showWay === Node.SHOW_WAY.CONDITION;
  }

  /**
   * 根据当前节点检索上级节点
   * @param node 当前节点
   * @return {*} 上级节点
   * @private
   */
  _findPrevNode(node) {
    return this._maps[node.incomingList[0]];
  }

  /**
   * 根据当前节点检索下级节点
   * @param node 当前节点
   * @return {*} 下级节点
   * @private
   */
  _findNextNode(node) {
    return this._maps[node.outgoingList[0]];
  }

  /**
   * 根据网关结束节点检索父级节点
   * @param node 网关结束节点
   * @return {*} 父级网关
   * @private
   */
  _findGwStartNode(node) {
    let prevNode = this._findPrevNode(node);
    while (prevNode.pairId !== node.pairId) {
      prevNode = this._findPrevNode(prevNode);
    }
    return prevNode;
  }

  /**
   * 根据结束网关和当前分支条件节点检索分支的末级节点
   * @param GwEndNode 结束网关
   * @param conditionNode 当前分支条件节点
   * @return {*} 分支的末级节点
   * @private
   */
  _findConditionEndNode(GwEndNode, conditionNode) {
    let target = conditionNode;
    while (target.outgoingList[0] !== GwEndNode.nodeId) {
      target = this._findNextNode(target);
    }
    return target;
  }

  /**
   * 向目标节点插件一个或多个节点
   * @param targetNode 目标节点
   * @param nodesOpts {[]} 节点参数数组
   * @private
   */
  _insertNodes({ targetNode, nodesOpts }) {
    let target = targetNode || this.data;
    for (const nodeOpts of nodesOpts) {
      if (!Object.keys(target).length) {
        /* 目标节点不存在，初始化根节点*/
        target = this.data = new Node(nodeOpts);
        this._maps[target.nodeId] = target;
        continue;
      }
      target = this._insertNode(target, nodeOpts);
    }
  }

  /**
   * 向目标节点后插入单个节点
   * @param targetNode 目标节点
   * @param type {Node.TYPE} 节点类型
   * @param nodeId 节点ID
   * @param pairId 成对标识，唯一，用于确定单个网关的起始节点和结束节点
   * @param pairPosition {Node.GW_POSITION} 网关起止标识，起：Node.GW_POSITION.START，止：Node.GW_POSITION.END
   * @param showWay {Node.SHOW_WAY.CONDITION} 分支条件标识，用于标识FLOW为分支条件
   * @return {Node} 新节点
   * @private
   */
  _insertNode(targetNode, { type, nodeId, pairId, pairPosition, showWay }) {
    let newNode = new Node({ type, nodeId, pairId, pairPosition, showWay });

    if (this.isGwNode(newNode) || this.isConditionNode(newNode)) {
      /*网关或分支条件*/
      if (Array.isArray(targetNode.conditions)) {
        /*已有网关上增加分支*/
        targetNode.outgoingList.push(newNode.nodeId);
        newNode.incomingList.push(targetNode.nodeId);
        //分支条件输出指向结束网关
        newNode.outgoingList.push(targetNode.child.nodeId);
        targetNode.conditions.push(newNode);
        //结束网关输入指向新增当前分支
        targetNode.child.incomingList.push(newNode.nodeId);
      } else {
        /*新网关节点（起始网关、第一个分支条件、结束网关）*/
        // 链接父子节点
        this._linkedNode(newNode, targetNode);
        /*调整父节点的子节点*/
        if (this.isGwNode(targetNode) === 1) {
          // 新网关增加分支
          targetNode.conditions = [newNode];
        } else if (this.isGwNode(newNode) === 2) {
          // 新网关增加结束网关
          this._findGwStartNode(newNode).child = newNode;
          targetNode.child = null;
        } else {
          // 新网关(的起始网关)
          targetNode.child = newNode;
        }
      }
    } else {
      /*普通节点或FLOW*/
      // 链接父子节点
      this._linkedNode(newNode, targetNode);
      targetNode.child = newNode;
    }

    this._maps[newNode.nodeId] = newNode;

    return newNode;
  }

  /**
   * 链接父子节点
   * @param newNode 新节点
   * @param targetNode 父节点
   * @private
   */
  _linkedNode(newNode, targetNode) {
    newNode.incomingList = [targetNode.nodeId];
    newNode.outgoingList = targetNode.outgoingList;
    targetNode.outgoingList = [newNode.nodeId];
    newNode.child = targetNode.child;
    let outNode = this._findNextNode(newNode);
    if (outNode) {
      // 调整子节点的incoming链接
      this._splice(outNode.incomingList, targetNode.nodeId);
      outNode.incomingList.push(newNode.nodeId);
    }
  }

  /**
   * 删除节点
   * @param node 要删除的节点
   * @private
   */
  _deleteNode(node) {
    let parentNode = this._findPrevNode(node);
    let childNode = this._findNextNode(node.child); // node: flow -> node
    let removeNodeId = this._findNextNode(node).nodeId; // node: flow
    if (this.isGwNode(node) === 1) {
      /*删除网关*/
      removeNodeId = childNode.nodeId; // 待删除网关的末节点(Flow)
      childNode = this._findNextNode(childNode); // 待删除网关的下级节点
    }
    parentNode.outgoingList = [childNode.nodeId];
    this._splice(childNode.incomingList, removeNodeId); // 从下级节点中移除当前需删除的节点id
    childNode.incomingList.push(parentNode.nodeId); // 将上级节点id链接到下级节点

    if (this.isGwNode(childNode) === 2) {
      /*当前删除节点为分支的末级节点*/
      parentNode.child = null;
    } else {
      parentNode.child = childNode;
    }
  }

  /**
   * 删除目标数组中的目标对象
   * @param targetArr 目标数组
   * @param target 目标对象
   * @private
   */
  _splice(targetArr, target) {
    targetArr.splice(targetArr.indexOf(target), 1);
  }

  /**
   * 将原始节点数组转换为JSONTree
   * @param arr 原始节点数组
   * @return {*|*[]}
   * @private
   */
  _arrToMaps(arr) {
    return arr.reduce((pre, cur) => {
      pre[cur.nodeId] = cur;
      return pre;
    }, {});
  }

  /**
   * 将原始节点数组转换为JSONTree
   * @param arr 原始节点数组
   * @return {{}} JsonTree
   * @private
   */
  _arrToJSONTree(arr) {
    let jsonTree = {};
    for (let node of arr) {
      if (node.type === Node.TYPE.START) {
        /* 将开始节点作为根节点*/
        jsonTree = node;
        continue;
      }
      if (node.incomingList.length === 1) {
        // 普通节点（开始、发起、审批、Flow）
        const parent = this._findPrevNode(node);
        let { type, pairPosition } = parent;
        if ((type === Node.TYPE.GW_EXCLUSIVE || type === Node.TYPE.GW_PARALLEL) && pairPosition === Node.GW_POSITION.START) {
          // 分支条件
          node.showWay = Node.SHOW_WAY.CONDITION; // 分支条件本质上是Flow，为了区分，做个特殊的showWay标记
          parent.conditions = parent.conditions || [];
          parent.conditions.push(node);
        } else {
          parent.child = parent.child || {};
          parent.child = node;
        }
      } else {
        // 网关结束节点
        const parent = this._findGwStartNode(node);
        parent.child = parent.child || {};
        parent.child = node;
      }
    }
    return jsonTree;
  }

  /**
   * 将JSONTree转换为Map,用于节点检索
   * @param JSONTree
   * @return {{}}
   * @private
   */
  _toMap(JSONTree) {
    let maps = {};
    let next = JSONTree || this.data;
    while (next) {
      maps[next.nodeId] = next;
      if (next.conditions) {
        for (const condition of next.conditions) {
          maps = Object.assign(maps, this._toMap(condition));
        }
      }
      next = next.child;
    }
    return maps;
  }
}

class Node {
  constructor({ nodeId, nodeName, type, pairId, pairPosition, showWay }) {
    this.nodeId = nodeId || Node.buildId(type);
    this.nodeName = nodeName || Node.TYPE.properties[type];
    this.type = type;
    this.incomingList = [];
    this.outgoingList = [];
    this.pairId = pairId;
    this.pairPosition = pairPosition;
    if (type === 'AUDIT' || type === 'LAUNCH' || type === 'DISTRIBUTION' || type === 'CARBON_COPY') {
      // store.state.buttonList[`${type}List`]?.forEach(item => {
      //   if (item.type === 'BACK') {
      //     item.function = {
      //       backType: 'FREEDOM',
      //       backNodeIdList: [],
      //       signatureRequired: false,
      //     };
      //   }
      // });
      this.props = {
        fieldList: [],
        // buttonList: store.state.buttonList[`${type}List`],
        assigneeRule: null,
        userRuleList: [],
        isMultiInstance: false,
        condition: {
          conditionType: 'DIY',
          filterRules: {
            controlFilterCondition: [],
            filterConditionEnum: 'ALL_CONDITION'
          }
        }
      };
    }
    //
    this.child = null;
    this.conditions = null;
    this.showWay = showWay;

    if (!nodeName && showWay) {
      this.nodeName = '分支条件';
    }
  }

  static TYPE = {
    START: 'START',
    LAUNCH: 'LAUNCH',
    AUDIT: 'AUDIT',
    DISTRIBUTION: 'DISTRIBUTION',
    GW_PARALLEL: 'GW_PARALLEL',
    GW_EXCLUSIVE: 'GW_EXCLUSIVE',
    CARBON_COPY: 'CARBON_COPY',
    FLOW: 'FLOW',
    END: 'END',
    properties: {
      START: '开始',
      LAUNCH: '发起节点',
      AUDIT: '审批节点',
      DISTRIBUTION: '任务分发节点',
      GW_PARALLEL: '并行网关节点',
      GW_EXCLUSIVE: '排他网关节点',
      CARBON_COPY: '抄送节点',
      FLOW: '连接线',
      END: '结束'
    }
  };

  static GW_POSITION = {
    START: 'F',
    END: 'B',
    properties: {
      START: '起始网关',
      END: '结束网关'
    }
  };

  static SHOW_WAY = {
    CONDITION: 'condition',
    properties: {
      CONDITION: '分支'
    }
  };

  static buildId(nodeType) {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 6; i > 0; --i) result += str[Math.floor(Math.random() * str.length)];
    return `${nodeType}_${result}_${new Date().valueOf()}`;
  }
}

export default Flowchart;
