<!--
 * @Description:
 * @version:
 * @Author: liliming
 * @Date: 2022-03-29 13:55:16
 * @LastEditors: eliduty
 * @LastEditTime: 2023-07-28 15:43:16
-->
<script lang="jsx">
  const isCondition = data => data.showWay === 'condition';
  const notEmptyArray = arr => Array.isArray(arr) && arr.length > 0;
  const hasBranch = data => notEmptyArray(data.conditions);
  const operate = {
    reject: {
      // img: require('@assets/reject.png')
      img: ''
    }
  };
  function createNormalCard(ctx, conf, h) {
    if (conf.type === 'START') {
      return (
        <section class="flow-path-card start-node">
          <div class="body">
            <span>{conf.nodeName}</span>
          </div>
        </section>
      );
    }
    if (conf.type === 'GW_PARALLEL' && !conf.pairPosition) {
      return (
        <div class="grid-center">
          <div class={`parallel-gateway`}>
            <section class={`flow-path-card ${conf.type}-node ${conf.validate ? '' : ''}`}>
              <div class="body">
                <div class={`text ${conf.type !== 'FLOW' ? conf.state?.toLocaleLowerCase() + '-text' : ''}`}>
                  <div class="svg-node">
                    <svg-icon iconClass={`bpe-back-config-${conf.type}-node`}></svg-icon>
                  </div>
                  <el-tooltip effect="light" class="card-title-text">
                    <div slot="content">
                      {conf.nodeName}
                      <br />
                      {conf.handleUserLabel + '：' + conf.handleUser ?? conf.props.userRuleList?.filter(item => item.echoName.name).join(',')}
                    </div>
                    <p class="card-title-text">{conf.nodeName}</p>
                  </el-tooltip>
                </div>
              </div>
            </section>
          </div>
          <div class={`add-node-btn-box distribu-gateway flex ${['auditing', 'audited'].includes(conf.state.toLocaleLowerCase()) ? 'line-center-color' : ''}`}>
            <div class="line-after"></div>
          </div>
        </div>
      );
    }
    if (conf.type === 'AUDIT' || conf.type === 'LAUNCH' || conf.type === 'CARBON_COPY') {
      const operateState = conf.operateState?.toLocaleLowerCase();
      let operateImg = null;
      if (operateState) {
        operateImg = <img class="operate" src={operate[operateState].img} />;
      }
      if (conf.props && conf.props.userRuleList && conf.props.userRuleList.length) {
        const userList = conf.props.userRuleList
          ?.filter(item => item.echoName.name)
          .map(item => {
            return item.echoName.name;
          });
        return (
          <section class={`flow-path-card ${conf.type}-node ${conf.validate ? '' : ''}`}>
            <el-tooltip effect="light" class="card-title-text">
              <div slot="content">
                节点名称：{conf.nodeName}
                <br />
                {conf.handleUser ? conf.handleUserLabel + '：' + conf.handleUser : conf.handleUserLabel + '：' + userList}
              </div>
              <div class="body">
                <div class={`text ${conf.type !== 'FLOW' ? conf.state?.toLocaleLowerCase() + '-text' : ''}`}>
                  <div class="svg-node">
                    <svg-icon iconClass={`bpe-back-config-${conf.type}-node`}></svg-icon>
                  </div>
                  <p class="card-title-text">{conf.nodeName}</p>
                </div>
                <div class="operate">{operateImg}</div>
              </div>
            </el-tooltip>
          </section>
        );
      }
      return (
        <section class={`flow-path-card ${conf.type}-node ${conf.validate ? '' : ''}`}>
          <el-tooltip effect="light" class="card-title-text">
            <div slot="content">
              节点名称：{conf.nodeName}
              <br />
              {conf.handleUserLabel + '：' + conf.handleUser}
            </div>
            <div class="body ">
              <div class={`text ${conf.state?.toLocaleLowerCase()}-text`}>
                <div class="svg-node">
                  <svg-icon iconClass={`bpe-back-config-${conf.type}-node`}></svg-icon>
                </div>
                <p class="card-title-text">{conf.nodeName ?? conf.handleUserLabel + '：' + conf.handleUser}</p>
              </div>
            </div>
          </el-tooltip>
        </section>
      );
    } else if (conf.type === 'DISTRIBUTION') {
      const distriItems = {};
      let list;
      conf.distributionList.forEach(item => {
        item.conditions = [];
        if (!item.incomingList) {
          item.type = 'GW_PARALLEL';
          list = [item];
        } else {
          item.showWay = 'condition';
          item.type = 'FLOW';
        }
        distriItems[item.nodeId] = item;
      });
      conf.distributionList.forEach(item => {
        Object.keys(distriItems).map(keys => {
          if (item.outgoingList?.includes(keys) && item.outgoingList.length === 1) {
            distriItems[keys].type = 'AUDIT';
            delete distriItems[keys].showWay;
            item.child = distriItems[keys];
          }
          if (item.outgoingList?.includes(keys) && item.outgoingList.length > 1) {
            item.conditions.push(this.$cloneDeep(distriItems[keys]));
          }
        });
      });
      list.forEach(item => {
        Object.keys(distriItems).map(keys => {
          if (item.outgoingList?.includes(keys) && item.outgoingList.length > 1) {
            item.type = 'GW_PARALLEL';
            distriItems[keys].type = 'FLOW';
            item.nodeName = conf.nodeName;
            item.conditions.push(this.$cloneDeep(distriItems[keys]));
          } else item.type = 'AUDIT';
        });
      });
      console.log(list);
      const distributton = <div class="distri-content">{list.map(d => addDistribution.call(ctx, ctx, d, h))}</div>;
      return distributton;
    }
  }
  const createFunc = (...arg) => createNormalCard.call(arg[0], ...arg);
  const nodes = {
    START: createFunc,
    FLOW: createFunc,
    LAUNCH: createFunc,
    AUDIT: createFunc,
    DISTRIBUTION: createFunc,
    CARBON_COPY: createFunc,
    GW_PARALLEL: createFunc,
    GW_EXCLUSIVE: createFunc,
    END: () => '',
    condition(ctx, conf) {
      // let closeValue;
      // closeValue = (
      //   <div class="actions">
      //     <svg-icon class iconClass="bpe-close" onClick={this.eventLancher.bind(ctx, 'delNode', 'delete', conf)}></svg-icon>
      //   </div>
      // );
      return (
        <section class={`flow-path-card condition`}>
          <div class="body">
            <div>
              <div class={`${conf.state?.toLocaleLowerCase()}-text text condition-text`}>
                <div>
                  <svg-icon iconClass="bpe-back-config-GW_PARALLEL-node"></svg-icon>
                </div>
                <el-tooltip effect="light" content={conf.props?.condition?.description?.replace('<br />', '') ?? conf.handleUser} placement="right-start">
                  <p class="card-title-text">{conf.props?.condition?.description?.replace('<br />', '') ?? conf.nodeName ?? conf.handleUser}</p>
                </el-tooltip>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  // 分发数据处理
  function addDistribution(ctx, data, h) {
    console.log(data);
    if (!data) return;
    if (data.type !== 'END') {
      const res = [];
      let branchNode = '';
      const selfNode = (
        <div class={`node-wrap`}>
          <div class={`node-wrap-box ${data?.type} ${data?.type === 'FLOW' && data?.showWay !== 'condition' ? 'is-end' : ''}`}>{nodes[data?.showWay ? data?.showWay : data?.type].call(ctx, ctx, data, h)}</div>
          <div class="add-node-btn-box gateway flex">
            <div class={`line-after`}></div>
          </div>
        </div>
      );

      if (hasBranch(data)) {
        // 如果节点是数组 一定为条件分支 添加分支样式包裹
        branchNode = (
          <div class="branch-wrap">
            <div class="branch-box-wrap">
              <div id={data.nodeId} class="branch-box relative flex justify-center">
                {data.conditions.map(d => NodeFactory.call(ctx, ctx, d, h))}
              </div>
            </div>
          </div>
        );
      }

      if (isCondition(data)) {
        return (
          <div id={data.nodeId} class={`col-box ${['auditing', 'audited'].includes(data.state.toLocaleLowerCase()) ? 'border-top-color' : ''}`}>
            <div class="bottom-cover-line"></div>
            {selfNode}
            {branchNode}
            {NodeFactory.call(ctx, ctx, data.child, h)}
          </div>
        );
      }
      res.push(selfNode);
      branchNode && res.push(branchNode);
      data.child && res.push(NodeFactory.call(ctx, ctx, data.child, h));
      return res;
    }
  }

  // 所有数据都可进入该{conf.nodeId}
  function addNodeButton(ctx, data, h, isBranch = false) {
    // 只有非条件节点和条件分支树下面的那个按钮 才能添加新分支树
    const couldAddBranch = !hasBranch(data) || isBranch;
    const isEmpty = data.type === 'empty';
    const notAddBtn = (
      <div class={('add-node-btn-box', 'flex', 'gateway')}>
        <div class={`line-after ${data.type !== 'FLOW' && data.state?.toLocaleLowerCase() === 'audited' ? 'line-color' : ''}`}></div>
      </div>
    );
    if (data.type === 'GW_EXCLUSIVE' && !data.pairPosition)
      return (
        <div class="add-node-btn-box justify-center">
          <div class={`line-after ${data.type !== 'FLOW' && data.state?.toLocaleLowerCase() === 'audited' ? 'line-color' : 'show-line-color'}`}></div>
        </div>
      );
    if ((isEmpty && !isBranch) || !couldAddBranch) {
      return notAddBtn;
    }
    if ((data.type === 'GW_EXCLUSIVE' && data.pairPosition === 'F') || (data.type === 'GW_PARALLEL' && data.pairPosition === 'F')) {
      return notAddBtn;
    } else {
      return (
        <div class="add-node-btn-box justify-center">
          <div class={`line-after ${data.type !== 'FLOW' && data.state?.toLocaleLowerCase() === 'audited' ? 'line-color' : 'show-line-color'}`}></div>
        </div>
      );
    }
  }
  function NodeFactory(ctx, data, h) {
    if (!data) return;
    if (data.type !== 'END') {
      const res = [];
      let branchNode = '';
      const selfNode = (
        <div class={`node-wrap`}>
          <div class={`node-wrap-box ${data?.type} ${data?.type === 'FLOW' && data?.showWay !== 'condition' ? 'is-end' : ''}`}>
            {nodes[data?.showWay ? data?.showWay : data?.type].call(ctx, ctx, data, h)}
            {addNodeButton.call(ctx, ctx, data, h)}
          </div>
        </div>
      );

      if (hasBranch(data)) {
        // 如果节点是数组 一定为条件分支 添加分支样式包裹
        branchNode = (
          <div class="branch-wrap">
            <div class="branch-box-wrap">
              <div id={data.nodeId} class="branch-box relative flex justify-center">
                {data.conditions.map(d => NodeFactory.call(ctx, ctx, d, h))}
              </div>
            </div>
            {addNodeButton.call(ctx, ctx, data, h, true)}
          </div>
        );
      }

      if (isCondition(data)) {
        return (
          <div id={data.nodeId} class={`col-box ${['auditing', 'audited'].includes(data.state.toLocaleLowerCase()) ? 'border-top-color' : ''}`}>
            <div class={`center-line ${['auditing', 'audited'].includes(data.state.toLocaleLowerCase()) ? 'line-center-color' : ''}`}></div>
            <div class="top-cover-line"></div>
            <div class="bottom-cover-line"></div>
            {selfNode}
            {branchNode}
            {NodeFactory.call(ctx, ctx, data.child, h)}
          </div>
        );
      }
      res.push(selfNode);
      branchNode && res.push(branchNode);
      data.child && res.push(NodeFactory.call(ctx, ctx, data.child, h));
      return res;
    } else {
      return (
        <section class={`flow-path-card end-node ${data.state === 'AUDITED' ? 'auditend' : ''}`}>
          <div class="body">结束</div>
        </section>
      );
    }
  }
  export default {
    props: {
      mockData: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['emits', 'insert-node', 'del-node'],
    data() {
      return {
        data: null
      };
    },
    methods: {
      /**
       *事件触发器 统筹本组件所有事件并转发到父组件中
       * @param { Object } 包含event（事件名）和args（事件参数）两个参数
       */
      eventLancher(event, type, ...args) {
        // args.slice(0,-1) // vue 会注入MouseEvent到最后一个参数 去除事件对象
        const param = { event, type, node: args.slice(0, -1)[0] };
        this.$emit('emits', param);
      },
      addNode(node, type) {
        this.$emit('insert-node', { node, type });
      },
      delNode(node) {
        this.$emit('del-node', { node });
      },
      checkShow(e, id) {
        const tag = document.getElementsByClassName(id);
        const defaultH = tag[0].style.height;
        let h;
        if (!defaultH || defaultH !== '100%') {
          h = '100%';
        } else {
          h = '26px';
        }
        tag[0].style.height = h;
      }
    },
    render(h) {
      return (
        <div className="process" style="display: inline-flex; flex-direction: column; align-items: center;">
          {this.mockData && NodeFactory.call(this, this, this.mockData, h)}
        </div>
      );
    }
    // {addEndNode(h)}
  };
</script>
<style scoped>
  .flow-path-card {
    border: none !important;
  }

  .auditing-text {
    height: 50px !important;
    line-height: 50px !important;
    border: 2px solid #f63 !important;
    border-radius: 6px;
  }

  .auditing-text svg {
    color: #f63 !important;
  }

  .auditing-text .card-title-text {
    color: #000 !important;
    font-weight: 900 !important;
  }

  .auditend {
    color: white !important;
    background: #12b5b0 !important;
  }

  .start-node {
    width: 50px !important;
    height: 50px !important;
    color: white !important;
    line-height: 50px !important;
    background: #12b5b0;
    border: none;
  }

  .distribu-gateway {
    width: 2px;
    height: 20px;
    padding: 0;
    background: #dcdcdc;
  }

  .gateway {
    display: none !important;
  }

  .condition-text {
    height: 50px !important;
    color: black !important;
    background: #fff;
    border-radius: 6px;

    svg {
      color: #808080 !important;
    }

    .card-title-text {
      color: #000;
      font-weight: 100 !important;
    }
  }

  .audited-text {
    height: 50px !important;
    font-weight: 900 !important;
    border: 2px solid #12b5b0;
    border-radius: 6px;

    svg {
      color: #12b5b0 !important;
    }

    .card-title-text {
      color: #000 !important;
      font-weight: 900 !important;
    }
  }

  .show-line-color {
    height: 30px !important;
    background: #dcdcdc !important;
  }

  .unaudit-text {
    height: 50px !important;
    color: #000 !important;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
  }

  .unaudit-text svg {
    color: #808080 !important;
  }

  .unaudit-text .card-title-text {
    color: #000;
    font-weight: 100 !important;
  }

  .add-node-btn-box {
    height: 30px !important;
  }

  .top-cover-line {
    padding-top: 20px;
  }

  .down {
    color: #12b5b0;
  }

  .flow-path-card.condition .body {
    border: none !important;
  }

  .flow-path-card.condition .body .text {
    margin: 0 !important;
  }

  .end-node {
    width: 50px !important;
    height: 50px !important;
    line-height: 50px !important;
  }

  .line-center-color {
    background: #12b5b0 !important;
  }

  .line-color {
    background: #12b5b0 !important;
  }

  .operate {
    position: absolute;
    top: -8px;
    right: -6px;
    z-index: 999;
    width: 42px;
    height: 42px;
    line-height: 42px;
  }

  .border-top-color {
    margin-top: -2px;
    margin-bottom: -2px;
    border-top: 2px solid #12b5b0 !important;
    border-bottom: 2px solid #12b5b0 !important;
  }

  .distri-content {
    padding: 20px;
    border: 2px solid #dcdcdc;
  }

  .distri-line-content {
    width: 200px;
    height: 30px;
    background: #f5f5f7;
  }

  .distri-line-color {
    top: 0 !important;
  }

  .hide {
    display: none;
  }

  .grid-center {
    display: grid;
    justify-items: center;
  }
</style>
