<script lang="jsx">
  import MapTree from './MapTree.vue';
  import Flowchart from './flow-chart';
  let flowChart = null;
  export default {
    name: 'MapView',
    components: {
      MapTree
    },
    props: {
      nodeList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        // data, // 流程图数据
        scaleVal: 100, // 流程图缩放比例 100%
        step: 5, // 缩放步长
        updateId: 0, // key值 用于模拟$forceUpdate
        activeData: null, // 被激活的流程卡片数据，用于属性面板编辑
        isProcessCmp: true,
        verifyMode: false,
        openDrawwer: ['GW_PARALLEL', 'condition', 'LAUNCH', 'AUDIT', 'CARBON_COPY'],
        filedArr: []
      };
    },
    watch: {
      nodeList: {
        deep: true,
        handler(newval) {
          flowChart = new Flowchart(newval || []);
          this.mockData = flowChart.data;
          console.log(flowChart.data);
          this.$forceUpdate();
          return;
        }
      }
    },
    methods: {
      toArray() {
        return flowChart.toArray();
        // console.log(this.mockData);
      },
      /**
       * 接收所有FlowCard事件触发
       * @param { Object } data - 含有event(事件名称)/args(参数)两个属性
       */
      eventReciver({ event, type, node }) {
        if (event === 'edit') {
          this.activeData = node; // 打开属性面板
          if (!this.activeData.props) {
            const props = {
              assigneeRule: null,
              userRuleList: [],
              isMultiInstance: false,
              buttonList: eventNode,
              condition: {
                conditionType: 'DIY',
                filterRules: {
                  controlFilterCondition: [],
                  filterConditionEnum: 'ALL_CONDITION'
                }
              }
            };
            this.$set(this.activeData, 'props', props);
          } else {
            const button = {};
            const cloneButton = this.activeData.props.buttonList;
            cloneButton?.forEach(item => {
              button[item.type] = item;
            });
            if (eventNode) {
              eventNode.forEach(item => {
                if (button[item.type]) {
                  Object.assign(item, {}, button[item.type]);
                } else {
                  item.enable = false;
                }
              });
              this.activeData.props.buttonList = eventNode;
            }
          }
          if (node.type === 'GW_EXCLUSIVE') {
            node.conditions.forEach(i => {
              if (!i.props) {
                i.props = {
                  condition: {
                    conditionType: 'DIY',
                    filterRules: {
                      controlFilterCondition: [
                        {
                          tableFiled: null,
                          selectRelationship: null,
                          selectResult: null,
                          controlId: null,
                          relationshipResults: 'CUSTOMIZE'
                        }
                      ],
                      filterConditionEnum: 'ALL_CONDITION',
                      functionExpression: {
                        expression: null,
                        variableProperties: null
                      }
                    }
                  }
                };
              }
            });
          }
        } else {
          this[event]({ node, type });
        }
        this.forceUpdate();
        // 本实例只监听了第一层数据（startNode）变动
        // 为了实时更新  采用$forceUpdate刷新 但是由于某些条件下触发失效（未排除清除原因）
        // 使用key + 监听父组件updateId方式强制刷新
      },
      forceUpdate() {
        this.updateId++;
      },
      /**
       * 属性面板取消事件
       */
      onClosePanel() {
        this.activeData = null;
        this.forceUpdate();
      },
      insertNode(data) {
        const node = data.node;
        flowChart.insert(node, data.type);
        this.forceUpdate();
      },
      delNode(data) {
        const node = data.node;
        flowChart.delete(node);
        this.forceUpdate();
      }
    },
    render() {
      return (
        <div class="flow-container">
          <MapTree mockData={this.mockData} key={this.updateId} v-on:insert-node={this.insertNode} del-node={this.delNode} onEmits={this.eventReciver} class="flowContent" />
        </div>
      );
    }
  };
</script>
<style scoped>
  .flow-container {
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    overflow-x: auto;
    overflow-y: auto;
    text-align: center;
    background: #f5f5f7;
  }

  .scale-slider {
    position: fixed;
    right: 0;
    z-index: 99;
  }

  .btn {
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    padding: 4px;
    background: #fff;
    border: 1px solid #cacaca;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
