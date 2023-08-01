export default [
  {
    "nodeId": "Start_Node",
    "nodeName": "开始",
    "type": "START",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [],
    "outgoingList": [
      "FLOW_4JDwwB_1690192055413"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "FLOW_4JDwwB_1690192055413",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "Start_Node"
      ],
      "outgoingList": [
        "Launch_Node"
      ],
      "props": null,
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "Launch_Node",
        "nodeName": "发起节点",
        "type": "LAUNCH",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "FLOW_4JDwwB_1690192055413"
        ],
        "outgoingList": [
          "FLOW_1A3phn_1690192055414"
        ],
        "props": {
          "type": null,
          "assigneeRule": null,
          "fieldList": [
            {
              "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
              "widgetName": "单行文本",
              "visible": true,
              "editable": true
            }
          ],
          "buttonList": [
            {
              "type": "SUBMIT",
              "buttonName": "提交",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "SAVE_DRAFT",
              "buttonName": "保存草稿",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "TRANSIENT",
              "buttonName": "暂存",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "REVOKE",
              "buttonName": "撤回",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "PRINT",
              "buttonName": "打印",
              "enable": true,
              "backType": null,
              "function": null
            }
          ]
        },
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "FLOW_1A3phn_1690192055414",
          "nodeName": "连接线",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "Launch_Node"
          ],
          "outgoingList": [
            "AUDIT_o6u9lu_1690192062386"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "AUDIT_o6u9lu_1690192062386",
            "nodeName": "审批节点",
            "type": "AUDIT",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_1A3phn_1690192055414"
            ],
            "outgoingList": [
              "FLOW_tuNLrl_1690192062387"
            ],
            "props": {
              "type": null,
              "isMultiInstance": false,
              "userRuleList": [
                {
                  "ruleProperties": {
                    "ruleId": null,
                    "ruleName": null,
                    "dynamicPersonnel": "PROCESS_INITIATOR",
                    "ruleValue": {
                      "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                      "name": "流程的发起人"
                    }
                  },
                  "selectorType": "DYNAMIC_STAFF",
                  "echoName": {
                    "id": null,
                    "name": "流程的发起人",
                    "number": null,
                    "invalid": false,
                    "userType": null,
                    "userTypeEnum": null
                  }
                }
              ],
              "carbonCopyAssigneeRule": null,
              "fieldList": [
                {
                  "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                  "widgetName": "单行文本",
                  "visible": true,
                  "editable": false
                }
              ],
              "buttonList": [
                {
                  "type": "AGREE",
                  "buttonName": "同意",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "REJECT",
                  "buttonName": "拒绝",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "BACK",
                  "buttonName": "退回",
                  "enable": true,
                  "backType": null,
                  "function": {
                    "type": "BACK",
                    "adviceRequired": null,
                    "signatureRequired": false,
                    "backType": "FREEDOM",
                    "backNodeIdList": [],
                    "showSignature": true
                  }
                },
                {
                  "type": "TRANSIENT",
                  "buttonName": "暂存",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "PRINT",
                  "buttonName": "打印",
                  "enable": true,
                  "backType": null,
                  "function": null
                }
              ]
            },
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "FLOW_tuNLrl_1690192062387",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "AUDIT_o6u9lu_1690192062386"
              ],
              "outgoingList": [
                "GW_PARALLEL_ullDzD_1690192088657"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "GW_PARALLEL_ullDzD_1690192088657",
                "nodeName": "并行网关节点",
                "type": "GW_PARALLEL",
                "pairId": "GW_WD364a_1690192088657",
                "pairPosition": "F",
                "incomingList": [
                  "FLOW_tuNLrl_1690192062387"
                ],
                "outgoingList": [
                  "FLOW_67wxTY_1690192088657",
                  "FLOW_akhmKX_1690192088657"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "conditions": [
                  {
                    "nodeId": "FLOW_67wxTY_1690192088657",
                    "nodeName": "分支条件",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "GW_PARALLEL_ullDzD_1690192088657"
                    ],
                    "outgoingList": [
                      "AUDIT_dDD9NI_1690192090553"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "showWay": "condition",
                    "child": {
                      "nodeId": "AUDIT_dDD9NI_1690192090553",
                      "nodeName": "审批节点",
                      "type": "AUDIT",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "FLOW_67wxTY_1690192088657"
                      ],
                      "outgoingList": [
                        "FLOW_mt41u4_1690192090553"
                      ],
                      "props": {
                        "type": null,
                        "isMultiInstance": false,
                        "userRuleList": [
                          {
                            "ruleProperties": {
                              "ruleId": null,
                              "ruleName": null,
                              "dynamicPersonnel": "PROCESS_INITIATOR",
                              "ruleValue": {
                                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                                "name": "流程的发起人"
                              }
                            },
                            "selectorType": "DYNAMIC_STAFF",
                            "echoName": {
                              "id": null,
                              "name": "流程的发起人",
                              "number": null,
                              "invalid": false,
                              "userType": null,
                              "userTypeEnum": null
                            }
                          }
                        ],
                        "carbonCopyAssigneeRule": null,
                        "fieldList": [
                          {
                            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                            "widgetName": "单行文本",
                            "visible": true,
                            "editable": false
                          }
                        ],
                        "buttonList": [
                          {
                            "type": "AGREE",
                            "buttonName": "同意",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "REJECT",
                            "buttonName": "拒绝",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "BACK",
                            "buttonName": "退回",
                            "enable": true,
                            "backType": null,
                            "function": {
                              "type": "BACK",
                              "adviceRequired": null,
                              "signatureRequired": false,
                              "backType": "FREEDOM",
                              "backNodeIdList": [],
                              "showSignature": true
                            }
                          },
                          {
                            "type": "TRANSIENT",
                            "buttonName": "暂存",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "PRINT",
                            "buttonName": "打印",
                            "enable": true,
                            "backType": null,
                            "function": null
                          }
                        ]
                      },
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null,
                      "child": {
                        "nodeId": "FLOW_mt41u4_1690192090553",
                        "nodeName": "连接线",
                        "type": "FLOW",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "AUDIT_dDD9NI_1690192090553"
                        ],
                        "outgoingList": [
                          "GW_PARALLEL_vAEreU_1690192088657"
                        ],
                        "props": null,
                        "state": "AUDITED",
                        "operateState": null,
                        "distributionList": null
                      }
                    }
                  },
                  {
                    "nodeId": "FLOW_akhmKX_1690192088657",
                    "nodeName": "分支条件",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "GW_PARALLEL_ullDzD_1690192088657"
                    ],
                    "outgoingList": [
                      "AUDIT_XTaqFb_1690192091801"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "showWay": "condition",
                    "child": {
                      "nodeId": "AUDIT_XTaqFb_1690192091801",
                      "nodeName": "审批节点",
                      "type": "AUDIT",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "FLOW_akhmKX_1690192088657"
                      ],
                      "outgoingList": [
                        "FLOW_DW7cMu_1690192091802"
                      ],
                      "props": {
                        "type": null,
                        "isMultiInstance": false,
                        "userRuleList": [
                          {
                            "ruleProperties": {
                              "ruleId": null,
                              "ruleName": null,
                              "dynamicPersonnel": "PROCESS_INITIATOR",
                              "ruleValue": {
                                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                                "name": "流程的发起人"
                              }
                            },
                            "selectorType": "DYNAMIC_STAFF",
                            "echoName": {
                              "id": null,
                              "name": "流程的发起人",
                              "number": null,
                              "invalid": false,
                              "userType": null,
                              "userTypeEnum": null
                            }
                          }
                        ],
                        "carbonCopyAssigneeRule": null,
                        "fieldList": [
                          {
                            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                            "widgetName": "单行文本",
                            "visible": true,
                            "editable": false
                          }
                        ],
                        "buttonList": [
                          {
                            "type": "AGREE",
                            "buttonName": "同意",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "REJECT",
                            "buttonName": "拒绝",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "BACK",
                            "buttonName": "退回",
                            "enable": true,
                            "backType": null,
                            "function": {
                              "type": "BACK",
                              "adviceRequired": null,
                              "signatureRequired": false,
                              "backType": "FREEDOM",
                              "backNodeIdList": [],
                              "showSignature": true
                            }
                          },
                          {
                            "type": "TRANSIENT",
                            "buttonName": "暂存",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "PRINT",
                            "buttonName": "打印",
                            "enable": true,
                            "backType": null,
                            "function": null
                          }
                        ]
                      },
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null,
                      "child": {
                        "nodeId": "FLOW_DW7cMu_1690192091802",
                        "nodeName": "连接线",
                        "type": "FLOW",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "AUDIT_XTaqFb_1690192091801"
                        ],
                        "outgoingList": [
                          "GW_PARALLEL_vAEreU_1690192088657"
                        ],
                        "props": null,
                        "state": "AUDITED",
                        "operateState": null,
                        "distributionList": null
                      }
                    }
                  },
                  {
                    "nodeId": "FLOW_67wxTY_1690192088657",
                    "nodeName": "分支条件",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "GW_PARALLEL_ullDzD_1690192088657"
                    ],
                    "outgoingList": [
                      "AUDIT_dDD9NI_1690192090553"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "showWay": "condition",
                    "child": {
                      "nodeId": "AUDIT_dDD9NI_1690192090553",
                      "nodeName": "审批节点",
                      "type": "AUDIT",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "FLOW_67wxTY_1690192088657"
                      ],
                      "outgoingList": [
                        "FLOW_mt41u4_1690192090553"
                      ],
                      "props": {
                        "type": null,
                        "isMultiInstance": false,
                        "userRuleList": [
                          {
                            "ruleProperties": {
                              "ruleId": null,
                              "ruleName": null,
                              "dynamicPersonnel": "PROCESS_INITIATOR",
                              "ruleValue": {
                                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                                "name": "流程的发起人"
                              }
                            },
                            "selectorType": "DYNAMIC_STAFF",
                            "echoName": {
                              "id": null,
                              "name": "流程的发起人",
                              "number": null,
                              "invalid": false,
                              "userType": null,
                              "userTypeEnum": null
                            }
                          }
                        ],
                        "carbonCopyAssigneeRule": null,
                        "fieldList": [
                          {
                            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                            "widgetName": "单行文本",
                            "visible": true,
                            "editable": false
                          }
                        ],
                        "buttonList": [
                          {
                            "type": "AGREE",
                            "buttonName": "同意",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "REJECT",
                            "buttonName": "拒绝",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "BACK",
                            "buttonName": "退回",
                            "enable": true,
                            "backType": null,
                            "function": {
                              "type": "BACK",
                              "adviceRequired": null,
                              "signatureRequired": false,
                              "backType": "FREEDOM",
                              "backNodeIdList": [],
                              "showSignature": true
                            }
                          },
                          {
                            "type": "TRANSIENT",
                            "buttonName": "暂存",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "PRINT",
                            "buttonName": "打印",
                            "enable": true,
                            "backType": null,
                            "function": null
                          }
                        ]
                      },
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null,
                      "child": {
                        "nodeId": "FLOW_mt41u4_1690192090553",
                        "nodeName": "连接线",
                        "type": "FLOW",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "AUDIT_dDD9NI_1690192090553"
                        ],
                        "outgoingList": [
                          "GW_PARALLEL_vAEreU_1690192088657"
                        ],
                        "props": null,
                        "state": "AUDITED",
                        "operateState": null,
                        "distributionList": null
                      }
                    }
                  },
                  {
                    "nodeId": "FLOW_akhmKX_1690192088657",
                    "nodeName": "分支条件",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "GW_PARALLEL_ullDzD_1690192088657"
                    ],
                    "outgoingList": [
                      "AUDIT_XTaqFb_1690192091801"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "showWay": "condition",
                    "child": {
                      "nodeId": "AUDIT_XTaqFb_1690192091801",
                      "nodeName": "审批节点",
                      "type": "AUDIT",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "FLOW_akhmKX_1690192088657"
                      ],
                      "outgoingList": [
                        "FLOW_DW7cMu_1690192091802"
                      ],
                      "props": {
                        "type": null,
                        "isMultiInstance": false,
                        "userRuleList": [
                          {
                            "ruleProperties": {
                              "ruleId": null,
                              "ruleName": null,
                              "dynamicPersonnel": "PROCESS_INITIATOR",
                              "ruleValue": {
                                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                                "name": "流程的发起人"
                              }
                            },
                            "selectorType": "DYNAMIC_STAFF",
                            "echoName": {
                              "id": null,
                              "name": "流程的发起人",
                              "number": null,
                              "invalid": false,
                              "userType": null,
                              "userTypeEnum": null
                            }
                          }
                        ],
                        "carbonCopyAssigneeRule": null,
                        "fieldList": [
                          {
                            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                            "widgetName": "单行文本",
                            "visible": true,
                            "editable": false
                          }
                        ],
                        "buttonList": [
                          {
                            "type": "AGREE",
                            "buttonName": "同意",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "REJECT",
                            "buttonName": "拒绝",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "BACK",
                            "buttonName": "退回",
                            "enable": true,
                            "backType": null,
                            "function": {
                              "type": "BACK",
                              "adviceRequired": null,
                              "signatureRequired": false,
                              "backType": "FREEDOM",
                              "backNodeIdList": [],
                              "showSignature": true
                            }
                          },
                          {
                            "type": "TRANSIENT",
                            "buttonName": "暂存",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "PRINT",
                            "buttonName": "打印",
                            "enable": true,
                            "backType": null,
                            "function": null
                          }
                        ]
                      },
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null,
                      "child": {
                        "nodeId": "FLOW_DW7cMu_1690192091802",
                        "nodeName": "连接线",
                        "type": "FLOW",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "AUDIT_XTaqFb_1690192091801"
                        ],
                        "outgoingList": [
                          "GW_PARALLEL_vAEreU_1690192088657"
                        ],
                        "props": null,
                        "state": "AUDITED",
                        "operateState": null,
                        "distributionList": null
                      }
                    }
                  }
                ],
                "child": {
                  "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
                  "nodeName": "并行网关节点",
                  "type": "GW_PARALLEL",
                  "pairId": "GW_WD364a_1690192088657",
                  "pairPosition": "B",
                  "incomingList": [
                    "FLOW_mt41u4_1690192090553",
                    "FLOW_DW7cMu_1690192091802"
                  ],
                  "outgoingList": [
                    "FLOW_MP7XRV_1690192088657"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "FLOW_MP7XRV_1690192088657",
                    "nodeName": "连接线",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "GW_PARALLEL_vAEreU_1690192088657"
                    ],
                    "outgoingList": [
                      "DISTRIBUTION_IHYHZG_1690192069065"
                    ],
                    "props": null,
                    "state": "AUDITING",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
                      "nodeName": "任务分发节点",
                      "type": "DISTRIBUTION",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "FLOW_MP7XRV_1690192088657"
                      ],
                      "outgoingList": [
                        "FLOW_HXXVWv_1690192069065"
                      ],
                      "props": {
                        "type": null,
                        "nodeName": null,
                        "userRuleList": [
                          {
                            "ruleProperties": {
                              "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                              "ruleName": "谢志强(谢志强-gq专用)",
                              "dynamicPersonnel": null,
                              "ruleValue": null
                            },
                            "selectorType": "DESIGNATED_PERSONNEL",
                            "echoName": {
                              "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                              "name": "谢志强(谢志强-gq专用)",
                              "number": "9876538",
                              "invalid": false,
                              "userType": 1,
                              "userTypeEnum": "TEACHER"
                            }
                          }
                        ],
                        "carbonCopyAssigneeRule": null,
                        "fieldList": [
                          {
                            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                            "widgetName": "单行文本",
                            "visible": true,
                            "editable": false
                          }
                        ],
                        "buttonList": [
                          {
                            "type": "AGREE",
                            "buttonName": "同意",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "REJECT",
                            "buttonName": "拒绝",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "BACK",
                            "buttonName": "退回",
                            "enable": true,
                            "backType": null,
                            "function": {
                              "type": "BACK",
                              "adviceRequired": null,
                              "signatureRequired": false,
                              "backType": "FREEDOM",
                              "backNodeIdList": [],
                              "showSignature": true
                            }
                          },
                          {
                            "type": "TRANSIENT",
                            "buttonName": "暂存",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "PRINT",
                            "buttonName": "打印",
                            "enable": true,
                            "backType": null,
                            "function": null
                          }
                        ]
                      },
                      "state": "AUDITING",
                      "operateState": null,
                      "distributionList": [
                        {
                          "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                          "nodeName": "李黎明",
                          "type": "condition",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "9b12f448-2b76-11ee-97cf-ca09a85df480"
                          ],
                          "outgoingList": [
                            "33d94300-2b92-11ee-90f5-ca09a85df480"
                          ],
                          "props": null,
                          "state": "AUDITED",
                          "operateState": null,
                          "distributionList": null,
                          "conditions": [],
                          "showWay": "condition"
                        },
                        {
                          "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
                          "nodeName": "范家本",
                          "type": "condition",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "4d883a3e-2b77-11ee-8fea-ca09a85df480"
                          ],
                          "outgoingList": null,
                          "props": null,
                          "state": "AUDITING",
                          "operateState": null,
                          "distributionList": null,
                          "conditions": [],
                          "showWay": "condition"
                        },
                        {
                          "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                          "nodeName": "李全文",
                          "type": "condition",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "9b12f448-2b76-11ee-97cf-ca09a85df480"
                          ],
                          "outgoingList": null,
                          "props": null,
                          "state": "AUDITING",
                          "operateState": null,
                          "distributionList": null,
                          "conditions": [],
                          "showWay": "condition"
                        },
                        {
                          "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
                          "nodeName": "谢志强(谢志强-gq专用)",
                          "type": "condition",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": null,
                          "outgoingList": [
                            "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                            "4dd289be-2b77-11ee-8fea-ca09a85df480"
                          ],
                          "props": null,
                          "state": "AUDITED",
                          "operateState": null,
                          "distributionList": null,
                          "conditions": [
                            {
                              "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                              "nodeName": "李黎明",
                              "type": "condition",
                              "pairId": null,
                              "pairPosition": null,
                              "incomingList": [
                                "9b12f448-2b76-11ee-97cf-ca09a85df480"
                              ],
                              "outgoingList": [
                                "33d94300-2b92-11ee-90f5-ca09a85df480"
                              ],
                              "props": null,
                              "state": "AUDITED",
                              "operateState": null,
                              "distributionList": null,
                              "conditions": [],
                              "showWay": "condition"
                            },
                            {
                              "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                              "nodeName": "李全文",
                              "type": "condition",
                              "pairId": null,
                              "pairPosition": null,
                              "incomingList": [
                                "9b12f448-2b76-11ee-97cf-ca09a85df480"
                              ],
                              "outgoingList": null,
                              "props": null,
                              "state": "AUDITING",
                              "operateState": null,
                              "distributionList": null,
                              "conditions": [],
                              "showWay": "condition"
                            }
                          ],
                          "showWay": "condition"
                        }
                      ],
                      "child": {
                        "nodeId": "FLOW_HXXVWv_1690192069065",
                        "nodeName": "连接线",
                        "type": "FLOW",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "DISTRIBUTION_IHYHZG_1690192069065"
                        ],
                        "outgoingList": [
                          "AUDIT_jqkrdc_1690192071164"
                        ],
                        "props": null,
                        "state": "UNAUDIT",
                        "operateState": null,
                        "distributionList": null,
                        "child": {
                          "nodeId": "AUDIT_jqkrdc_1690192071164",
                          "nodeName": "审批节点",
                          "type": "AUDIT",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "FLOW_HXXVWv_1690192069065"
                          ],
                          "outgoingList": [
                            "FLOW_ZfrqA3_1690192071164"
                          ],
                          "props": {
                            "type": null,
                            "isMultiInstance": false,
                            "userRuleList": [
                              {
                                "ruleProperties": {
                                  "ruleId": null,
                                  "ruleName": null,
                                  "dynamicPersonnel": "PROCESS_INITIATOR",
                                  "ruleValue": {
                                    "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                                    "name": "流程的发起人"
                                  }
                                },
                                "selectorType": "DYNAMIC_STAFF",
                                "echoName": {
                                  "id": null,
                                  "name": "流程的发起人",
                                  "number": null,
                                  "invalid": false,
                                  "userType": null,
                                  "userTypeEnum": null
                                }
                              }
                            ],
                            "carbonCopyAssigneeRule": null,
                            "fieldList": [
                              {
                                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                                "widgetName": "单行文本",
                                "visible": true,
                                "editable": false
                              }
                            ],
                            "buttonList": [
                              {
                                "type": "AGREE",
                                "buttonName": "同意",
                                "enable": true,
                                "backType": null,
                                "function": null
                              },
                              {
                                "type": "REJECT",
                                "buttonName": "拒绝",
                                "enable": true,
                                "backType": null,
                                "function": null
                              },
                              {
                                "type": "BACK",
                                "buttonName": "退回",
                                "enable": true,
                                "backType": null,
                                "function": {
                                  "type": "BACK",
                                  "adviceRequired": null,
                                  "signatureRequired": false,
                                  "backType": "FREEDOM",
                                  "backNodeIdList": [],
                                  "showSignature": true
                                }
                              },
                              {
                                "type": "TRANSIENT",
                                "buttonName": "暂存",
                                "enable": true,
                                "backType": null,
                                "function": null
                              },
                              {
                                "type": "PRINT",
                                "buttonName": "打印",
                                "enable": true,
                                "backType": null,
                                "function": null
                              }
                            ]
                          },
                          "state": "UNAUDIT",
                          "operateState": null,
                          "distributionList": null,
                          "child": {
                            "nodeId": "FLOW_ZfrqA3_1690192071164",
                            "nodeName": "连接线",
                            "type": "FLOW",
                            "pairId": null,
                            "pairPosition": null,
                            "incomingList": [
                              "AUDIT_jqkrdc_1690192071164"
                            ],
                            "outgoingList": [
                              "End_Node"
                            ],
                            "props": null,
                            "state": "UNAUDIT",
                            "operateState": null,
                            "distributionList": null,
                            "child": {
                              "nodeId": "End_Node",
                              "nodeName": "结束",
                              "type": "END",
                              "pairId": null,
                              "pairPosition": null,
                              "incomingList": [
                                "FLOW_ZfrqA3_1690192071164"
                              ],
                              "outgoingList": [],
                              "props": null,
                              "state": "UNAUDIT",
                              "operateState": null,
                              "distributionList": null
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "FLOW_4JDwwB_1690192055413",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "Start_Node"
    ],
    "outgoingList": [
      "Launch_Node"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "Launch_Node",
      "nodeName": "发起节点",
      "type": "LAUNCH",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "FLOW_4JDwwB_1690192055413"
      ],
      "outgoingList": [
        "FLOW_1A3phn_1690192055414"
      ],
      "props": {
        "type": null,
        "assigneeRule": null,
        "fieldList": [
          {
            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
            "widgetName": "单行文本",
            "visible": true,
            "editable": true
          }
        ],
        "buttonList": [
          {
            "type": "SUBMIT",
            "buttonName": "提交",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "SAVE_DRAFT",
            "buttonName": "保存草稿",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "TRANSIENT",
            "buttonName": "暂存",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "REVOKE",
            "buttonName": "撤回",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "PRINT",
            "buttonName": "打印",
            "enable": true,
            "backType": null,
            "function": null
          }
        ]
      },
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "FLOW_1A3phn_1690192055414",
        "nodeName": "连接线",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "Launch_Node"
        ],
        "outgoingList": [
          "AUDIT_o6u9lu_1690192062386"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "AUDIT_o6u9lu_1690192062386",
          "nodeName": "审批节点",
          "type": "AUDIT",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_1A3phn_1690192055414"
          ],
          "outgoingList": [
            "FLOW_tuNLrl_1690192062387"
          ],
          "props": {
            "type": null,
            "isMultiInstance": false,
            "userRuleList": [
              {
                "ruleProperties": {
                  "ruleId": null,
                  "ruleName": null,
                  "dynamicPersonnel": "PROCESS_INITIATOR",
                  "ruleValue": {
                    "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                    "name": "流程的发起人"
                  }
                },
                "selectorType": "DYNAMIC_STAFF",
                "echoName": {
                  "id": null,
                  "name": "流程的发起人",
                  "number": null,
                  "invalid": false,
                  "userType": null,
                  "userTypeEnum": null
                }
              }
            ],
            "carbonCopyAssigneeRule": null,
            "fieldList": [
              {
                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                "widgetName": "单行文本",
                "visible": true,
                "editable": false
              }
            ],
            "buttonList": [
              {
                "type": "AGREE",
                "buttonName": "同意",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "REJECT",
                "buttonName": "拒绝",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "BACK",
                "buttonName": "退回",
                "enable": true,
                "backType": null,
                "function": {
                  "type": "BACK",
                  "adviceRequired": null,
                  "signatureRequired": false,
                  "backType": "FREEDOM",
                  "backNodeIdList": [],
                  "showSignature": true
                }
              },
              {
                "type": "TRANSIENT",
                "buttonName": "暂存",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "PRINT",
                "buttonName": "打印",
                "enable": true,
                "backType": null,
                "function": null
              }
            ]
          },
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "FLOW_tuNLrl_1690192062387",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "AUDIT_o6u9lu_1690192062386"
            ],
            "outgoingList": [
              "GW_PARALLEL_ullDzD_1690192088657"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "GW_PARALLEL_ullDzD_1690192088657",
              "nodeName": "并行网关节点",
              "type": "GW_PARALLEL",
              "pairId": "GW_WD364a_1690192088657",
              "pairPosition": "F",
              "incomingList": [
                "FLOW_tuNLrl_1690192062387"
              ],
              "outgoingList": [
                "FLOW_67wxTY_1690192088657",
                "FLOW_akhmKX_1690192088657"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "conditions": [
                {
                  "nodeId": "FLOW_67wxTY_1690192088657",
                  "nodeName": "分支条件",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "GW_PARALLEL_ullDzD_1690192088657"
                  ],
                  "outgoingList": [
                    "AUDIT_dDD9NI_1690192090553"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "showWay": "condition",
                  "child": {
                    "nodeId": "AUDIT_dDD9NI_1690192090553",
                    "nodeName": "审批节点",
                    "type": "AUDIT",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "FLOW_67wxTY_1690192088657"
                    ],
                    "outgoingList": [
                      "FLOW_mt41u4_1690192090553"
                    ],
                    "props": {
                      "type": null,
                      "isMultiInstance": false,
                      "userRuleList": [
                        {
                          "ruleProperties": {
                            "ruleId": null,
                            "ruleName": null,
                            "dynamicPersonnel": "PROCESS_INITIATOR",
                            "ruleValue": {
                              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                              "name": "流程的发起人"
                            }
                          },
                          "selectorType": "DYNAMIC_STAFF",
                          "echoName": {
                            "id": null,
                            "name": "流程的发起人",
                            "number": null,
                            "invalid": false,
                            "userType": null,
                            "userTypeEnum": null
                          }
                        }
                      ],
                      "carbonCopyAssigneeRule": null,
                      "fieldList": [
                        {
                          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                          "widgetName": "单行文本",
                          "visible": true,
                          "editable": false
                        }
                      ],
                      "buttonList": [
                        {
                          "type": "AGREE",
                          "buttonName": "同意",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "REJECT",
                          "buttonName": "拒绝",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "BACK",
                          "buttonName": "退回",
                          "enable": true,
                          "backType": null,
                          "function": {
                            "type": "BACK",
                            "adviceRequired": null,
                            "signatureRequired": false,
                            "backType": "FREEDOM",
                            "backNodeIdList": [],
                            "showSignature": true
                          }
                        },
                        {
                          "type": "TRANSIENT",
                          "buttonName": "暂存",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "PRINT",
                          "buttonName": "打印",
                          "enable": true,
                          "backType": null,
                          "function": null
                        }
                      ]
                    },
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "FLOW_mt41u4_1690192090553",
                      "nodeName": "连接线",
                      "type": "FLOW",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "AUDIT_dDD9NI_1690192090553"
                      ],
                      "outgoingList": [
                        "GW_PARALLEL_vAEreU_1690192088657"
                      ],
                      "props": null,
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null
                    }
                  }
                },
                {
                  "nodeId": "FLOW_akhmKX_1690192088657",
                  "nodeName": "分支条件",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "GW_PARALLEL_ullDzD_1690192088657"
                  ],
                  "outgoingList": [
                    "AUDIT_XTaqFb_1690192091801"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "showWay": "condition",
                  "child": {
                    "nodeId": "AUDIT_XTaqFb_1690192091801",
                    "nodeName": "审批节点",
                    "type": "AUDIT",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "FLOW_akhmKX_1690192088657"
                    ],
                    "outgoingList": [
                      "FLOW_DW7cMu_1690192091802"
                    ],
                    "props": {
                      "type": null,
                      "isMultiInstance": false,
                      "userRuleList": [
                        {
                          "ruleProperties": {
                            "ruleId": null,
                            "ruleName": null,
                            "dynamicPersonnel": "PROCESS_INITIATOR",
                            "ruleValue": {
                              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                              "name": "流程的发起人"
                            }
                          },
                          "selectorType": "DYNAMIC_STAFF",
                          "echoName": {
                            "id": null,
                            "name": "流程的发起人",
                            "number": null,
                            "invalid": false,
                            "userType": null,
                            "userTypeEnum": null
                          }
                        }
                      ],
                      "carbonCopyAssigneeRule": null,
                      "fieldList": [
                        {
                          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                          "widgetName": "单行文本",
                          "visible": true,
                          "editable": false
                        }
                      ],
                      "buttonList": [
                        {
                          "type": "AGREE",
                          "buttonName": "同意",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "REJECT",
                          "buttonName": "拒绝",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "BACK",
                          "buttonName": "退回",
                          "enable": true,
                          "backType": null,
                          "function": {
                            "type": "BACK",
                            "adviceRequired": null,
                            "signatureRequired": false,
                            "backType": "FREEDOM",
                            "backNodeIdList": [],
                            "showSignature": true
                          }
                        },
                        {
                          "type": "TRANSIENT",
                          "buttonName": "暂存",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "PRINT",
                          "buttonName": "打印",
                          "enable": true,
                          "backType": null,
                          "function": null
                        }
                      ]
                    },
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "FLOW_DW7cMu_1690192091802",
                      "nodeName": "连接线",
                      "type": "FLOW",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "AUDIT_XTaqFb_1690192091801"
                      ],
                      "outgoingList": [
                        "GW_PARALLEL_vAEreU_1690192088657"
                      ],
                      "props": null,
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null
                    }
                  }
                },
                {
                  "nodeId": "FLOW_67wxTY_1690192088657",
                  "nodeName": "分支条件",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "GW_PARALLEL_ullDzD_1690192088657"
                  ],
                  "outgoingList": [
                    "AUDIT_dDD9NI_1690192090553"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "showWay": "condition",
                  "child": {
                    "nodeId": "AUDIT_dDD9NI_1690192090553",
                    "nodeName": "审批节点",
                    "type": "AUDIT",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "FLOW_67wxTY_1690192088657"
                    ],
                    "outgoingList": [
                      "FLOW_mt41u4_1690192090553"
                    ],
                    "props": {
                      "type": null,
                      "isMultiInstance": false,
                      "userRuleList": [
                        {
                          "ruleProperties": {
                            "ruleId": null,
                            "ruleName": null,
                            "dynamicPersonnel": "PROCESS_INITIATOR",
                            "ruleValue": {
                              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                              "name": "流程的发起人"
                            }
                          },
                          "selectorType": "DYNAMIC_STAFF",
                          "echoName": {
                            "id": null,
                            "name": "流程的发起人",
                            "number": null,
                            "invalid": false,
                            "userType": null,
                            "userTypeEnum": null
                          }
                        }
                      ],
                      "carbonCopyAssigneeRule": null,
                      "fieldList": [
                        {
                          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                          "widgetName": "单行文本",
                          "visible": true,
                          "editable": false
                        }
                      ],
                      "buttonList": [
                        {
                          "type": "AGREE",
                          "buttonName": "同意",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "REJECT",
                          "buttonName": "拒绝",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "BACK",
                          "buttonName": "退回",
                          "enable": true,
                          "backType": null,
                          "function": {
                            "type": "BACK",
                            "adviceRequired": null,
                            "signatureRequired": false,
                            "backType": "FREEDOM",
                            "backNodeIdList": [],
                            "showSignature": true
                          }
                        },
                        {
                          "type": "TRANSIENT",
                          "buttonName": "暂存",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "PRINT",
                          "buttonName": "打印",
                          "enable": true,
                          "backType": null,
                          "function": null
                        }
                      ]
                    },
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "FLOW_mt41u4_1690192090553",
                      "nodeName": "连接线",
                      "type": "FLOW",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "AUDIT_dDD9NI_1690192090553"
                      ],
                      "outgoingList": [
                        "GW_PARALLEL_vAEreU_1690192088657"
                      ],
                      "props": null,
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null
                    }
                  }
                },
                {
                  "nodeId": "FLOW_akhmKX_1690192088657",
                  "nodeName": "分支条件",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "GW_PARALLEL_ullDzD_1690192088657"
                  ],
                  "outgoingList": [
                    "AUDIT_XTaqFb_1690192091801"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "showWay": "condition",
                  "child": {
                    "nodeId": "AUDIT_XTaqFb_1690192091801",
                    "nodeName": "审批节点",
                    "type": "AUDIT",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "FLOW_akhmKX_1690192088657"
                    ],
                    "outgoingList": [
                      "FLOW_DW7cMu_1690192091802"
                    ],
                    "props": {
                      "type": null,
                      "isMultiInstance": false,
                      "userRuleList": [
                        {
                          "ruleProperties": {
                            "ruleId": null,
                            "ruleName": null,
                            "dynamicPersonnel": "PROCESS_INITIATOR",
                            "ruleValue": {
                              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                              "name": "流程的发起人"
                            }
                          },
                          "selectorType": "DYNAMIC_STAFF",
                          "echoName": {
                            "id": null,
                            "name": "流程的发起人",
                            "number": null,
                            "invalid": false,
                            "userType": null,
                            "userTypeEnum": null
                          }
                        }
                      ],
                      "carbonCopyAssigneeRule": null,
                      "fieldList": [
                        {
                          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                          "widgetName": "单行文本",
                          "visible": true,
                          "editable": false
                        }
                      ],
                      "buttonList": [
                        {
                          "type": "AGREE",
                          "buttonName": "同意",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "REJECT",
                          "buttonName": "拒绝",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "BACK",
                          "buttonName": "退回",
                          "enable": true,
                          "backType": null,
                          "function": {
                            "type": "BACK",
                            "adviceRequired": null,
                            "signatureRequired": false,
                            "backType": "FREEDOM",
                            "backNodeIdList": [],
                            "showSignature": true
                          }
                        },
                        {
                          "type": "TRANSIENT",
                          "buttonName": "暂存",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "PRINT",
                          "buttonName": "打印",
                          "enable": true,
                          "backType": null,
                          "function": null
                        }
                      ]
                    },
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "FLOW_DW7cMu_1690192091802",
                      "nodeName": "连接线",
                      "type": "FLOW",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "AUDIT_XTaqFb_1690192091801"
                      ],
                      "outgoingList": [
                        "GW_PARALLEL_vAEreU_1690192088657"
                      ],
                      "props": null,
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null
                    }
                  }
                }
              ],
              "child": {
                "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
                "nodeName": "并行网关节点",
                "type": "GW_PARALLEL",
                "pairId": "GW_WD364a_1690192088657",
                "pairPosition": "B",
                "incomingList": [
                  "FLOW_mt41u4_1690192090553",
                  "FLOW_DW7cMu_1690192091802"
                ],
                "outgoingList": [
                  "FLOW_MP7XRV_1690192088657"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "FLOW_MP7XRV_1690192088657",
                  "nodeName": "连接线",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "GW_PARALLEL_vAEreU_1690192088657"
                  ],
                  "outgoingList": [
                    "DISTRIBUTION_IHYHZG_1690192069065"
                  ],
                  "props": null,
                  "state": "AUDITING",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
                    "nodeName": "任务分发节点",
                    "type": "DISTRIBUTION",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "FLOW_MP7XRV_1690192088657"
                    ],
                    "outgoingList": [
                      "FLOW_HXXVWv_1690192069065"
                    ],
                    "props": {
                      "type": null,
                      "nodeName": null,
                      "userRuleList": [
                        {
                          "ruleProperties": {
                            "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                            "ruleName": "谢志强(谢志强-gq专用)",
                            "dynamicPersonnel": null,
                            "ruleValue": null
                          },
                          "selectorType": "DESIGNATED_PERSONNEL",
                          "echoName": {
                            "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                            "name": "谢志强(谢志强-gq专用)",
                            "number": "9876538",
                            "invalid": false,
                            "userType": 1,
                            "userTypeEnum": "TEACHER"
                          }
                        }
                      ],
                      "carbonCopyAssigneeRule": null,
                      "fieldList": [
                        {
                          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                          "widgetName": "单行文本",
                          "visible": true,
                          "editable": false
                        }
                      ],
                      "buttonList": [
                        {
                          "type": "AGREE",
                          "buttonName": "同意",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "REJECT",
                          "buttonName": "拒绝",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "BACK",
                          "buttonName": "退回",
                          "enable": true,
                          "backType": null,
                          "function": {
                            "type": "BACK",
                            "adviceRequired": null,
                            "signatureRequired": false,
                            "backType": "FREEDOM",
                            "backNodeIdList": [],
                            "showSignature": true
                          }
                        },
                        {
                          "type": "TRANSIENT",
                          "buttonName": "暂存",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "PRINT",
                          "buttonName": "打印",
                          "enable": true,
                          "backType": null,
                          "function": null
                        }
                      ]
                    },
                    "state": "AUDITING",
                    "operateState": null,
                    "distributionList": [
                      {
                        "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                        "nodeName": "李黎明",
                        "type": "condition",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "9b12f448-2b76-11ee-97cf-ca09a85df480"
                        ],
                        "outgoingList": [
                          "33d94300-2b92-11ee-90f5-ca09a85df480"
                        ],
                        "props": null,
                        "state": "AUDITED",
                        "operateState": null,
                        "distributionList": null,
                        "conditions": [],
                        "showWay": "condition"
                      },
                      {
                        "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
                        "nodeName": "范家本",
                        "type": "condition",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "4d883a3e-2b77-11ee-8fea-ca09a85df480"
                        ],
                        "outgoingList": null,
                        "props": null,
                        "state": "AUDITING",
                        "operateState": null,
                        "distributionList": null,
                        "conditions": [],
                        "showWay": "condition"
                      },
                      {
                        "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                        "nodeName": "李全文",
                        "type": "condition",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "9b12f448-2b76-11ee-97cf-ca09a85df480"
                        ],
                        "outgoingList": null,
                        "props": null,
                        "state": "AUDITING",
                        "operateState": null,
                        "distributionList": null,
                        "conditions": [],
                        "showWay": "condition"
                      },
                      {
                        "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
                        "nodeName": "谢志强(谢志强-gq专用)",
                        "type": "condition",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": null,
                        "outgoingList": [
                          "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                          "4dd289be-2b77-11ee-8fea-ca09a85df480"
                        ],
                        "props": null,
                        "state": "AUDITED",
                        "operateState": null,
                        "distributionList": null,
                        "conditions": [
                          {
                            "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                            "nodeName": "李黎明",
                            "type": "condition",
                            "pairId": null,
                            "pairPosition": null,
                            "incomingList": [
                              "9b12f448-2b76-11ee-97cf-ca09a85df480"
                            ],
                            "outgoingList": [
                              "33d94300-2b92-11ee-90f5-ca09a85df480"
                            ],
                            "props": null,
                            "state": "AUDITED",
                            "operateState": null,
                            "distributionList": null,
                            "conditions": [],
                            "showWay": "condition"
                          },
                          {
                            "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                            "nodeName": "李全文",
                            "type": "condition",
                            "pairId": null,
                            "pairPosition": null,
                            "incomingList": [
                              "9b12f448-2b76-11ee-97cf-ca09a85df480"
                            ],
                            "outgoingList": null,
                            "props": null,
                            "state": "AUDITING",
                            "operateState": null,
                            "distributionList": null,
                            "conditions": [],
                            "showWay": "condition"
                          }
                        ],
                        "showWay": "condition"
                      }
                    ],
                    "child": {
                      "nodeId": "FLOW_HXXVWv_1690192069065",
                      "nodeName": "连接线",
                      "type": "FLOW",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "DISTRIBUTION_IHYHZG_1690192069065"
                      ],
                      "outgoingList": [
                        "AUDIT_jqkrdc_1690192071164"
                      ],
                      "props": null,
                      "state": "UNAUDIT",
                      "operateState": null,
                      "distributionList": null,
                      "child": {
                        "nodeId": "AUDIT_jqkrdc_1690192071164",
                        "nodeName": "审批节点",
                        "type": "AUDIT",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "FLOW_HXXVWv_1690192069065"
                        ],
                        "outgoingList": [
                          "FLOW_ZfrqA3_1690192071164"
                        ],
                        "props": {
                          "type": null,
                          "isMultiInstance": false,
                          "userRuleList": [
                            {
                              "ruleProperties": {
                                "ruleId": null,
                                "ruleName": null,
                                "dynamicPersonnel": "PROCESS_INITIATOR",
                                "ruleValue": {
                                  "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                                  "name": "流程的发起人"
                                }
                              },
                              "selectorType": "DYNAMIC_STAFF",
                              "echoName": {
                                "id": null,
                                "name": "流程的发起人",
                                "number": null,
                                "invalid": false,
                                "userType": null,
                                "userTypeEnum": null
                              }
                            }
                          ],
                          "carbonCopyAssigneeRule": null,
                          "fieldList": [
                            {
                              "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                              "widgetName": "单行文本",
                              "visible": true,
                              "editable": false
                            }
                          ],
                          "buttonList": [
                            {
                              "type": "AGREE",
                              "buttonName": "同意",
                              "enable": true,
                              "backType": null,
                              "function": null
                            },
                            {
                              "type": "REJECT",
                              "buttonName": "拒绝",
                              "enable": true,
                              "backType": null,
                              "function": null
                            },
                            {
                              "type": "BACK",
                              "buttonName": "退回",
                              "enable": true,
                              "backType": null,
                              "function": {
                                "type": "BACK",
                                "adviceRequired": null,
                                "signatureRequired": false,
                                "backType": "FREEDOM",
                                "backNodeIdList": [],
                                "showSignature": true
                              }
                            },
                            {
                              "type": "TRANSIENT",
                              "buttonName": "暂存",
                              "enable": true,
                              "backType": null,
                              "function": null
                            },
                            {
                              "type": "PRINT",
                              "buttonName": "打印",
                              "enable": true,
                              "backType": null,
                              "function": null
                            }
                          ]
                        },
                        "state": "UNAUDIT",
                        "operateState": null,
                        "distributionList": null,
                        "child": {
                          "nodeId": "FLOW_ZfrqA3_1690192071164",
                          "nodeName": "连接线",
                          "type": "FLOW",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "AUDIT_jqkrdc_1690192071164"
                          ],
                          "outgoingList": [
                            "End_Node"
                          ],
                          "props": null,
                          "state": "UNAUDIT",
                          "operateState": null,
                          "distributionList": null,
                          "child": {
                            "nodeId": "End_Node",
                            "nodeName": "结束",
                            "type": "END",
                            "pairId": null,
                            "pairPosition": null,
                            "incomingList": [
                              "FLOW_ZfrqA3_1690192071164"
                            ],
                            "outgoingList": [],
                            "props": null,
                            "state": "UNAUDIT",
                            "operateState": null,
                            "distributionList": null
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "Launch_Node",
    "nodeName": "发起节点",
    "type": "LAUNCH",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "FLOW_4JDwwB_1690192055413"
    ],
    "outgoingList": [
      "FLOW_1A3phn_1690192055414"
    ],
    "props": {
      "type": null,
      "assigneeRule": null,
      "fieldList": [
        {
          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
          "widgetName": "单行文本",
          "visible": true,
          "editable": true
        }
      ],
      "buttonList": [
        {
          "type": "SUBMIT",
          "buttonName": "提交",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "SAVE_DRAFT",
          "buttonName": "保存草稿",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "TRANSIENT",
          "buttonName": "暂存",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "REVOKE",
          "buttonName": "撤回",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "PRINT",
          "buttonName": "打印",
          "enable": true,
          "backType": null,
          "function": null
        }
      ]
    },
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "FLOW_1A3phn_1690192055414",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "Launch_Node"
      ],
      "outgoingList": [
        "AUDIT_o6u9lu_1690192062386"
      ],
      "props": null,
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "AUDIT_o6u9lu_1690192062386",
        "nodeName": "审批节点",
        "type": "AUDIT",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "FLOW_1A3phn_1690192055414"
        ],
        "outgoingList": [
          "FLOW_tuNLrl_1690192062387"
        ],
        "props": {
          "type": null,
          "isMultiInstance": false,
          "userRuleList": [
            {
              "ruleProperties": {
                "ruleId": null,
                "ruleName": null,
                "dynamicPersonnel": "PROCESS_INITIATOR",
                "ruleValue": {
                  "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                  "name": "流程的发起人"
                }
              },
              "selectorType": "DYNAMIC_STAFF",
              "echoName": {
                "id": null,
                "name": "流程的发起人",
                "number": null,
                "invalid": false,
                "userType": null,
                "userTypeEnum": null
              }
            }
          ],
          "carbonCopyAssigneeRule": null,
          "fieldList": [
            {
              "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
              "widgetName": "单行文本",
              "visible": true,
              "editable": false
            }
          ],
          "buttonList": [
            {
              "type": "AGREE",
              "buttonName": "同意",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "REJECT",
              "buttonName": "拒绝",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "BACK",
              "buttonName": "退回",
              "enable": true,
              "backType": null,
              "function": {
                "type": "BACK",
                "adviceRequired": null,
                "signatureRequired": false,
                "backType": "FREEDOM",
                "backNodeIdList": [],
                "showSignature": true
              }
            },
            {
              "type": "TRANSIENT",
              "buttonName": "暂存",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "PRINT",
              "buttonName": "打印",
              "enable": true,
              "backType": null,
              "function": null
            }
          ]
        },
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "FLOW_tuNLrl_1690192062387",
          "nodeName": "连接线",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "AUDIT_o6u9lu_1690192062386"
          ],
          "outgoingList": [
            "GW_PARALLEL_ullDzD_1690192088657"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "GW_PARALLEL_ullDzD_1690192088657",
            "nodeName": "并行网关节点",
            "type": "GW_PARALLEL",
            "pairId": "GW_WD364a_1690192088657",
            "pairPosition": "F",
            "incomingList": [
              "FLOW_tuNLrl_1690192062387"
            ],
            "outgoingList": [
              "FLOW_67wxTY_1690192088657",
              "FLOW_akhmKX_1690192088657"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "conditions": [
              {
                "nodeId": "FLOW_67wxTY_1690192088657",
                "nodeName": "分支条件",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "GW_PARALLEL_ullDzD_1690192088657"
                ],
                "outgoingList": [
                  "AUDIT_dDD9NI_1690192090553"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "showWay": "condition",
                "child": {
                  "nodeId": "AUDIT_dDD9NI_1690192090553",
                  "nodeName": "审批节点",
                  "type": "AUDIT",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "FLOW_67wxTY_1690192088657"
                  ],
                  "outgoingList": [
                    "FLOW_mt41u4_1690192090553"
                  ],
                  "props": {
                    "type": null,
                    "isMultiInstance": false,
                    "userRuleList": [
                      {
                        "ruleProperties": {
                          "ruleId": null,
                          "ruleName": null,
                          "dynamicPersonnel": "PROCESS_INITIATOR",
                          "ruleValue": {
                            "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                            "name": "流程的发起人"
                          }
                        },
                        "selectorType": "DYNAMIC_STAFF",
                        "echoName": {
                          "id": null,
                          "name": "流程的发起人",
                          "number": null,
                          "invalid": false,
                          "userType": null,
                          "userTypeEnum": null
                        }
                      }
                    ],
                    "carbonCopyAssigneeRule": null,
                    "fieldList": [
                      {
                        "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                        "widgetName": "单行文本",
                        "visible": true,
                        "editable": false
                      }
                    ],
                    "buttonList": [
                      {
                        "type": "AGREE",
                        "buttonName": "同意",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "REJECT",
                        "buttonName": "拒绝",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "BACK",
                        "buttonName": "退回",
                        "enable": true,
                        "backType": null,
                        "function": {
                          "type": "BACK",
                          "adviceRequired": null,
                          "signatureRequired": false,
                          "backType": "FREEDOM",
                          "backNodeIdList": [],
                          "showSignature": true
                        }
                      },
                      {
                        "type": "TRANSIENT",
                        "buttonName": "暂存",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "PRINT",
                        "buttonName": "打印",
                        "enable": true,
                        "backType": null,
                        "function": null
                      }
                    ]
                  },
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "FLOW_mt41u4_1690192090553",
                    "nodeName": "连接线",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "AUDIT_dDD9NI_1690192090553"
                    ],
                    "outgoingList": [
                      "GW_PARALLEL_vAEreU_1690192088657"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null
                  }
                }
              },
              {
                "nodeId": "FLOW_akhmKX_1690192088657",
                "nodeName": "分支条件",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "GW_PARALLEL_ullDzD_1690192088657"
                ],
                "outgoingList": [
                  "AUDIT_XTaqFb_1690192091801"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "showWay": "condition",
                "child": {
                  "nodeId": "AUDIT_XTaqFb_1690192091801",
                  "nodeName": "审批节点",
                  "type": "AUDIT",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "FLOW_akhmKX_1690192088657"
                  ],
                  "outgoingList": [
                    "FLOW_DW7cMu_1690192091802"
                  ],
                  "props": {
                    "type": null,
                    "isMultiInstance": false,
                    "userRuleList": [
                      {
                        "ruleProperties": {
                          "ruleId": null,
                          "ruleName": null,
                          "dynamicPersonnel": "PROCESS_INITIATOR",
                          "ruleValue": {
                            "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                            "name": "流程的发起人"
                          }
                        },
                        "selectorType": "DYNAMIC_STAFF",
                        "echoName": {
                          "id": null,
                          "name": "流程的发起人",
                          "number": null,
                          "invalid": false,
                          "userType": null,
                          "userTypeEnum": null
                        }
                      }
                    ],
                    "carbonCopyAssigneeRule": null,
                    "fieldList": [
                      {
                        "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                        "widgetName": "单行文本",
                        "visible": true,
                        "editable": false
                      }
                    ],
                    "buttonList": [
                      {
                        "type": "AGREE",
                        "buttonName": "同意",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "REJECT",
                        "buttonName": "拒绝",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "BACK",
                        "buttonName": "退回",
                        "enable": true,
                        "backType": null,
                        "function": {
                          "type": "BACK",
                          "adviceRequired": null,
                          "signatureRequired": false,
                          "backType": "FREEDOM",
                          "backNodeIdList": [],
                          "showSignature": true
                        }
                      },
                      {
                        "type": "TRANSIENT",
                        "buttonName": "暂存",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "PRINT",
                        "buttonName": "打印",
                        "enable": true,
                        "backType": null,
                        "function": null
                      }
                    ]
                  },
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "FLOW_DW7cMu_1690192091802",
                    "nodeName": "连接线",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "AUDIT_XTaqFb_1690192091801"
                    ],
                    "outgoingList": [
                      "GW_PARALLEL_vAEreU_1690192088657"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null
                  }
                }
              },
              {
                "nodeId": "FLOW_67wxTY_1690192088657",
                "nodeName": "分支条件",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "GW_PARALLEL_ullDzD_1690192088657"
                ],
                "outgoingList": [
                  "AUDIT_dDD9NI_1690192090553"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "showWay": "condition",
                "child": {
                  "nodeId": "AUDIT_dDD9NI_1690192090553",
                  "nodeName": "审批节点",
                  "type": "AUDIT",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "FLOW_67wxTY_1690192088657"
                  ],
                  "outgoingList": [
                    "FLOW_mt41u4_1690192090553"
                  ],
                  "props": {
                    "type": null,
                    "isMultiInstance": false,
                    "userRuleList": [
                      {
                        "ruleProperties": {
                          "ruleId": null,
                          "ruleName": null,
                          "dynamicPersonnel": "PROCESS_INITIATOR",
                          "ruleValue": {
                            "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                            "name": "流程的发起人"
                          }
                        },
                        "selectorType": "DYNAMIC_STAFF",
                        "echoName": {
                          "id": null,
                          "name": "流程的发起人",
                          "number": null,
                          "invalid": false,
                          "userType": null,
                          "userTypeEnum": null
                        }
                      }
                    ],
                    "carbonCopyAssigneeRule": null,
                    "fieldList": [
                      {
                        "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                        "widgetName": "单行文本",
                        "visible": true,
                        "editable": false
                      }
                    ],
                    "buttonList": [
                      {
                        "type": "AGREE",
                        "buttonName": "同意",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "REJECT",
                        "buttonName": "拒绝",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "BACK",
                        "buttonName": "退回",
                        "enable": true,
                        "backType": null,
                        "function": {
                          "type": "BACK",
                          "adviceRequired": null,
                          "signatureRequired": false,
                          "backType": "FREEDOM",
                          "backNodeIdList": [],
                          "showSignature": true
                        }
                      },
                      {
                        "type": "TRANSIENT",
                        "buttonName": "暂存",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "PRINT",
                        "buttonName": "打印",
                        "enable": true,
                        "backType": null,
                        "function": null
                      }
                    ]
                  },
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "FLOW_mt41u4_1690192090553",
                    "nodeName": "连接线",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "AUDIT_dDD9NI_1690192090553"
                    ],
                    "outgoingList": [
                      "GW_PARALLEL_vAEreU_1690192088657"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null
                  }
                }
              },
              {
                "nodeId": "FLOW_akhmKX_1690192088657",
                "nodeName": "分支条件",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "GW_PARALLEL_ullDzD_1690192088657"
                ],
                "outgoingList": [
                  "AUDIT_XTaqFb_1690192091801"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "showWay": "condition",
                "child": {
                  "nodeId": "AUDIT_XTaqFb_1690192091801",
                  "nodeName": "审批节点",
                  "type": "AUDIT",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "FLOW_akhmKX_1690192088657"
                  ],
                  "outgoingList": [
                    "FLOW_DW7cMu_1690192091802"
                  ],
                  "props": {
                    "type": null,
                    "isMultiInstance": false,
                    "userRuleList": [
                      {
                        "ruleProperties": {
                          "ruleId": null,
                          "ruleName": null,
                          "dynamicPersonnel": "PROCESS_INITIATOR",
                          "ruleValue": {
                            "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                            "name": "流程的发起人"
                          }
                        },
                        "selectorType": "DYNAMIC_STAFF",
                        "echoName": {
                          "id": null,
                          "name": "流程的发起人",
                          "number": null,
                          "invalid": false,
                          "userType": null,
                          "userTypeEnum": null
                        }
                      }
                    ],
                    "carbonCopyAssigneeRule": null,
                    "fieldList": [
                      {
                        "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                        "widgetName": "单行文本",
                        "visible": true,
                        "editable": false
                      }
                    ],
                    "buttonList": [
                      {
                        "type": "AGREE",
                        "buttonName": "同意",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "REJECT",
                        "buttonName": "拒绝",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "BACK",
                        "buttonName": "退回",
                        "enable": true,
                        "backType": null,
                        "function": {
                          "type": "BACK",
                          "adviceRequired": null,
                          "signatureRequired": false,
                          "backType": "FREEDOM",
                          "backNodeIdList": [],
                          "showSignature": true
                        }
                      },
                      {
                        "type": "TRANSIENT",
                        "buttonName": "暂存",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "PRINT",
                        "buttonName": "打印",
                        "enable": true,
                        "backType": null,
                        "function": null
                      }
                    ]
                  },
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "FLOW_DW7cMu_1690192091802",
                    "nodeName": "连接线",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "AUDIT_XTaqFb_1690192091801"
                    ],
                    "outgoingList": [
                      "GW_PARALLEL_vAEreU_1690192088657"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null
                  }
                }
              }
            ],
            "child": {
              "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
              "nodeName": "并行网关节点",
              "type": "GW_PARALLEL",
              "pairId": "GW_WD364a_1690192088657",
              "pairPosition": "B",
              "incomingList": [
                "FLOW_mt41u4_1690192090553",
                "FLOW_DW7cMu_1690192091802"
              ],
              "outgoingList": [
                "FLOW_MP7XRV_1690192088657"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "FLOW_MP7XRV_1690192088657",
                "nodeName": "连接线",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "GW_PARALLEL_vAEreU_1690192088657"
                ],
                "outgoingList": [
                  "DISTRIBUTION_IHYHZG_1690192069065"
                ],
                "props": null,
                "state": "AUDITING",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
                  "nodeName": "任务分发节点",
                  "type": "DISTRIBUTION",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "FLOW_MP7XRV_1690192088657"
                  ],
                  "outgoingList": [
                    "FLOW_HXXVWv_1690192069065"
                  ],
                  "props": {
                    "type": null,
                    "nodeName": null,
                    "userRuleList": [
                      {
                        "ruleProperties": {
                          "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                          "ruleName": "谢志强(谢志强-gq专用)",
                          "dynamicPersonnel": null,
                          "ruleValue": null
                        },
                        "selectorType": "DESIGNATED_PERSONNEL",
                        "echoName": {
                          "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                          "name": "谢志强(谢志强-gq专用)",
                          "number": "9876538",
                          "invalid": false,
                          "userType": 1,
                          "userTypeEnum": "TEACHER"
                        }
                      }
                    ],
                    "carbonCopyAssigneeRule": null,
                    "fieldList": [
                      {
                        "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                        "widgetName": "单行文本",
                        "visible": true,
                        "editable": false
                      }
                    ],
                    "buttonList": [
                      {
                        "type": "AGREE",
                        "buttonName": "同意",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "REJECT",
                        "buttonName": "拒绝",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "BACK",
                        "buttonName": "退回",
                        "enable": true,
                        "backType": null,
                        "function": {
                          "type": "BACK",
                          "adviceRequired": null,
                          "signatureRequired": false,
                          "backType": "FREEDOM",
                          "backNodeIdList": [],
                          "showSignature": true
                        }
                      },
                      {
                        "type": "TRANSIENT",
                        "buttonName": "暂存",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "PRINT",
                        "buttonName": "打印",
                        "enable": true,
                        "backType": null,
                        "function": null
                      }
                    ]
                  },
                  "state": "AUDITING",
                  "operateState": null,
                  "distributionList": [
                    {
                      "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                      "nodeName": "李黎明",
                      "type": "condition",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "9b12f448-2b76-11ee-97cf-ca09a85df480"
                      ],
                      "outgoingList": [
                        "33d94300-2b92-11ee-90f5-ca09a85df480"
                      ],
                      "props": null,
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null,
                      "conditions": [],
                      "showWay": "condition"
                    },
                    {
                      "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
                      "nodeName": "范家本",
                      "type": "condition",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "4d883a3e-2b77-11ee-8fea-ca09a85df480"
                      ],
                      "outgoingList": null,
                      "props": null,
                      "state": "AUDITING",
                      "operateState": null,
                      "distributionList": null,
                      "conditions": [],
                      "showWay": "condition"
                    },
                    {
                      "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                      "nodeName": "李全文",
                      "type": "condition",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "9b12f448-2b76-11ee-97cf-ca09a85df480"
                      ],
                      "outgoingList": null,
                      "props": null,
                      "state": "AUDITING",
                      "operateState": null,
                      "distributionList": null,
                      "conditions": [],
                      "showWay": "condition"
                    },
                    {
                      "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
                      "nodeName": "谢志强(谢志强-gq专用)",
                      "type": "condition",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": null,
                      "outgoingList": [
                        "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                        "4dd289be-2b77-11ee-8fea-ca09a85df480"
                      ],
                      "props": null,
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null,
                      "conditions": [
                        {
                          "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                          "nodeName": "李黎明",
                          "type": "condition",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "9b12f448-2b76-11ee-97cf-ca09a85df480"
                          ],
                          "outgoingList": [
                            "33d94300-2b92-11ee-90f5-ca09a85df480"
                          ],
                          "props": null,
                          "state": "AUDITED",
                          "operateState": null,
                          "distributionList": null,
                          "conditions": [],
                          "showWay": "condition"
                        },
                        {
                          "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                          "nodeName": "李全文",
                          "type": "condition",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "9b12f448-2b76-11ee-97cf-ca09a85df480"
                          ],
                          "outgoingList": null,
                          "props": null,
                          "state": "AUDITING",
                          "operateState": null,
                          "distributionList": null,
                          "conditions": [],
                          "showWay": "condition"
                        }
                      ],
                      "showWay": "condition"
                    }
                  ],
                  "child": {
                    "nodeId": "FLOW_HXXVWv_1690192069065",
                    "nodeName": "连接线",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "DISTRIBUTION_IHYHZG_1690192069065"
                    ],
                    "outgoingList": [
                      "AUDIT_jqkrdc_1690192071164"
                    ],
                    "props": null,
                    "state": "UNAUDIT",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "AUDIT_jqkrdc_1690192071164",
                      "nodeName": "审批节点",
                      "type": "AUDIT",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "FLOW_HXXVWv_1690192069065"
                      ],
                      "outgoingList": [
                        "FLOW_ZfrqA3_1690192071164"
                      ],
                      "props": {
                        "type": null,
                        "isMultiInstance": false,
                        "userRuleList": [
                          {
                            "ruleProperties": {
                              "ruleId": null,
                              "ruleName": null,
                              "dynamicPersonnel": "PROCESS_INITIATOR",
                              "ruleValue": {
                                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                                "name": "流程的发起人"
                              }
                            },
                            "selectorType": "DYNAMIC_STAFF",
                            "echoName": {
                              "id": null,
                              "name": "流程的发起人",
                              "number": null,
                              "invalid": false,
                              "userType": null,
                              "userTypeEnum": null
                            }
                          }
                        ],
                        "carbonCopyAssigneeRule": null,
                        "fieldList": [
                          {
                            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                            "widgetName": "单行文本",
                            "visible": true,
                            "editable": false
                          }
                        ],
                        "buttonList": [
                          {
                            "type": "AGREE",
                            "buttonName": "同意",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "REJECT",
                            "buttonName": "拒绝",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "BACK",
                            "buttonName": "退回",
                            "enable": true,
                            "backType": null,
                            "function": {
                              "type": "BACK",
                              "adviceRequired": null,
                              "signatureRequired": false,
                              "backType": "FREEDOM",
                              "backNodeIdList": [],
                              "showSignature": true
                            }
                          },
                          {
                            "type": "TRANSIENT",
                            "buttonName": "暂存",
                            "enable": true,
                            "backType": null,
                            "function": null
                          },
                          {
                            "type": "PRINT",
                            "buttonName": "打印",
                            "enable": true,
                            "backType": null,
                            "function": null
                          }
                        ]
                      },
                      "state": "UNAUDIT",
                      "operateState": null,
                      "distributionList": null,
                      "child": {
                        "nodeId": "FLOW_ZfrqA3_1690192071164",
                        "nodeName": "连接线",
                        "type": "FLOW",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "AUDIT_jqkrdc_1690192071164"
                        ],
                        "outgoingList": [
                          "End_Node"
                        ],
                        "props": null,
                        "state": "UNAUDIT",
                        "operateState": null,
                        "distributionList": null,
                        "child": {
                          "nodeId": "End_Node",
                          "nodeName": "结束",
                          "type": "END",
                          "pairId": null,
                          "pairPosition": null,
                          "incomingList": [
                            "FLOW_ZfrqA3_1690192071164"
                          ],
                          "outgoingList": [],
                          "props": null,
                          "state": "UNAUDIT",
                          "operateState": null,
                          "distributionList": null
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "FLOW_1A3phn_1690192055414",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "Launch_Node"
    ],
    "outgoingList": [
      "AUDIT_o6u9lu_1690192062386"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "AUDIT_o6u9lu_1690192062386",
      "nodeName": "审批节点",
      "type": "AUDIT",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "FLOW_1A3phn_1690192055414"
      ],
      "outgoingList": [
        "FLOW_tuNLrl_1690192062387"
      ],
      "props": {
        "type": null,
        "isMultiInstance": false,
        "userRuleList": [
          {
            "ruleProperties": {
              "ruleId": null,
              "ruleName": null,
              "dynamicPersonnel": "PROCESS_INITIATOR",
              "ruleValue": {
                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                "name": "流程的发起人"
              }
            },
            "selectorType": "DYNAMIC_STAFF",
            "echoName": {
              "id": null,
              "name": "流程的发起人",
              "number": null,
              "invalid": false,
              "userType": null,
              "userTypeEnum": null
            }
          }
        ],
        "carbonCopyAssigneeRule": null,
        "fieldList": [
          {
            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
            "widgetName": "单行文本",
            "visible": true,
            "editable": false
          }
        ],
        "buttonList": [
          {
            "type": "AGREE",
            "buttonName": "同意",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "REJECT",
            "buttonName": "拒绝",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "BACK",
            "buttonName": "退回",
            "enable": true,
            "backType": null,
            "function": {
              "type": "BACK",
              "adviceRequired": null,
              "signatureRequired": false,
              "backType": "FREEDOM",
              "backNodeIdList": [],
              "showSignature": true
            }
          },
          {
            "type": "TRANSIENT",
            "buttonName": "暂存",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "PRINT",
            "buttonName": "打印",
            "enable": true,
            "backType": null,
            "function": null
          }
        ]
      },
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "FLOW_tuNLrl_1690192062387",
        "nodeName": "连接线",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "AUDIT_o6u9lu_1690192062386"
        ],
        "outgoingList": [
          "GW_PARALLEL_ullDzD_1690192088657"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "GW_PARALLEL_ullDzD_1690192088657",
          "nodeName": "并行网关节点",
          "type": "GW_PARALLEL",
          "pairId": "GW_WD364a_1690192088657",
          "pairPosition": "F",
          "incomingList": [
            "FLOW_tuNLrl_1690192062387"
          ],
          "outgoingList": [
            "FLOW_67wxTY_1690192088657",
            "FLOW_akhmKX_1690192088657"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "conditions": [
            {
              "nodeId": "FLOW_67wxTY_1690192088657",
              "nodeName": "分支条件",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "GW_PARALLEL_ullDzD_1690192088657"
              ],
              "outgoingList": [
                "AUDIT_dDD9NI_1690192090553"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "showWay": "condition",
              "child": {
                "nodeId": "AUDIT_dDD9NI_1690192090553",
                "nodeName": "审批节点",
                "type": "AUDIT",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "FLOW_67wxTY_1690192088657"
                ],
                "outgoingList": [
                  "FLOW_mt41u4_1690192090553"
                ],
                "props": {
                  "type": null,
                  "isMultiInstance": false,
                  "userRuleList": [
                    {
                      "ruleProperties": {
                        "ruleId": null,
                        "ruleName": null,
                        "dynamicPersonnel": "PROCESS_INITIATOR",
                        "ruleValue": {
                          "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                          "name": "流程的发起人"
                        }
                      },
                      "selectorType": "DYNAMIC_STAFF",
                      "echoName": {
                        "id": null,
                        "name": "流程的发起人",
                        "number": null,
                        "invalid": false,
                        "userType": null,
                        "userTypeEnum": null
                      }
                    }
                  ],
                  "carbonCopyAssigneeRule": null,
                  "fieldList": [
                    {
                      "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                      "widgetName": "单行文本",
                      "visible": true,
                      "editable": false
                    }
                  ],
                  "buttonList": [
                    {
                      "type": "AGREE",
                      "buttonName": "同意",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "REJECT",
                      "buttonName": "拒绝",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "BACK",
                      "buttonName": "退回",
                      "enable": true,
                      "backType": null,
                      "function": {
                        "type": "BACK",
                        "adviceRequired": null,
                        "signatureRequired": false,
                        "backType": "FREEDOM",
                        "backNodeIdList": [],
                        "showSignature": true
                      }
                    },
                    {
                      "type": "TRANSIENT",
                      "buttonName": "暂存",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "PRINT",
                      "buttonName": "打印",
                      "enable": true,
                      "backType": null,
                      "function": null
                    }
                  ]
                },
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "FLOW_mt41u4_1690192090553",
                  "nodeName": "连接线",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "AUDIT_dDD9NI_1690192090553"
                  ],
                  "outgoingList": [
                    "GW_PARALLEL_vAEreU_1690192088657"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null
                }
              }
            },
            {
              "nodeId": "FLOW_akhmKX_1690192088657",
              "nodeName": "分支条件",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "GW_PARALLEL_ullDzD_1690192088657"
              ],
              "outgoingList": [
                "AUDIT_XTaqFb_1690192091801"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "showWay": "condition",
              "child": {
                "nodeId": "AUDIT_XTaqFb_1690192091801",
                "nodeName": "审批节点",
                "type": "AUDIT",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "FLOW_akhmKX_1690192088657"
                ],
                "outgoingList": [
                  "FLOW_DW7cMu_1690192091802"
                ],
                "props": {
                  "type": null,
                  "isMultiInstance": false,
                  "userRuleList": [
                    {
                      "ruleProperties": {
                        "ruleId": null,
                        "ruleName": null,
                        "dynamicPersonnel": "PROCESS_INITIATOR",
                        "ruleValue": {
                          "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                          "name": "流程的发起人"
                        }
                      },
                      "selectorType": "DYNAMIC_STAFF",
                      "echoName": {
                        "id": null,
                        "name": "流程的发起人",
                        "number": null,
                        "invalid": false,
                        "userType": null,
                        "userTypeEnum": null
                      }
                    }
                  ],
                  "carbonCopyAssigneeRule": null,
                  "fieldList": [
                    {
                      "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                      "widgetName": "单行文本",
                      "visible": true,
                      "editable": false
                    }
                  ],
                  "buttonList": [
                    {
                      "type": "AGREE",
                      "buttonName": "同意",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "REJECT",
                      "buttonName": "拒绝",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "BACK",
                      "buttonName": "退回",
                      "enable": true,
                      "backType": null,
                      "function": {
                        "type": "BACK",
                        "adviceRequired": null,
                        "signatureRequired": false,
                        "backType": "FREEDOM",
                        "backNodeIdList": [],
                        "showSignature": true
                      }
                    },
                    {
                      "type": "TRANSIENT",
                      "buttonName": "暂存",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "PRINT",
                      "buttonName": "打印",
                      "enable": true,
                      "backType": null,
                      "function": null
                    }
                  ]
                },
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "FLOW_DW7cMu_1690192091802",
                  "nodeName": "连接线",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "AUDIT_XTaqFb_1690192091801"
                  ],
                  "outgoingList": [
                    "GW_PARALLEL_vAEreU_1690192088657"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null
                }
              }
            },
            {
              "nodeId": "FLOW_67wxTY_1690192088657",
              "nodeName": "分支条件",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "GW_PARALLEL_ullDzD_1690192088657"
              ],
              "outgoingList": [
                "AUDIT_dDD9NI_1690192090553"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "showWay": "condition",
              "child": {
                "nodeId": "AUDIT_dDD9NI_1690192090553",
                "nodeName": "审批节点",
                "type": "AUDIT",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "FLOW_67wxTY_1690192088657"
                ],
                "outgoingList": [
                  "FLOW_mt41u4_1690192090553"
                ],
                "props": {
                  "type": null,
                  "isMultiInstance": false,
                  "userRuleList": [
                    {
                      "ruleProperties": {
                        "ruleId": null,
                        "ruleName": null,
                        "dynamicPersonnel": "PROCESS_INITIATOR",
                        "ruleValue": {
                          "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                          "name": "流程的发起人"
                        }
                      },
                      "selectorType": "DYNAMIC_STAFF",
                      "echoName": {
                        "id": null,
                        "name": "流程的发起人",
                        "number": null,
                        "invalid": false,
                        "userType": null,
                        "userTypeEnum": null
                      }
                    }
                  ],
                  "carbonCopyAssigneeRule": null,
                  "fieldList": [
                    {
                      "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                      "widgetName": "单行文本",
                      "visible": true,
                      "editable": false
                    }
                  ],
                  "buttonList": [
                    {
                      "type": "AGREE",
                      "buttonName": "同意",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "REJECT",
                      "buttonName": "拒绝",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "BACK",
                      "buttonName": "退回",
                      "enable": true,
                      "backType": null,
                      "function": {
                        "type": "BACK",
                        "adviceRequired": null,
                        "signatureRequired": false,
                        "backType": "FREEDOM",
                        "backNodeIdList": [],
                        "showSignature": true
                      }
                    },
                    {
                      "type": "TRANSIENT",
                      "buttonName": "暂存",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "PRINT",
                      "buttonName": "打印",
                      "enable": true,
                      "backType": null,
                      "function": null
                    }
                  ]
                },
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "FLOW_mt41u4_1690192090553",
                  "nodeName": "连接线",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "AUDIT_dDD9NI_1690192090553"
                  ],
                  "outgoingList": [
                    "GW_PARALLEL_vAEreU_1690192088657"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null
                }
              }
            },
            {
              "nodeId": "FLOW_akhmKX_1690192088657",
              "nodeName": "分支条件",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "GW_PARALLEL_ullDzD_1690192088657"
              ],
              "outgoingList": [
                "AUDIT_XTaqFb_1690192091801"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "showWay": "condition",
              "child": {
                "nodeId": "AUDIT_XTaqFb_1690192091801",
                "nodeName": "审批节点",
                "type": "AUDIT",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "FLOW_akhmKX_1690192088657"
                ],
                "outgoingList": [
                  "FLOW_DW7cMu_1690192091802"
                ],
                "props": {
                  "type": null,
                  "isMultiInstance": false,
                  "userRuleList": [
                    {
                      "ruleProperties": {
                        "ruleId": null,
                        "ruleName": null,
                        "dynamicPersonnel": "PROCESS_INITIATOR",
                        "ruleValue": {
                          "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                          "name": "流程的发起人"
                        }
                      },
                      "selectorType": "DYNAMIC_STAFF",
                      "echoName": {
                        "id": null,
                        "name": "流程的发起人",
                        "number": null,
                        "invalid": false,
                        "userType": null,
                        "userTypeEnum": null
                      }
                    }
                  ],
                  "carbonCopyAssigneeRule": null,
                  "fieldList": [
                    {
                      "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                      "widgetName": "单行文本",
                      "visible": true,
                      "editable": false
                    }
                  ],
                  "buttonList": [
                    {
                      "type": "AGREE",
                      "buttonName": "同意",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "REJECT",
                      "buttonName": "拒绝",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "BACK",
                      "buttonName": "退回",
                      "enable": true,
                      "backType": null,
                      "function": {
                        "type": "BACK",
                        "adviceRequired": null,
                        "signatureRequired": false,
                        "backType": "FREEDOM",
                        "backNodeIdList": [],
                        "showSignature": true
                      }
                    },
                    {
                      "type": "TRANSIENT",
                      "buttonName": "暂存",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "PRINT",
                      "buttonName": "打印",
                      "enable": true,
                      "backType": null,
                      "function": null
                    }
                  ]
                },
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "FLOW_DW7cMu_1690192091802",
                  "nodeName": "连接线",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "AUDIT_XTaqFb_1690192091801"
                  ],
                  "outgoingList": [
                    "GW_PARALLEL_vAEreU_1690192088657"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null
                }
              }
            }
          ],
          "child": {
            "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
            "nodeName": "并行网关节点",
            "type": "GW_PARALLEL",
            "pairId": "GW_WD364a_1690192088657",
            "pairPosition": "B",
            "incomingList": [
              "FLOW_mt41u4_1690192090553",
              "FLOW_DW7cMu_1690192091802"
            ],
            "outgoingList": [
              "FLOW_MP7XRV_1690192088657"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "FLOW_MP7XRV_1690192088657",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "GW_PARALLEL_vAEreU_1690192088657"
              ],
              "outgoingList": [
                "DISTRIBUTION_IHYHZG_1690192069065"
              ],
              "props": null,
              "state": "AUDITING",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
                "nodeName": "任务分发节点",
                "type": "DISTRIBUTION",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "FLOW_MP7XRV_1690192088657"
                ],
                "outgoingList": [
                  "FLOW_HXXVWv_1690192069065"
                ],
                "props": {
                  "type": null,
                  "nodeName": null,
                  "userRuleList": [
                    {
                      "ruleProperties": {
                        "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                        "ruleName": "谢志强(谢志强-gq专用)",
                        "dynamicPersonnel": null,
                        "ruleValue": null
                      },
                      "selectorType": "DESIGNATED_PERSONNEL",
                      "echoName": {
                        "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                        "name": "谢志强(谢志强-gq专用)",
                        "number": "9876538",
                        "invalid": false,
                        "userType": 1,
                        "userTypeEnum": "TEACHER"
                      }
                    }
                  ],
                  "carbonCopyAssigneeRule": null,
                  "fieldList": [
                    {
                      "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                      "widgetName": "单行文本",
                      "visible": true,
                      "editable": false
                    }
                  ],
                  "buttonList": [
                    {
                      "type": "AGREE",
                      "buttonName": "同意",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "REJECT",
                      "buttonName": "拒绝",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "BACK",
                      "buttonName": "退回",
                      "enable": true,
                      "backType": null,
                      "function": {
                        "type": "BACK",
                        "adviceRequired": null,
                        "signatureRequired": false,
                        "backType": "FREEDOM",
                        "backNodeIdList": [],
                        "showSignature": true
                      }
                    },
                    {
                      "type": "TRANSIENT",
                      "buttonName": "暂存",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "PRINT",
                      "buttonName": "打印",
                      "enable": true,
                      "backType": null,
                      "function": null
                    }
                  ]
                },
                "state": "AUDITING",
                "operateState": null,
                "distributionList": [
                  {
                    "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                    "nodeName": "李黎明",
                    "type": "condition",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "9b12f448-2b76-11ee-97cf-ca09a85df480"
                    ],
                    "outgoingList": [
                      "33d94300-2b92-11ee-90f5-ca09a85df480"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "conditions": [],
                    "showWay": "condition"
                  },
                  {
                    "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
                    "nodeName": "范家本",
                    "type": "condition",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "4d883a3e-2b77-11ee-8fea-ca09a85df480"
                    ],
                    "outgoingList": null,
                    "props": null,
                    "state": "AUDITING",
                    "operateState": null,
                    "distributionList": null,
                    "conditions": [],
                    "showWay": "condition"
                  },
                  {
                    "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                    "nodeName": "李全文",
                    "type": "condition",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "9b12f448-2b76-11ee-97cf-ca09a85df480"
                    ],
                    "outgoingList": null,
                    "props": null,
                    "state": "AUDITING",
                    "operateState": null,
                    "distributionList": null,
                    "conditions": [],
                    "showWay": "condition"
                  },
                  {
                    "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
                    "nodeName": "谢志强(谢志强-gq专用)",
                    "type": "condition",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": null,
                    "outgoingList": [
                      "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                      "4dd289be-2b77-11ee-8fea-ca09a85df480"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "conditions": [
                      {
                        "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                        "nodeName": "李黎明",
                        "type": "condition",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "9b12f448-2b76-11ee-97cf-ca09a85df480"
                        ],
                        "outgoingList": [
                          "33d94300-2b92-11ee-90f5-ca09a85df480"
                        ],
                        "props": null,
                        "state": "AUDITED",
                        "operateState": null,
                        "distributionList": null,
                        "conditions": [],
                        "showWay": "condition"
                      },
                      {
                        "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                        "nodeName": "李全文",
                        "type": "condition",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "9b12f448-2b76-11ee-97cf-ca09a85df480"
                        ],
                        "outgoingList": null,
                        "props": null,
                        "state": "AUDITING",
                        "operateState": null,
                        "distributionList": null,
                        "conditions": [],
                        "showWay": "condition"
                      }
                    ],
                    "showWay": "condition"
                  }
                ],
                "child": {
                  "nodeId": "FLOW_HXXVWv_1690192069065",
                  "nodeName": "连接线",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "DISTRIBUTION_IHYHZG_1690192069065"
                  ],
                  "outgoingList": [
                    "AUDIT_jqkrdc_1690192071164"
                  ],
                  "props": null,
                  "state": "UNAUDIT",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "AUDIT_jqkrdc_1690192071164",
                    "nodeName": "审批节点",
                    "type": "AUDIT",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "FLOW_HXXVWv_1690192069065"
                    ],
                    "outgoingList": [
                      "FLOW_ZfrqA3_1690192071164"
                    ],
                    "props": {
                      "type": null,
                      "isMultiInstance": false,
                      "userRuleList": [
                        {
                          "ruleProperties": {
                            "ruleId": null,
                            "ruleName": null,
                            "dynamicPersonnel": "PROCESS_INITIATOR",
                            "ruleValue": {
                              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                              "name": "流程的发起人"
                            }
                          },
                          "selectorType": "DYNAMIC_STAFF",
                          "echoName": {
                            "id": null,
                            "name": "流程的发起人",
                            "number": null,
                            "invalid": false,
                            "userType": null,
                            "userTypeEnum": null
                          }
                        }
                      ],
                      "carbonCopyAssigneeRule": null,
                      "fieldList": [
                        {
                          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                          "widgetName": "单行文本",
                          "visible": true,
                          "editable": false
                        }
                      ],
                      "buttonList": [
                        {
                          "type": "AGREE",
                          "buttonName": "同意",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "REJECT",
                          "buttonName": "拒绝",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "BACK",
                          "buttonName": "退回",
                          "enable": true,
                          "backType": null,
                          "function": {
                            "type": "BACK",
                            "adviceRequired": null,
                            "signatureRequired": false,
                            "backType": "FREEDOM",
                            "backNodeIdList": [],
                            "showSignature": true
                          }
                        },
                        {
                          "type": "TRANSIENT",
                          "buttonName": "暂存",
                          "enable": true,
                          "backType": null,
                          "function": null
                        },
                        {
                          "type": "PRINT",
                          "buttonName": "打印",
                          "enable": true,
                          "backType": null,
                          "function": null
                        }
                      ]
                    },
                    "state": "UNAUDIT",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "FLOW_ZfrqA3_1690192071164",
                      "nodeName": "连接线",
                      "type": "FLOW",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "AUDIT_jqkrdc_1690192071164"
                      ],
                      "outgoingList": [
                        "End_Node"
                      ],
                      "props": null,
                      "state": "UNAUDIT",
                      "operateState": null,
                      "distributionList": null,
                      "child": {
                        "nodeId": "End_Node",
                        "nodeName": "结束",
                        "type": "END",
                        "pairId": null,
                        "pairPosition": null,
                        "incomingList": [
                          "FLOW_ZfrqA3_1690192071164"
                        ],
                        "outgoingList": [],
                        "props": null,
                        "state": "UNAUDIT",
                        "operateState": null,
                        "distributionList": null
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "AUDIT_o6u9lu_1690192062386",
    "nodeName": "审批节点",
    "type": "AUDIT",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "FLOW_1A3phn_1690192055414"
    ],
    "outgoingList": [
      "FLOW_tuNLrl_1690192062387"
    ],
    "props": {
      "type": null,
      "isMultiInstance": false,
      "userRuleList": [
        {
          "ruleProperties": {
            "ruleId": null,
            "ruleName": null,
            "dynamicPersonnel": "PROCESS_INITIATOR",
            "ruleValue": {
              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
              "name": "流程的发起人"
            }
          },
          "selectorType": "DYNAMIC_STAFF",
          "echoName": {
            "id": null,
            "name": "流程的发起人",
            "number": null,
            "invalid": false,
            "userType": null,
            "userTypeEnum": null
          }
        }
      ],
      "carbonCopyAssigneeRule": null,
      "fieldList": [
        {
          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
          "widgetName": "单行文本",
          "visible": true,
          "editable": false
        }
      ],
      "buttonList": [
        {
          "type": "AGREE",
          "buttonName": "同意",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "REJECT",
          "buttonName": "拒绝",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "BACK",
          "buttonName": "退回",
          "enable": true,
          "backType": null,
          "function": {
            "type": "BACK",
            "adviceRequired": null,
            "signatureRequired": false,
            "backType": "FREEDOM",
            "backNodeIdList": [],
            "showSignature": true
          }
        },
        {
          "type": "TRANSIENT",
          "buttonName": "暂存",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "PRINT",
          "buttonName": "打印",
          "enable": true,
          "backType": null,
          "function": null
        }
      ]
    },
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "FLOW_tuNLrl_1690192062387",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "AUDIT_o6u9lu_1690192062386"
      ],
      "outgoingList": [
        "GW_PARALLEL_ullDzD_1690192088657"
      ],
      "props": null,
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "GW_PARALLEL_ullDzD_1690192088657",
        "nodeName": "并行网关节点",
        "type": "GW_PARALLEL",
        "pairId": "GW_WD364a_1690192088657",
        "pairPosition": "F",
        "incomingList": [
          "FLOW_tuNLrl_1690192062387"
        ],
        "outgoingList": [
          "FLOW_67wxTY_1690192088657",
          "FLOW_akhmKX_1690192088657"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "conditions": [
          {
            "nodeId": "FLOW_67wxTY_1690192088657",
            "nodeName": "分支条件",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "GW_PARALLEL_ullDzD_1690192088657"
            ],
            "outgoingList": [
              "AUDIT_dDD9NI_1690192090553"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "showWay": "condition",
            "child": {
              "nodeId": "AUDIT_dDD9NI_1690192090553",
              "nodeName": "审批节点",
              "type": "AUDIT",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "FLOW_67wxTY_1690192088657"
              ],
              "outgoingList": [
                "FLOW_mt41u4_1690192090553"
              ],
              "props": {
                "type": null,
                "isMultiInstance": false,
                "userRuleList": [
                  {
                    "ruleProperties": {
                      "ruleId": null,
                      "ruleName": null,
                      "dynamicPersonnel": "PROCESS_INITIATOR",
                      "ruleValue": {
                        "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                        "name": "流程的发起人"
                      }
                    },
                    "selectorType": "DYNAMIC_STAFF",
                    "echoName": {
                      "id": null,
                      "name": "流程的发起人",
                      "number": null,
                      "invalid": false,
                      "userType": null,
                      "userTypeEnum": null
                    }
                  }
                ],
                "carbonCopyAssigneeRule": null,
                "fieldList": [
                  {
                    "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                    "widgetName": "单行文本",
                    "visible": true,
                    "editable": false
                  }
                ],
                "buttonList": [
                  {
                    "type": "AGREE",
                    "buttonName": "同意",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "REJECT",
                    "buttonName": "拒绝",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "BACK",
                    "buttonName": "退回",
                    "enable": true,
                    "backType": null,
                    "function": {
                      "type": "BACK",
                      "adviceRequired": null,
                      "signatureRequired": false,
                      "backType": "FREEDOM",
                      "backNodeIdList": [],
                      "showSignature": true
                    }
                  },
                  {
                    "type": "TRANSIENT",
                    "buttonName": "暂存",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "PRINT",
                    "buttonName": "打印",
                    "enable": true,
                    "backType": null,
                    "function": null
                  }
                ]
              },
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "FLOW_mt41u4_1690192090553",
                "nodeName": "连接线",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "AUDIT_dDD9NI_1690192090553"
                ],
                "outgoingList": [
                  "GW_PARALLEL_vAEreU_1690192088657"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null
              }
            }
          },
          {
            "nodeId": "FLOW_akhmKX_1690192088657",
            "nodeName": "分支条件",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "GW_PARALLEL_ullDzD_1690192088657"
            ],
            "outgoingList": [
              "AUDIT_XTaqFb_1690192091801"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "showWay": "condition",
            "child": {
              "nodeId": "AUDIT_XTaqFb_1690192091801",
              "nodeName": "审批节点",
              "type": "AUDIT",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "FLOW_akhmKX_1690192088657"
              ],
              "outgoingList": [
                "FLOW_DW7cMu_1690192091802"
              ],
              "props": {
                "type": null,
                "isMultiInstance": false,
                "userRuleList": [
                  {
                    "ruleProperties": {
                      "ruleId": null,
                      "ruleName": null,
                      "dynamicPersonnel": "PROCESS_INITIATOR",
                      "ruleValue": {
                        "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                        "name": "流程的发起人"
                      }
                    },
                    "selectorType": "DYNAMIC_STAFF",
                    "echoName": {
                      "id": null,
                      "name": "流程的发起人",
                      "number": null,
                      "invalid": false,
                      "userType": null,
                      "userTypeEnum": null
                    }
                  }
                ],
                "carbonCopyAssigneeRule": null,
                "fieldList": [
                  {
                    "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                    "widgetName": "单行文本",
                    "visible": true,
                    "editable": false
                  }
                ],
                "buttonList": [
                  {
                    "type": "AGREE",
                    "buttonName": "同意",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "REJECT",
                    "buttonName": "拒绝",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "BACK",
                    "buttonName": "退回",
                    "enable": true,
                    "backType": null,
                    "function": {
                      "type": "BACK",
                      "adviceRequired": null,
                      "signatureRequired": false,
                      "backType": "FREEDOM",
                      "backNodeIdList": [],
                      "showSignature": true
                    }
                  },
                  {
                    "type": "TRANSIENT",
                    "buttonName": "暂存",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "PRINT",
                    "buttonName": "打印",
                    "enable": true,
                    "backType": null,
                    "function": null
                  }
                ]
              },
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "FLOW_DW7cMu_1690192091802",
                "nodeName": "连接线",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "AUDIT_XTaqFb_1690192091801"
                ],
                "outgoingList": [
                  "GW_PARALLEL_vAEreU_1690192088657"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null
              }
            }
          },
          {
            "nodeId": "FLOW_67wxTY_1690192088657",
            "nodeName": "分支条件",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "GW_PARALLEL_ullDzD_1690192088657"
            ],
            "outgoingList": [
              "AUDIT_dDD9NI_1690192090553"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "showWay": "condition",
            "child": {
              "nodeId": "AUDIT_dDD9NI_1690192090553",
              "nodeName": "审批节点",
              "type": "AUDIT",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "FLOW_67wxTY_1690192088657"
              ],
              "outgoingList": [
                "FLOW_mt41u4_1690192090553"
              ],
              "props": {
                "type": null,
                "isMultiInstance": false,
                "userRuleList": [
                  {
                    "ruleProperties": {
                      "ruleId": null,
                      "ruleName": null,
                      "dynamicPersonnel": "PROCESS_INITIATOR",
                      "ruleValue": {
                        "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                        "name": "流程的发起人"
                      }
                    },
                    "selectorType": "DYNAMIC_STAFF",
                    "echoName": {
                      "id": null,
                      "name": "流程的发起人",
                      "number": null,
                      "invalid": false,
                      "userType": null,
                      "userTypeEnum": null
                    }
                  }
                ],
                "carbonCopyAssigneeRule": null,
                "fieldList": [
                  {
                    "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                    "widgetName": "单行文本",
                    "visible": true,
                    "editable": false
                  }
                ],
                "buttonList": [
                  {
                    "type": "AGREE",
                    "buttonName": "同意",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "REJECT",
                    "buttonName": "拒绝",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "BACK",
                    "buttonName": "退回",
                    "enable": true,
                    "backType": null,
                    "function": {
                      "type": "BACK",
                      "adviceRequired": null,
                      "signatureRequired": false,
                      "backType": "FREEDOM",
                      "backNodeIdList": [],
                      "showSignature": true
                    }
                  },
                  {
                    "type": "TRANSIENT",
                    "buttonName": "暂存",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "PRINT",
                    "buttonName": "打印",
                    "enable": true,
                    "backType": null,
                    "function": null
                  }
                ]
              },
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "FLOW_mt41u4_1690192090553",
                "nodeName": "连接线",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "AUDIT_dDD9NI_1690192090553"
                ],
                "outgoingList": [
                  "GW_PARALLEL_vAEreU_1690192088657"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null
              }
            }
          },
          {
            "nodeId": "FLOW_akhmKX_1690192088657",
            "nodeName": "分支条件",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "GW_PARALLEL_ullDzD_1690192088657"
            ],
            "outgoingList": [
              "AUDIT_XTaqFb_1690192091801"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "showWay": "condition",
            "child": {
              "nodeId": "AUDIT_XTaqFb_1690192091801",
              "nodeName": "审批节点",
              "type": "AUDIT",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "FLOW_akhmKX_1690192088657"
              ],
              "outgoingList": [
                "FLOW_DW7cMu_1690192091802"
              ],
              "props": {
                "type": null,
                "isMultiInstance": false,
                "userRuleList": [
                  {
                    "ruleProperties": {
                      "ruleId": null,
                      "ruleName": null,
                      "dynamicPersonnel": "PROCESS_INITIATOR",
                      "ruleValue": {
                        "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                        "name": "流程的发起人"
                      }
                    },
                    "selectorType": "DYNAMIC_STAFF",
                    "echoName": {
                      "id": null,
                      "name": "流程的发起人",
                      "number": null,
                      "invalid": false,
                      "userType": null,
                      "userTypeEnum": null
                    }
                  }
                ],
                "carbonCopyAssigneeRule": null,
                "fieldList": [
                  {
                    "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                    "widgetName": "单行文本",
                    "visible": true,
                    "editable": false
                  }
                ],
                "buttonList": [
                  {
                    "type": "AGREE",
                    "buttonName": "同意",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "REJECT",
                    "buttonName": "拒绝",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "BACK",
                    "buttonName": "退回",
                    "enable": true,
                    "backType": null,
                    "function": {
                      "type": "BACK",
                      "adviceRequired": null,
                      "signatureRequired": false,
                      "backType": "FREEDOM",
                      "backNodeIdList": [],
                      "showSignature": true
                    }
                  },
                  {
                    "type": "TRANSIENT",
                    "buttonName": "暂存",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "PRINT",
                    "buttonName": "打印",
                    "enable": true,
                    "backType": null,
                    "function": null
                  }
                ]
              },
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "FLOW_DW7cMu_1690192091802",
                "nodeName": "连接线",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "AUDIT_XTaqFb_1690192091801"
                ],
                "outgoingList": [
                  "GW_PARALLEL_vAEreU_1690192088657"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null
              }
            }
          }
        ],
        "child": {
          "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
          "nodeName": "并行网关节点",
          "type": "GW_PARALLEL",
          "pairId": "GW_WD364a_1690192088657",
          "pairPosition": "B",
          "incomingList": [
            "FLOW_mt41u4_1690192090553",
            "FLOW_DW7cMu_1690192091802"
          ],
          "outgoingList": [
            "FLOW_MP7XRV_1690192088657"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "FLOW_MP7XRV_1690192088657",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "GW_PARALLEL_vAEreU_1690192088657"
            ],
            "outgoingList": [
              "DISTRIBUTION_IHYHZG_1690192069065"
            ],
            "props": null,
            "state": "AUDITING",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
              "nodeName": "任务分发节点",
              "type": "DISTRIBUTION",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "FLOW_MP7XRV_1690192088657"
              ],
              "outgoingList": [
                "FLOW_HXXVWv_1690192069065"
              ],
              "props": {
                "type": null,
                "nodeName": null,
                "userRuleList": [
                  {
                    "ruleProperties": {
                      "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                      "ruleName": "谢志强(谢志强-gq专用)",
                      "dynamicPersonnel": null,
                      "ruleValue": null
                    },
                    "selectorType": "DESIGNATED_PERSONNEL",
                    "echoName": {
                      "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                      "name": "谢志强(谢志强-gq专用)",
                      "number": "9876538",
                      "invalid": false,
                      "userType": 1,
                      "userTypeEnum": "TEACHER"
                    }
                  }
                ],
                "carbonCopyAssigneeRule": null,
                "fieldList": [
                  {
                    "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                    "widgetName": "单行文本",
                    "visible": true,
                    "editable": false
                  }
                ],
                "buttonList": [
                  {
                    "type": "AGREE",
                    "buttonName": "同意",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "REJECT",
                    "buttonName": "拒绝",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "BACK",
                    "buttonName": "退回",
                    "enable": true,
                    "backType": null,
                    "function": {
                      "type": "BACK",
                      "adviceRequired": null,
                      "signatureRequired": false,
                      "backType": "FREEDOM",
                      "backNodeIdList": [],
                      "showSignature": true
                    }
                  },
                  {
                    "type": "TRANSIENT",
                    "buttonName": "暂存",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "PRINT",
                    "buttonName": "打印",
                    "enable": true,
                    "backType": null,
                    "function": null
                  }
                ]
              },
              "state": "AUDITING",
              "operateState": null,
              "distributionList": [
                {
                  "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                  "nodeName": "李黎明",
                  "type": "condition",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "9b12f448-2b76-11ee-97cf-ca09a85df480"
                  ],
                  "outgoingList": [
                    "33d94300-2b92-11ee-90f5-ca09a85df480"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "conditions": [],
                  "showWay": "condition"
                },
                {
                  "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
                  "nodeName": "范家本",
                  "type": "condition",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "4d883a3e-2b77-11ee-8fea-ca09a85df480"
                  ],
                  "outgoingList": null,
                  "props": null,
                  "state": "AUDITING",
                  "operateState": null,
                  "distributionList": null,
                  "conditions": [],
                  "showWay": "condition"
                },
                {
                  "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                  "nodeName": "李全文",
                  "type": "condition",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "9b12f448-2b76-11ee-97cf-ca09a85df480"
                  ],
                  "outgoingList": null,
                  "props": null,
                  "state": "AUDITING",
                  "operateState": null,
                  "distributionList": null,
                  "conditions": [],
                  "showWay": "condition"
                },
                {
                  "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
                  "nodeName": "谢志强(谢志强-gq专用)",
                  "type": "condition",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": null,
                  "outgoingList": [
                    "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                    "4dd289be-2b77-11ee-8fea-ca09a85df480"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "conditions": [
                    {
                      "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                      "nodeName": "李黎明",
                      "type": "condition",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "9b12f448-2b76-11ee-97cf-ca09a85df480"
                      ],
                      "outgoingList": [
                        "33d94300-2b92-11ee-90f5-ca09a85df480"
                      ],
                      "props": null,
                      "state": "AUDITED",
                      "operateState": null,
                      "distributionList": null,
                      "conditions": [],
                      "showWay": "condition"
                    },
                    {
                      "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                      "nodeName": "李全文",
                      "type": "condition",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "9b12f448-2b76-11ee-97cf-ca09a85df480"
                      ],
                      "outgoingList": null,
                      "props": null,
                      "state": "AUDITING",
                      "operateState": null,
                      "distributionList": null,
                      "conditions": [],
                      "showWay": "condition"
                    }
                  ],
                  "showWay": "condition"
                }
              ],
              "child": {
                "nodeId": "FLOW_HXXVWv_1690192069065",
                "nodeName": "连接线",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "DISTRIBUTION_IHYHZG_1690192069065"
                ],
                "outgoingList": [
                  "AUDIT_jqkrdc_1690192071164"
                ],
                "props": null,
                "state": "UNAUDIT",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "AUDIT_jqkrdc_1690192071164",
                  "nodeName": "审批节点",
                  "type": "AUDIT",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "FLOW_HXXVWv_1690192069065"
                  ],
                  "outgoingList": [
                    "FLOW_ZfrqA3_1690192071164"
                  ],
                  "props": {
                    "type": null,
                    "isMultiInstance": false,
                    "userRuleList": [
                      {
                        "ruleProperties": {
                          "ruleId": null,
                          "ruleName": null,
                          "dynamicPersonnel": "PROCESS_INITIATOR",
                          "ruleValue": {
                            "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                            "name": "流程的发起人"
                          }
                        },
                        "selectorType": "DYNAMIC_STAFF",
                        "echoName": {
                          "id": null,
                          "name": "流程的发起人",
                          "number": null,
                          "invalid": false,
                          "userType": null,
                          "userTypeEnum": null
                        }
                      }
                    ],
                    "carbonCopyAssigneeRule": null,
                    "fieldList": [
                      {
                        "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                        "widgetName": "单行文本",
                        "visible": true,
                        "editable": false
                      }
                    ],
                    "buttonList": [
                      {
                        "type": "AGREE",
                        "buttonName": "同意",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "REJECT",
                        "buttonName": "拒绝",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "BACK",
                        "buttonName": "退回",
                        "enable": true,
                        "backType": null,
                        "function": {
                          "type": "BACK",
                          "adviceRequired": null,
                          "signatureRequired": false,
                          "backType": "FREEDOM",
                          "backNodeIdList": [],
                          "showSignature": true
                        }
                      },
                      {
                        "type": "TRANSIENT",
                        "buttonName": "暂存",
                        "enable": true,
                        "backType": null,
                        "function": null
                      },
                      {
                        "type": "PRINT",
                        "buttonName": "打印",
                        "enable": true,
                        "backType": null,
                        "function": null
                      }
                    ]
                  },
                  "state": "UNAUDIT",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "FLOW_ZfrqA3_1690192071164",
                    "nodeName": "连接线",
                    "type": "FLOW",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "AUDIT_jqkrdc_1690192071164"
                    ],
                    "outgoingList": [
                      "End_Node"
                    ],
                    "props": null,
                    "state": "UNAUDIT",
                    "operateState": null,
                    "distributionList": null,
                    "child": {
                      "nodeId": "End_Node",
                      "nodeName": "结束",
                      "type": "END",
                      "pairId": null,
                      "pairPosition": null,
                      "incomingList": [
                        "FLOW_ZfrqA3_1690192071164"
                      ],
                      "outgoingList": [],
                      "props": null,
                      "state": "UNAUDIT",
                      "operateState": null,
                      "distributionList": null
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "FLOW_tuNLrl_1690192062387",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "AUDIT_o6u9lu_1690192062386"
    ],
    "outgoingList": [
      "GW_PARALLEL_ullDzD_1690192088657"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "GW_PARALLEL_ullDzD_1690192088657",
      "nodeName": "并行网关节点",
      "type": "GW_PARALLEL",
      "pairId": "GW_WD364a_1690192088657",
      "pairPosition": "F",
      "incomingList": [
        "FLOW_tuNLrl_1690192062387"
      ],
      "outgoingList": [
        "FLOW_67wxTY_1690192088657",
        "FLOW_akhmKX_1690192088657"
      ],
      "props": null,
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "conditions": [
        {
          "nodeId": "FLOW_67wxTY_1690192088657",
          "nodeName": "分支条件",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "GW_PARALLEL_ullDzD_1690192088657"
          ],
          "outgoingList": [
            "AUDIT_dDD9NI_1690192090553"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "showWay": "condition",
          "child": {
            "nodeId": "AUDIT_dDD9NI_1690192090553",
            "nodeName": "审批节点",
            "type": "AUDIT",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_67wxTY_1690192088657"
            ],
            "outgoingList": [
              "FLOW_mt41u4_1690192090553"
            ],
            "props": {
              "type": null,
              "isMultiInstance": false,
              "userRuleList": [
                {
                  "ruleProperties": {
                    "ruleId": null,
                    "ruleName": null,
                    "dynamicPersonnel": "PROCESS_INITIATOR",
                    "ruleValue": {
                      "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                      "name": "流程的发起人"
                    }
                  },
                  "selectorType": "DYNAMIC_STAFF",
                  "echoName": {
                    "id": null,
                    "name": "流程的发起人",
                    "number": null,
                    "invalid": false,
                    "userType": null,
                    "userTypeEnum": null
                  }
                }
              ],
              "carbonCopyAssigneeRule": null,
              "fieldList": [
                {
                  "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                  "widgetName": "单行文本",
                  "visible": true,
                  "editable": false
                }
              ],
              "buttonList": [
                {
                  "type": "AGREE",
                  "buttonName": "同意",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "REJECT",
                  "buttonName": "拒绝",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "BACK",
                  "buttonName": "退回",
                  "enable": true,
                  "backType": null,
                  "function": {
                    "type": "BACK",
                    "adviceRequired": null,
                    "signatureRequired": false,
                    "backType": "FREEDOM",
                    "backNodeIdList": [],
                    "showSignature": true
                  }
                },
                {
                  "type": "TRANSIENT",
                  "buttonName": "暂存",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "PRINT",
                  "buttonName": "打印",
                  "enable": true,
                  "backType": null,
                  "function": null
                }
              ]
            },
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "FLOW_mt41u4_1690192090553",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "AUDIT_dDD9NI_1690192090553"
              ],
              "outgoingList": [
                "GW_PARALLEL_vAEreU_1690192088657"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null
            }
          }
        },
        {
          "nodeId": "FLOW_akhmKX_1690192088657",
          "nodeName": "分支条件",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "GW_PARALLEL_ullDzD_1690192088657"
          ],
          "outgoingList": [
            "AUDIT_XTaqFb_1690192091801"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "showWay": "condition",
          "child": {
            "nodeId": "AUDIT_XTaqFb_1690192091801",
            "nodeName": "审批节点",
            "type": "AUDIT",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_akhmKX_1690192088657"
            ],
            "outgoingList": [
              "FLOW_DW7cMu_1690192091802"
            ],
            "props": {
              "type": null,
              "isMultiInstance": false,
              "userRuleList": [
                {
                  "ruleProperties": {
                    "ruleId": null,
                    "ruleName": null,
                    "dynamicPersonnel": "PROCESS_INITIATOR",
                    "ruleValue": {
                      "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                      "name": "流程的发起人"
                    }
                  },
                  "selectorType": "DYNAMIC_STAFF",
                  "echoName": {
                    "id": null,
                    "name": "流程的发起人",
                    "number": null,
                    "invalid": false,
                    "userType": null,
                    "userTypeEnum": null
                  }
                }
              ],
              "carbonCopyAssigneeRule": null,
              "fieldList": [
                {
                  "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                  "widgetName": "单行文本",
                  "visible": true,
                  "editable": false
                }
              ],
              "buttonList": [
                {
                  "type": "AGREE",
                  "buttonName": "同意",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "REJECT",
                  "buttonName": "拒绝",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "BACK",
                  "buttonName": "退回",
                  "enable": true,
                  "backType": null,
                  "function": {
                    "type": "BACK",
                    "adviceRequired": null,
                    "signatureRequired": false,
                    "backType": "FREEDOM",
                    "backNodeIdList": [],
                    "showSignature": true
                  }
                },
                {
                  "type": "TRANSIENT",
                  "buttonName": "暂存",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "PRINT",
                  "buttonName": "打印",
                  "enable": true,
                  "backType": null,
                  "function": null
                }
              ]
            },
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "FLOW_DW7cMu_1690192091802",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "AUDIT_XTaqFb_1690192091801"
              ],
              "outgoingList": [
                "GW_PARALLEL_vAEreU_1690192088657"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null
            }
          }
        },
        {
          "nodeId": "FLOW_67wxTY_1690192088657",
          "nodeName": "分支条件",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "GW_PARALLEL_ullDzD_1690192088657"
          ],
          "outgoingList": [
            "AUDIT_dDD9NI_1690192090553"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "showWay": "condition",
          "child": {
            "nodeId": "AUDIT_dDD9NI_1690192090553",
            "nodeName": "审批节点",
            "type": "AUDIT",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_67wxTY_1690192088657"
            ],
            "outgoingList": [
              "FLOW_mt41u4_1690192090553"
            ],
            "props": {
              "type": null,
              "isMultiInstance": false,
              "userRuleList": [
                {
                  "ruleProperties": {
                    "ruleId": null,
                    "ruleName": null,
                    "dynamicPersonnel": "PROCESS_INITIATOR",
                    "ruleValue": {
                      "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                      "name": "流程的发起人"
                    }
                  },
                  "selectorType": "DYNAMIC_STAFF",
                  "echoName": {
                    "id": null,
                    "name": "流程的发起人",
                    "number": null,
                    "invalid": false,
                    "userType": null,
                    "userTypeEnum": null
                  }
                }
              ],
              "carbonCopyAssigneeRule": null,
              "fieldList": [
                {
                  "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                  "widgetName": "单行文本",
                  "visible": true,
                  "editable": false
                }
              ],
              "buttonList": [
                {
                  "type": "AGREE",
                  "buttonName": "同意",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "REJECT",
                  "buttonName": "拒绝",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "BACK",
                  "buttonName": "退回",
                  "enable": true,
                  "backType": null,
                  "function": {
                    "type": "BACK",
                    "adviceRequired": null,
                    "signatureRequired": false,
                    "backType": "FREEDOM",
                    "backNodeIdList": [],
                    "showSignature": true
                  }
                },
                {
                  "type": "TRANSIENT",
                  "buttonName": "暂存",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "PRINT",
                  "buttonName": "打印",
                  "enable": true,
                  "backType": null,
                  "function": null
                }
              ]
            },
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "FLOW_mt41u4_1690192090553",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "AUDIT_dDD9NI_1690192090553"
              ],
              "outgoingList": [
                "GW_PARALLEL_vAEreU_1690192088657"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null
            }
          }
        },
        {
          "nodeId": "FLOW_akhmKX_1690192088657",
          "nodeName": "分支条件",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "GW_PARALLEL_ullDzD_1690192088657"
          ],
          "outgoingList": [
            "AUDIT_XTaqFb_1690192091801"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "showWay": "condition",
          "child": {
            "nodeId": "AUDIT_XTaqFb_1690192091801",
            "nodeName": "审批节点",
            "type": "AUDIT",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_akhmKX_1690192088657"
            ],
            "outgoingList": [
              "FLOW_DW7cMu_1690192091802"
            ],
            "props": {
              "type": null,
              "isMultiInstance": false,
              "userRuleList": [
                {
                  "ruleProperties": {
                    "ruleId": null,
                    "ruleName": null,
                    "dynamicPersonnel": "PROCESS_INITIATOR",
                    "ruleValue": {
                      "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                      "name": "流程的发起人"
                    }
                  },
                  "selectorType": "DYNAMIC_STAFF",
                  "echoName": {
                    "id": null,
                    "name": "流程的发起人",
                    "number": null,
                    "invalid": false,
                    "userType": null,
                    "userTypeEnum": null
                  }
                }
              ],
              "carbonCopyAssigneeRule": null,
              "fieldList": [
                {
                  "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                  "widgetName": "单行文本",
                  "visible": true,
                  "editable": false
                }
              ],
              "buttonList": [
                {
                  "type": "AGREE",
                  "buttonName": "同意",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "REJECT",
                  "buttonName": "拒绝",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "BACK",
                  "buttonName": "退回",
                  "enable": true,
                  "backType": null,
                  "function": {
                    "type": "BACK",
                    "adviceRequired": null,
                    "signatureRequired": false,
                    "backType": "FREEDOM",
                    "backNodeIdList": [],
                    "showSignature": true
                  }
                },
                {
                  "type": "TRANSIENT",
                  "buttonName": "暂存",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "PRINT",
                  "buttonName": "打印",
                  "enable": true,
                  "backType": null,
                  "function": null
                }
              ]
            },
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "FLOW_DW7cMu_1690192091802",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "AUDIT_XTaqFb_1690192091801"
              ],
              "outgoingList": [
                "GW_PARALLEL_vAEreU_1690192088657"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null
            }
          }
        }
      ],
      "child": {
        "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
        "nodeName": "并行网关节点",
        "type": "GW_PARALLEL",
        "pairId": "GW_WD364a_1690192088657",
        "pairPosition": "B",
        "incomingList": [
          "FLOW_mt41u4_1690192090553",
          "FLOW_DW7cMu_1690192091802"
        ],
        "outgoingList": [
          "FLOW_MP7XRV_1690192088657"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "FLOW_MP7XRV_1690192088657",
          "nodeName": "连接线",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "GW_PARALLEL_vAEreU_1690192088657"
          ],
          "outgoingList": [
            "DISTRIBUTION_IHYHZG_1690192069065"
          ],
          "props": null,
          "state": "AUDITING",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
            "nodeName": "任务分发节点",
            "type": "DISTRIBUTION",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_MP7XRV_1690192088657"
            ],
            "outgoingList": [
              "FLOW_HXXVWv_1690192069065"
            ],
            "props": {
              "type": null,
              "nodeName": null,
              "userRuleList": [
                {
                  "ruleProperties": {
                    "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                    "ruleName": "谢志强(谢志强-gq专用)",
                    "dynamicPersonnel": null,
                    "ruleValue": null
                  },
                  "selectorType": "DESIGNATED_PERSONNEL",
                  "echoName": {
                    "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                    "name": "谢志强(谢志强-gq专用)",
                    "number": "9876538",
                    "invalid": false,
                    "userType": 1,
                    "userTypeEnum": "TEACHER"
                  }
                }
              ],
              "carbonCopyAssigneeRule": null,
              "fieldList": [
                {
                  "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                  "widgetName": "单行文本",
                  "visible": true,
                  "editable": false
                }
              ],
              "buttonList": [
                {
                  "type": "AGREE",
                  "buttonName": "同意",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "REJECT",
                  "buttonName": "拒绝",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "BACK",
                  "buttonName": "退回",
                  "enable": true,
                  "backType": null,
                  "function": {
                    "type": "BACK",
                    "adviceRequired": null,
                    "signatureRequired": false,
                    "backType": "FREEDOM",
                    "backNodeIdList": [],
                    "showSignature": true
                  }
                },
                {
                  "type": "TRANSIENT",
                  "buttonName": "暂存",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "PRINT",
                  "buttonName": "打印",
                  "enable": true,
                  "backType": null,
                  "function": null
                }
              ]
            },
            "state": "AUDITING",
            "operateState": null,
            "distributionList": [
              {
                "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                "nodeName": "李黎明",
                "type": "condition",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "9b12f448-2b76-11ee-97cf-ca09a85df480"
                ],
                "outgoingList": [
                  "33d94300-2b92-11ee-90f5-ca09a85df480"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "conditions": [],
                "showWay": "condition"
              },
              {
                "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
                "nodeName": "范家本",
                "type": "condition",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "4d883a3e-2b77-11ee-8fea-ca09a85df480"
                ],
                "outgoingList": null,
                "props": null,
                "state": "AUDITING",
                "operateState": null,
                "distributionList": null,
                "conditions": [],
                "showWay": "condition"
              },
              {
                "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                "nodeName": "李全文",
                "type": "condition",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "9b12f448-2b76-11ee-97cf-ca09a85df480"
                ],
                "outgoingList": null,
                "props": null,
                "state": "AUDITING",
                "operateState": null,
                "distributionList": null,
                "conditions": [],
                "showWay": "condition"
              },
              {
                "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
                "nodeName": "谢志强(谢志强-gq专用)",
                "type": "condition",
                "pairId": null,
                "pairPosition": null,
                "incomingList": null,
                "outgoingList": [
                  "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                  "4dd289be-2b77-11ee-8fea-ca09a85df480"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "conditions": [
                  {
                    "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                    "nodeName": "李黎明",
                    "type": "condition",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "9b12f448-2b76-11ee-97cf-ca09a85df480"
                    ],
                    "outgoingList": [
                      "33d94300-2b92-11ee-90f5-ca09a85df480"
                    ],
                    "props": null,
                    "state": "AUDITED",
                    "operateState": null,
                    "distributionList": null,
                    "conditions": [],
                    "showWay": "condition"
                  },
                  {
                    "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                    "nodeName": "李全文",
                    "type": "condition",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "9b12f448-2b76-11ee-97cf-ca09a85df480"
                    ],
                    "outgoingList": null,
                    "props": null,
                    "state": "AUDITING",
                    "operateState": null,
                    "distributionList": null,
                    "conditions": [],
                    "showWay": "condition"
                  }
                ],
                "showWay": "condition"
              }
            ],
            "child": {
              "nodeId": "FLOW_HXXVWv_1690192069065",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "DISTRIBUTION_IHYHZG_1690192069065"
              ],
              "outgoingList": [
                "AUDIT_jqkrdc_1690192071164"
              ],
              "props": null,
              "state": "UNAUDIT",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "AUDIT_jqkrdc_1690192071164",
                "nodeName": "审批节点",
                "type": "AUDIT",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "FLOW_HXXVWv_1690192069065"
                ],
                "outgoingList": [
                  "FLOW_ZfrqA3_1690192071164"
                ],
                "props": {
                  "type": null,
                  "isMultiInstance": false,
                  "userRuleList": [
                    {
                      "ruleProperties": {
                        "ruleId": null,
                        "ruleName": null,
                        "dynamicPersonnel": "PROCESS_INITIATOR",
                        "ruleValue": {
                          "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                          "name": "流程的发起人"
                        }
                      },
                      "selectorType": "DYNAMIC_STAFF",
                      "echoName": {
                        "id": null,
                        "name": "流程的发起人",
                        "number": null,
                        "invalid": false,
                        "userType": null,
                        "userTypeEnum": null
                      }
                    }
                  ],
                  "carbonCopyAssigneeRule": null,
                  "fieldList": [
                    {
                      "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                      "widgetName": "单行文本",
                      "visible": true,
                      "editable": false
                    }
                  ],
                  "buttonList": [
                    {
                      "type": "AGREE",
                      "buttonName": "同意",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "REJECT",
                      "buttonName": "拒绝",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "BACK",
                      "buttonName": "退回",
                      "enable": true,
                      "backType": null,
                      "function": {
                        "type": "BACK",
                        "adviceRequired": null,
                        "signatureRequired": false,
                        "backType": "FREEDOM",
                        "backNodeIdList": [],
                        "showSignature": true
                      }
                    },
                    {
                      "type": "TRANSIENT",
                      "buttonName": "暂存",
                      "enable": true,
                      "backType": null,
                      "function": null
                    },
                    {
                      "type": "PRINT",
                      "buttonName": "打印",
                      "enable": true,
                      "backType": null,
                      "function": null
                    }
                  ]
                },
                "state": "UNAUDIT",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "FLOW_ZfrqA3_1690192071164",
                  "nodeName": "连接线",
                  "type": "FLOW",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "AUDIT_jqkrdc_1690192071164"
                  ],
                  "outgoingList": [
                    "End_Node"
                  ],
                  "props": null,
                  "state": "UNAUDIT",
                  "operateState": null,
                  "distributionList": null,
                  "child": {
                    "nodeId": "End_Node",
                    "nodeName": "结束",
                    "type": "END",
                    "pairId": null,
                    "pairPosition": null,
                    "incomingList": [
                      "FLOW_ZfrqA3_1690192071164"
                    ],
                    "outgoingList": [],
                    "props": null,
                    "state": "UNAUDIT",
                    "operateState": null,
                    "distributionList": null
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
    "nodeName": "任务分发节点",
    "type": "DISTRIBUTION",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "FLOW_MP7XRV_1690192088657"
    ],
    "outgoingList": [
      "FLOW_HXXVWv_1690192069065"
    ],
    "props": {
      "type": null,
      "nodeName": null,
      "userRuleList": [
        {
          "ruleProperties": {
            "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
            "ruleName": "谢志强(谢志强-gq专用)",
            "dynamicPersonnel": null,
            "ruleValue": null
          },
          "selectorType": "DESIGNATED_PERSONNEL",
          "echoName": {
            "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
            "name": "谢志强(谢志强-gq专用)",
            "number": "9876538",
            "invalid": false,
            "userType": 1,
            "userTypeEnum": "TEACHER"
          }
        }
      ],
      "carbonCopyAssigneeRule": null,
      "fieldList": [
        {
          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
          "widgetName": "单行文本",
          "visible": true,
          "editable": false
        }
      ],
      "buttonList": [
        {
          "type": "AGREE",
          "buttonName": "同意",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "REJECT",
          "buttonName": "拒绝",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "BACK",
          "buttonName": "退回",
          "enable": true,
          "backType": null,
          "function": {
            "type": "BACK",
            "adviceRequired": null,
            "signatureRequired": false,
            "backType": "FREEDOM",
            "backNodeIdList": [],
            "showSignature": true
          }
        },
        {
          "type": "TRANSIENT",
          "buttonName": "暂存",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "PRINT",
          "buttonName": "打印",
          "enable": true,
          "backType": null,
          "function": null
        }
      ]
    },
    "state": "AUDITING",
    "operateState": null,
    "distributionList": [
      {
        "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
        "nodeName": "李黎明",
        "type": "condition",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "9b12f448-2b76-11ee-97cf-ca09a85df480"
        ],
        "outgoingList": [
          "33d94300-2b92-11ee-90f5-ca09a85df480"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "conditions": [],
        "showWay": "condition"
      },
      {
        "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
        "nodeName": "范家本",
        "type": "condition",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "4d883a3e-2b77-11ee-8fea-ca09a85df480"
        ],
        "outgoingList": null,
        "props": null,
        "state": "AUDITING",
        "operateState": null,
        "distributionList": null,
        "conditions": [],
        "showWay": "condition"
      },
      {
        "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
        "nodeName": "李全文",
        "type": "condition",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "9b12f448-2b76-11ee-97cf-ca09a85df480"
        ],
        "outgoingList": null,
        "props": null,
        "state": "AUDITING",
        "operateState": null,
        "distributionList": null,
        "conditions": [],
        "showWay": "condition"
      },
      {
        "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
        "nodeName": "谢志强(谢志强-gq专用)",
        "type": "condition",
        "pairId": null,
        "pairPosition": null,
        "incomingList": null,
        "outgoingList": [
          "4d883a3e-2b77-11ee-8fea-ca09a85df480",
          "4dd289be-2b77-11ee-8fea-ca09a85df480"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "conditions": [
          {
            "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
            "nodeName": "李黎明",
            "type": "condition",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "9b12f448-2b76-11ee-97cf-ca09a85df480"
            ],
            "outgoingList": [
              "33d94300-2b92-11ee-90f5-ca09a85df480"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "conditions": [],
            "showWay": "condition"
          },
          {
            "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
            "nodeName": "李全文",
            "type": "condition",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "9b12f448-2b76-11ee-97cf-ca09a85df480"
            ],
            "outgoingList": null,
            "props": null,
            "state": "AUDITING",
            "operateState": null,
            "distributionList": null,
            "conditions": [],
            "showWay": "condition"
          }
        ],
        "showWay": "condition"
      }
    ],
    "child": {
      "nodeId": "FLOW_HXXVWv_1690192069065",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "DISTRIBUTION_IHYHZG_1690192069065"
      ],
      "outgoingList": [
        "AUDIT_jqkrdc_1690192071164"
      ],
      "props": null,
      "state": "UNAUDIT",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "AUDIT_jqkrdc_1690192071164",
        "nodeName": "审批节点",
        "type": "AUDIT",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "FLOW_HXXVWv_1690192069065"
        ],
        "outgoingList": [
          "FLOW_ZfrqA3_1690192071164"
        ],
        "props": {
          "type": null,
          "isMultiInstance": false,
          "userRuleList": [
            {
              "ruleProperties": {
                "ruleId": null,
                "ruleName": null,
                "dynamicPersonnel": "PROCESS_INITIATOR",
                "ruleValue": {
                  "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                  "name": "流程的发起人"
                }
              },
              "selectorType": "DYNAMIC_STAFF",
              "echoName": {
                "id": null,
                "name": "流程的发起人",
                "number": null,
                "invalid": false,
                "userType": null,
                "userTypeEnum": null
              }
            }
          ],
          "carbonCopyAssigneeRule": null,
          "fieldList": [
            {
              "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
              "widgetName": "单行文本",
              "visible": true,
              "editable": false
            }
          ],
          "buttonList": [
            {
              "type": "AGREE",
              "buttonName": "同意",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "REJECT",
              "buttonName": "拒绝",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "BACK",
              "buttonName": "退回",
              "enable": true,
              "backType": null,
              "function": {
                "type": "BACK",
                "adviceRequired": null,
                "signatureRequired": false,
                "backType": "FREEDOM",
                "backNodeIdList": [],
                "showSignature": true
              }
            },
            {
              "type": "TRANSIENT",
              "buttonName": "暂存",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "PRINT",
              "buttonName": "打印",
              "enable": true,
              "backType": null,
              "function": null
            }
          ]
        },
        "state": "UNAUDIT",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "FLOW_ZfrqA3_1690192071164",
          "nodeName": "连接线",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "AUDIT_jqkrdc_1690192071164"
          ],
          "outgoingList": [
            "End_Node"
          ],
          "props": null,
          "state": "UNAUDIT",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "End_Node",
            "nodeName": "结束",
            "type": "END",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_ZfrqA3_1690192071164"
            ],
            "outgoingList": [],
            "props": null,
            "state": "UNAUDIT",
            "operateState": null,
            "distributionList": null
          }
        }
      }
    }
  },
  {
    "nodeId": "FLOW_HXXVWv_1690192069065",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "DISTRIBUTION_IHYHZG_1690192069065"
    ],
    "outgoingList": [
      "AUDIT_jqkrdc_1690192071164"
    ],
    "props": null,
    "state": "UNAUDIT",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "AUDIT_jqkrdc_1690192071164",
      "nodeName": "审批节点",
      "type": "AUDIT",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "FLOW_HXXVWv_1690192069065"
      ],
      "outgoingList": [
        "FLOW_ZfrqA3_1690192071164"
      ],
      "props": {
        "type": null,
        "isMultiInstance": false,
        "userRuleList": [
          {
            "ruleProperties": {
              "ruleId": null,
              "ruleName": null,
              "dynamicPersonnel": "PROCESS_INITIATOR",
              "ruleValue": {
                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                "name": "流程的发起人"
              }
            },
            "selectorType": "DYNAMIC_STAFF",
            "echoName": {
              "id": null,
              "name": "流程的发起人",
              "number": null,
              "invalid": false,
              "userType": null,
              "userTypeEnum": null
            }
          }
        ],
        "carbonCopyAssigneeRule": null,
        "fieldList": [
          {
            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
            "widgetName": "单行文本",
            "visible": true,
            "editable": false
          }
        ],
        "buttonList": [
          {
            "type": "AGREE",
            "buttonName": "同意",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "REJECT",
            "buttonName": "拒绝",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "BACK",
            "buttonName": "退回",
            "enable": true,
            "backType": null,
            "function": {
              "type": "BACK",
              "adviceRequired": null,
              "signatureRequired": false,
              "backType": "FREEDOM",
              "backNodeIdList": [],
              "showSignature": true
            }
          },
          {
            "type": "TRANSIENT",
            "buttonName": "暂存",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "PRINT",
            "buttonName": "打印",
            "enable": true,
            "backType": null,
            "function": null
          }
        ]
      },
      "state": "UNAUDIT",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "FLOW_ZfrqA3_1690192071164",
        "nodeName": "连接线",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "AUDIT_jqkrdc_1690192071164"
        ],
        "outgoingList": [
          "End_Node"
        ],
        "props": null,
        "state": "UNAUDIT",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "End_Node",
          "nodeName": "结束",
          "type": "END",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_ZfrqA3_1690192071164"
          ],
          "outgoingList": [],
          "props": null,
          "state": "UNAUDIT",
          "operateState": null,
          "distributionList": null
        }
      }
    }
  },
  {
    "nodeId": "AUDIT_jqkrdc_1690192071164",
    "nodeName": "审批节点",
    "type": "AUDIT",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "FLOW_HXXVWv_1690192069065"
    ],
    "outgoingList": [
      "FLOW_ZfrqA3_1690192071164"
    ],
    "props": {
      "type": null,
      "isMultiInstance": false,
      "userRuleList": [
        {
          "ruleProperties": {
            "ruleId": null,
            "ruleName": null,
            "dynamicPersonnel": "PROCESS_INITIATOR",
            "ruleValue": {
              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
              "name": "流程的发起人"
            }
          },
          "selectorType": "DYNAMIC_STAFF",
          "echoName": {
            "id": null,
            "name": "流程的发起人",
            "number": null,
            "invalid": false,
            "userType": null,
            "userTypeEnum": null
          }
        }
      ],
      "carbonCopyAssigneeRule": null,
      "fieldList": [
        {
          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
          "widgetName": "单行文本",
          "visible": true,
          "editable": false
        }
      ],
      "buttonList": [
        {
          "type": "AGREE",
          "buttonName": "同意",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "REJECT",
          "buttonName": "拒绝",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "BACK",
          "buttonName": "退回",
          "enable": true,
          "backType": null,
          "function": {
            "type": "BACK",
            "adviceRequired": null,
            "signatureRequired": false,
            "backType": "FREEDOM",
            "backNodeIdList": [],
            "showSignature": true
          }
        },
        {
          "type": "TRANSIENT",
          "buttonName": "暂存",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "PRINT",
          "buttonName": "打印",
          "enable": true,
          "backType": null,
          "function": null
        }
      ]
    },
    "state": "UNAUDIT",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "FLOW_ZfrqA3_1690192071164",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "AUDIT_jqkrdc_1690192071164"
      ],
      "outgoingList": [
        "End_Node"
      ],
      "props": null,
      "state": "UNAUDIT",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "End_Node",
        "nodeName": "结束",
        "type": "END",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "FLOW_ZfrqA3_1690192071164"
        ],
        "outgoingList": [],
        "props": null,
        "state": "UNAUDIT",
        "operateState": null,
        "distributionList": null
      }
    }
  },
  {
    "nodeId": "FLOW_ZfrqA3_1690192071164",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "AUDIT_jqkrdc_1690192071164"
    ],
    "outgoingList": [
      "End_Node"
    ],
    "props": null,
    "state": "UNAUDIT",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "End_Node",
      "nodeName": "结束",
      "type": "END",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "FLOW_ZfrqA3_1690192071164"
      ],
      "outgoingList": [],
      "props": null,
      "state": "UNAUDIT",
      "operateState": null,
      "distributionList": null
    }
  },
  {
    "nodeId": "End_Node",
    "nodeName": "结束",
    "type": "END",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "FLOW_ZfrqA3_1690192071164"
    ],
    "outgoingList": [],
    "props": null,
    "state": "UNAUDIT",
    "operateState": null,
    "distributionList": null
  },
  {
    "nodeId": "GW_PARALLEL_ullDzD_1690192088657",
    "nodeName": "并行网关节点",
    "type": "GW_PARALLEL",
    "pairId": "GW_WD364a_1690192088657",
    "pairPosition": "F",
    "incomingList": [
      "FLOW_tuNLrl_1690192062387"
    ],
    "outgoingList": [
      "FLOW_67wxTY_1690192088657",
      "FLOW_akhmKX_1690192088657"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "conditions": [
      {
        "nodeId": "FLOW_67wxTY_1690192088657",
        "nodeName": "分支条件",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "GW_PARALLEL_ullDzD_1690192088657"
        ],
        "outgoingList": [
          "AUDIT_dDD9NI_1690192090553"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "showWay": "condition",
        "child": {
          "nodeId": "AUDIT_dDD9NI_1690192090553",
          "nodeName": "审批节点",
          "type": "AUDIT",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_67wxTY_1690192088657"
          ],
          "outgoingList": [
            "FLOW_mt41u4_1690192090553"
          ],
          "props": {
            "type": null,
            "isMultiInstance": false,
            "userRuleList": [
              {
                "ruleProperties": {
                  "ruleId": null,
                  "ruleName": null,
                  "dynamicPersonnel": "PROCESS_INITIATOR",
                  "ruleValue": {
                    "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                    "name": "流程的发起人"
                  }
                },
                "selectorType": "DYNAMIC_STAFF",
                "echoName": {
                  "id": null,
                  "name": "流程的发起人",
                  "number": null,
                  "invalid": false,
                  "userType": null,
                  "userTypeEnum": null
                }
              }
            ],
            "carbonCopyAssigneeRule": null,
            "fieldList": [
              {
                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                "widgetName": "单行文本",
                "visible": true,
                "editable": false
              }
            ],
            "buttonList": [
              {
                "type": "AGREE",
                "buttonName": "同意",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "REJECT",
                "buttonName": "拒绝",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "BACK",
                "buttonName": "退回",
                "enable": true,
                "backType": null,
                "function": {
                  "type": "BACK",
                  "adviceRequired": null,
                  "signatureRequired": false,
                  "backType": "FREEDOM",
                  "backNodeIdList": [],
                  "showSignature": true
                }
              },
              {
                "type": "TRANSIENT",
                "buttonName": "暂存",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "PRINT",
                "buttonName": "打印",
                "enable": true,
                "backType": null,
                "function": null
              }
            ]
          },
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "FLOW_mt41u4_1690192090553",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "AUDIT_dDD9NI_1690192090553"
            ],
            "outgoingList": [
              "GW_PARALLEL_vAEreU_1690192088657"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null
          }
        }
      },
      {
        "nodeId": "FLOW_akhmKX_1690192088657",
        "nodeName": "分支条件",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "GW_PARALLEL_ullDzD_1690192088657"
        ],
        "outgoingList": [
          "AUDIT_XTaqFb_1690192091801"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "showWay": "condition",
        "child": {
          "nodeId": "AUDIT_XTaqFb_1690192091801",
          "nodeName": "审批节点",
          "type": "AUDIT",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_akhmKX_1690192088657"
          ],
          "outgoingList": [
            "FLOW_DW7cMu_1690192091802"
          ],
          "props": {
            "type": null,
            "isMultiInstance": false,
            "userRuleList": [
              {
                "ruleProperties": {
                  "ruleId": null,
                  "ruleName": null,
                  "dynamicPersonnel": "PROCESS_INITIATOR",
                  "ruleValue": {
                    "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                    "name": "流程的发起人"
                  }
                },
                "selectorType": "DYNAMIC_STAFF",
                "echoName": {
                  "id": null,
                  "name": "流程的发起人",
                  "number": null,
                  "invalid": false,
                  "userType": null,
                  "userTypeEnum": null
                }
              }
            ],
            "carbonCopyAssigneeRule": null,
            "fieldList": [
              {
                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                "widgetName": "单行文本",
                "visible": true,
                "editable": false
              }
            ],
            "buttonList": [
              {
                "type": "AGREE",
                "buttonName": "同意",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "REJECT",
                "buttonName": "拒绝",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "BACK",
                "buttonName": "退回",
                "enable": true,
                "backType": null,
                "function": {
                  "type": "BACK",
                  "adviceRequired": null,
                  "signatureRequired": false,
                  "backType": "FREEDOM",
                  "backNodeIdList": [],
                  "showSignature": true
                }
              },
              {
                "type": "TRANSIENT",
                "buttonName": "暂存",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "PRINT",
                "buttonName": "打印",
                "enable": true,
                "backType": null,
                "function": null
              }
            ]
          },
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "FLOW_DW7cMu_1690192091802",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "AUDIT_XTaqFb_1690192091801"
            ],
            "outgoingList": [
              "GW_PARALLEL_vAEreU_1690192088657"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null
          }
        }
      },
      {
        "nodeId": "FLOW_67wxTY_1690192088657",
        "nodeName": "分支条件",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "GW_PARALLEL_ullDzD_1690192088657"
        ],
        "outgoingList": [
          "AUDIT_dDD9NI_1690192090553"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "showWay": "condition",
        "child": {
          "nodeId": "AUDIT_dDD9NI_1690192090553",
          "nodeName": "审批节点",
          "type": "AUDIT",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_67wxTY_1690192088657"
          ],
          "outgoingList": [
            "FLOW_mt41u4_1690192090553"
          ],
          "props": {
            "type": null,
            "isMultiInstance": false,
            "userRuleList": [
              {
                "ruleProperties": {
                  "ruleId": null,
                  "ruleName": null,
                  "dynamicPersonnel": "PROCESS_INITIATOR",
                  "ruleValue": {
                    "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                    "name": "流程的发起人"
                  }
                },
                "selectorType": "DYNAMIC_STAFF",
                "echoName": {
                  "id": null,
                  "name": "流程的发起人",
                  "number": null,
                  "invalid": false,
                  "userType": null,
                  "userTypeEnum": null
                }
              }
            ],
            "carbonCopyAssigneeRule": null,
            "fieldList": [
              {
                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                "widgetName": "单行文本",
                "visible": true,
                "editable": false
              }
            ],
            "buttonList": [
              {
                "type": "AGREE",
                "buttonName": "同意",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "REJECT",
                "buttonName": "拒绝",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "BACK",
                "buttonName": "退回",
                "enable": true,
                "backType": null,
                "function": {
                  "type": "BACK",
                  "adviceRequired": null,
                  "signatureRequired": false,
                  "backType": "FREEDOM",
                  "backNodeIdList": [],
                  "showSignature": true
                }
              },
              {
                "type": "TRANSIENT",
                "buttonName": "暂存",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "PRINT",
                "buttonName": "打印",
                "enable": true,
                "backType": null,
                "function": null
              }
            ]
          },
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "FLOW_mt41u4_1690192090553",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "AUDIT_dDD9NI_1690192090553"
            ],
            "outgoingList": [
              "GW_PARALLEL_vAEreU_1690192088657"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null
          }
        }
      },
      {
        "nodeId": "FLOW_akhmKX_1690192088657",
        "nodeName": "分支条件",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "GW_PARALLEL_ullDzD_1690192088657"
        ],
        "outgoingList": [
          "AUDIT_XTaqFb_1690192091801"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null,
        "showWay": "condition",
        "child": {
          "nodeId": "AUDIT_XTaqFb_1690192091801",
          "nodeName": "审批节点",
          "type": "AUDIT",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_akhmKX_1690192088657"
          ],
          "outgoingList": [
            "FLOW_DW7cMu_1690192091802"
          ],
          "props": {
            "type": null,
            "isMultiInstance": false,
            "userRuleList": [
              {
                "ruleProperties": {
                  "ruleId": null,
                  "ruleName": null,
                  "dynamicPersonnel": "PROCESS_INITIATOR",
                  "ruleValue": {
                    "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                    "name": "流程的发起人"
                  }
                },
                "selectorType": "DYNAMIC_STAFF",
                "echoName": {
                  "id": null,
                  "name": "流程的发起人",
                  "number": null,
                  "invalid": false,
                  "userType": null,
                  "userTypeEnum": null
                }
              }
            ],
            "carbonCopyAssigneeRule": null,
            "fieldList": [
              {
                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                "widgetName": "单行文本",
                "visible": true,
                "editable": false
              }
            ],
            "buttonList": [
              {
                "type": "AGREE",
                "buttonName": "同意",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "REJECT",
                "buttonName": "拒绝",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "BACK",
                "buttonName": "退回",
                "enable": true,
                "backType": null,
                "function": {
                  "type": "BACK",
                  "adviceRequired": null,
                  "signatureRequired": false,
                  "backType": "FREEDOM",
                  "backNodeIdList": [],
                  "showSignature": true
                }
              },
              {
                "type": "TRANSIENT",
                "buttonName": "暂存",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "PRINT",
                "buttonName": "打印",
                "enable": true,
                "backType": null,
                "function": null
              }
            ]
          },
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "FLOW_DW7cMu_1690192091802",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "AUDIT_XTaqFb_1690192091801"
            ],
            "outgoingList": [
              "GW_PARALLEL_vAEreU_1690192088657"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null
          }
        }
      }
    ],
    "child": {
      "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
      "nodeName": "并行网关节点",
      "type": "GW_PARALLEL",
      "pairId": "GW_WD364a_1690192088657",
      "pairPosition": "B",
      "incomingList": [
        "FLOW_mt41u4_1690192090553",
        "FLOW_DW7cMu_1690192091802"
      ],
      "outgoingList": [
        "FLOW_MP7XRV_1690192088657"
      ],
      "props": null,
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "FLOW_MP7XRV_1690192088657",
        "nodeName": "连接线",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "GW_PARALLEL_vAEreU_1690192088657"
        ],
        "outgoingList": [
          "DISTRIBUTION_IHYHZG_1690192069065"
        ],
        "props": null,
        "state": "AUDITING",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
          "nodeName": "任务分发节点",
          "type": "DISTRIBUTION",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_MP7XRV_1690192088657"
          ],
          "outgoingList": [
            "FLOW_HXXVWv_1690192069065"
          ],
          "props": {
            "type": null,
            "nodeName": null,
            "userRuleList": [
              {
                "ruleProperties": {
                  "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                  "ruleName": "谢志强(谢志强-gq专用)",
                  "dynamicPersonnel": null,
                  "ruleValue": null
                },
                "selectorType": "DESIGNATED_PERSONNEL",
                "echoName": {
                  "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                  "name": "谢志强(谢志强-gq专用)",
                  "number": "9876538",
                  "invalid": false,
                  "userType": 1,
                  "userTypeEnum": "TEACHER"
                }
              }
            ],
            "carbonCopyAssigneeRule": null,
            "fieldList": [
              {
                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                "widgetName": "单行文本",
                "visible": true,
                "editable": false
              }
            ],
            "buttonList": [
              {
                "type": "AGREE",
                "buttonName": "同意",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "REJECT",
                "buttonName": "拒绝",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "BACK",
                "buttonName": "退回",
                "enable": true,
                "backType": null,
                "function": {
                  "type": "BACK",
                  "adviceRequired": null,
                  "signatureRequired": false,
                  "backType": "FREEDOM",
                  "backNodeIdList": [],
                  "showSignature": true
                }
              },
              {
                "type": "TRANSIENT",
                "buttonName": "暂存",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "PRINT",
                "buttonName": "打印",
                "enable": true,
                "backType": null,
                "function": null
              }
            ]
          },
          "state": "AUDITING",
          "operateState": null,
          "distributionList": [
            {
              "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
              "nodeName": "李黎明",
              "type": "condition",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "9b12f448-2b76-11ee-97cf-ca09a85df480"
              ],
              "outgoingList": [
                "33d94300-2b92-11ee-90f5-ca09a85df480"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "conditions": [],
              "showWay": "condition"
            },
            {
              "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
              "nodeName": "范家本",
              "type": "condition",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "4d883a3e-2b77-11ee-8fea-ca09a85df480"
              ],
              "outgoingList": null,
              "props": null,
              "state": "AUDITING",
              "operateState": null,
              "distributionList": null,
              "conditions": [],
              "showWay": "condition"
            },
            {
              "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
              "nodeName": "李全文",
              "type": "condition",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "9b12f448-2b76-11ee-97cf-ca09a85df480"
              ],
              "outgoingList": null,
              "props": null,
              "state": "AUDITING",
              "operateState": null,
              "distributionList": null,
              "conditions": [],
              "showWay": "condition"
            },
            {
              "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
              "nodeName": "谢志强(谢志强-gq专用)",
              "type": "condition",
              "pairId": null,
              "pairPosition": null,
              "incomingList": null,
              "outgoingList": [
                "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                "4dd289be-2b77-11ee-8fea-ca09a85df480"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "conditions": [
                {
                  "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                  "nodeName": "李黎明",
                  "type": "condition",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "9b12f448-2b76-11ee-97cf-ca09a85df480"
                  ],
                  "outgoingList": [
                    "33d94300-2b92-11ee-90f5-ca09a85df480"
                  ],
                  "props": null,
                  "state": "AUDITED",
                  "operateState": null,
                  "distributionList": null,
                  "conditions": [],
                  "showWay": "condition"
                },
                {
                  "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                  "nodeName": "李全文",
                  "type": "condition",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "9b12f448-2b76-11ee-97cf-ca09a85df480"
                  ],
                  "outgoingList": null,
                  "props": null,
                  "state": "AUDITING",
                  "operateState": null,
                  "distributionList": null,
                  "conditions": [],
                  "showWay": "condition"
                }
              ],
              "showWay": "condition"
            }
          ],
          "child": {
            "nodeId": "FLOW_HXXVWv_1690192069065",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "DISTRIBUTION_IHYHZG_1690192069065"
            ],
            "outgoingList": [
              "AUDIT_jqkrdc_1690192071164"
            ],
            "props": null,
            "state": "UNAUDIT",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "AUDIT_jqkrdc_1690192071164",
              "nodeName": "审批节点",
              "type": "AUDIT",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "FLOW_HXXVWv_1690192069065"
              ],
              "outgoingList": [
                "FLOW_ZfrqA3_1690192071164"
              ],
              "props": {
                "type": null,
                "isMultiInstance": false,
                "userRuleList": [
                  {
                    "ruleProperties": {
                      "ruleId": null,
                      "ruleName": null,
                      "dynamicPersonnel": "PROCESS_INITIATOR",
                      "ruleValue": {
                        "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                        "name": "流程的发起人"
                      }
                    },
                    "selectorType": "DYNAMIC_STAFF",
                    "echoName": {
                      "id": null,
                      "name": "流程的发起人",
                      "number": null,
                      "invalid": false,
                      "userType": null,
                      "userTypeEnum": null
                    }
                  }
                ],
                "carbonCopyAssigneeRule": null,
                "fieldList": [
                  {
                    "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                    "widgetName": "单行文本",
                    "visible": true,
                    "editable": false
                  }
                ],
                "buttonList": [
                  {
                    "type": "AGREE",
                    "buttonName": "同意",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "REJECT",
                    "buttonName": "拒绝",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "BACK",
                    "buttonName": "退回",
                    "enable": true,
                    "backType": null,
                    "function": {
                      "type": "BACK",
                      "adviceRequired": null,
                      "signatureRequired": false,
                      "backType": "FREEDOM",
                      "backNodeIdList": [],
                      "showSignature": true
                    }
                  },
                  {
                    "type": "TRANSIENT",
                    "buttonName": "暂存",
                    "enable": true,
                    "backType": null,
                    "function": null
                  },
                  {
                    "type": "PRINT",
                    "buttonName": "打印",
                    "enable": true,
                    "backType": null,
                    "function": null
                  }
                ]
              },
              "state": "UNAUDIT",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "FLOW_ZfrqA3_1690192071164",
                "nodeName": "连接线",
                "type": "FLOW",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "AUDIT_jqkrdc_1690192071164"
                ],
                "outgoingList": [
                  "End_Node"
                ],
                "props": null,
                "state": "UNAUDIT",
                "operateState": null,
                "distributionList": null,
                "child": {
                  "nodeId": "End_Node",
                  "nodeName": "结束",
                  "type": "END",
                  "pairId": null,
                  "pairPosition": null,
                  "incomingList": [
                    "FLOW_ZfrqA3_1690192071164"
                  ],
                  "outgoingList": [],
                  "props": null,
                  "state": "UNAUDIT",
                  "operateState": null,
                  "distributionList": null
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "FLOW_67wxTY_1690192088657",
    "nodeName": "分支条件",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "GW_PARALLEL_ullDzD_1690192088657"
    ],
    "outgoingList": [
      "AUDIT_dDD9NI_1690192090553"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "showWay": "condition",
    "child": {
      "nodeId": "AUDIT_dDD9NI_1690192090553",
      "nodeName": "审批节点",
      "type": "AUDIT",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "FLOW_67wxTY_1690192088657"
      ],
      "outgoingList": [
        "FLOW_mt41u4_1690192090553"
      ],
      "props": {
        "type": null,
        "isMultiInstance": false,
        "userRuleList": [
          {
            "ruleProperties": {
              "ruleId": null,
              "ruleName": null,
              "dynamicPersonnel": "PROCESS_INITIATOR",
              "ruleValue": {
                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                "name": "流程的发起人"
              }
            },
            "selectorType": "DYNAMIC_STAFF",
            "echoName": {
              "id": null,
              "name": "流程的发起人",
              "number": null,
              "invalid": false,
              "userType": null,
              "userTypeEnum": null
            }
          }
        ],
        "carbonCopyAssigneeRule": null,
        "fieldList": [
          {
            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
            "widgetName": "单行文本",
            "visible": true,
            "editable": false
          }
        ],
        "buttonList": [
          {
            "type": "AGREE",
            "buttonName": "同意",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "REJECT",
            "buttonName": "拒绝",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "BACK",
            "buttonName": "退回",
            "enable": true,
            "backType": null,
            "function": {
              "type": "BACK",
              "adviceRequired": null,
              "signatureRequired": false,
              "backType": "FREEDOM",
              "backNodeIdList": [],
              "showSignature": true
            }
          },
          {
            "type": "TRANSIENT",
            "buttonName": "暂存",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "PRINT",
            "buttonName": "打印",
            "enable": true,
            "backType": null,
            "function": null
          }
        ]
      },
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "FLOW_mt41u4_1690192090553",
        "nodeName": "连接线",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "AUDIT_dDD9NI_1690192090553"
        ],
        "outgoingList": [
          "GW_PARALLEL_vAEreU_1690192088657"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null
      }
    }
  },
  {
    "nodeId": "GW_PARALLEL_vAEreU_1690192088657",
    "nodeName": "并行网关节点",
    "type": "GW_PARALLEL",
    "pairId": "GW_WD364a_1690192088657",
    "pairPosition": "B",
    "incomingList": [
      "FLOW_mt41u4_1690192090553",
      "FLOW_DW7cMu_1690192091802"
    ],
    "outgoingList": [
      "FLOW_MP7XRV_1690192088657"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "FLOW_MP7XRV_1690192088657",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "GW_PARALLEL_vAEreU_1690192088657"
      ],
      "outgoingList": [
        "DISTRIBUTION_IHYHZG_1690192069065"
      ],
      "props": null,
      "state": "AUDITING",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
        "nodeName": "任务分发节点",
        "type": "DISTRIBUTION",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "FLOW_MP7XRV_1690192088657"
        ],
        "outgoingList": [
          "FLOW_HXXVWv_1690192069065"
        ],
        "props": {
          "type": null,
          "nodeName": null,
          "userRuleList": [
            {
              "ruleProperties": {
                "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                "ruleName": "谢志强(谢志强-gq专用)",
                "dynamicPersonnel": null,
                "ruleValue": null
              },
              "selectorType": "DESIGNATED_PERSONNEL",
              "echoName": {
                "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
                "name": "谢志强(谢志强-gq专用)",
                "number": "9876538",
                "invalid": false,
                "userType": 1,
                "userTypeEnum": "TEACHER"
              }
            }
          ],
          "carbonCopyAssigneeRule": null,
          "fieldList": [
            {
              "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
              "widgetName": "单行文本",
              "visible": true,
              "editable": false
            }
          ],
          "buttonList": [
            {
              "type": "AGREE",
              "buttonName": "同意",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "REJECT",
              "buttonName": "拒绝",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "BACK",
              "buttonName": "退回",
              "enable": true,
              "backType": null,
              "function": {
                "type": "BACK",
                "adviceRequired": null,
                "signatureRequired": false,
                "backType": "FREEDOM",
                "backNodeIdList": [],
                "showSignature": true
              }
            },
            {
              "type": "TRANSIENT",
              "buttonName": "暂存",
              "enable": true,
              "backType": null,
              "function": null
            },
            {
              "type": "PRINT",
              "buttonName": "打印",
              "enable": true,
              "backType": null,
              "function": null
            }
          ]
        },
        "state": "AUDITING",
        "operateState": null,
        "distributionList": [
          {
            "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
            "nodeName": "李黎明",
            "type": "condition",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "9b12f448-2b76-11ee-97cf-ca09a85df480"
            ],
            "outgoingList": [
              "33d94300-2b92-11ee-90f5-ca09a85df480"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "conditions": [],
            "showWay": "condition"
          },
          {
            "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
            "nodeName": "范家本",
            "type": "condition",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "4d883a3e-2b77-11ee-8fea-ca09a85df480"
            ],
            "outgoingList": null,
            "props": null,
            "state": "AUDITING",
            "operateState": null,
            "distributionList": null,
            "conditions": [],
            "showWay": "condition"
          },
          {
            "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
            "nodeName": "李全文",
            "type": "condition",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "9b12f448-2b76-11ee-97cf-ca09a85df480"
            ],
            "outgoingList": null,
            "props": null,
            "state": "AUDITING",
            "operateState": null,
            "distributionList": null,
            "conditions": [],
            "showWay": "condition"
          },
          {
            "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
            "nodeName": "谢志强(谢志强-gq专用)",
            "type": "condition",
            "pairId": null,
            "pairPosition": null,
            "incomingList": null,
            "outgoingList": [
              "4d883a3e-2b77-11ee-8fea-ca09a85df480",
              "4dd289be-2b77-11ee-8fea-ca09a85df480"
            ],
            "props": null,
            "state": "AUDITED",
            "operateState": null,
            "distributionList": null,
            "conditions": [
              {
                "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
                "nodeName": "李黎明",
                "type": "condition",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "9b12f448-2b76-11ee-97cf-ca09a85df480"
                ],
                "outgoingList": [
                  "33d94300-2b92-11ee-90f5-ca09a85df480"
                ],
                "props": null,
                "state": "AUDITED",
                "operateState": null,
                "distributionList": null,
                "conditions": [],
                "showWay": "condition"
              },
              {
                "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
                "nodeName": "李全文",
                "type": "condition",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "9b12f448-2b76-11ee-97cf-ca09a85df480"
                ],
                "outgoingList": null,
                "props": null,
                "state": "AUDITING",
                "operateState": null,
                "distributionList": null,
                "conditions": [],
                "showWay": "condition"
              }
            ],
            "showWay": "condition"
          }
        ],
        "child": {
          "nodeId": "FLOW_HXXVWv_1690192069065",
          "nodeName": "连接线",
          "type": "FLOW",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "DISTRIBUTION_IHYHZG_1690192069065"
          ],
          "outgoingList": [
            "AUDIT_jqkrdc_1690192071164"
          ],
          "props": null,
          "state": "UNAUDIT",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "AUDIT_jqkrdc_1690192071164",
            "nodeName": "审批节点",
            "type": "AUDIT",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "FLOW_HXXVWv_1690192069065"
            ],
            "outgoingList": [
              "FLOW_ZfrqA3_1690192071164"
            ],
            "props": {
              "type": null,
              "isMultiInstance": false,
              "userRuleList": [
                {
                  "ruleProperties": {
                    "ruleId": null,
                    "ruleName": null,
                    "dynamicPersonnel": "PROCESS_INITIATOR",
                    "ruleValue": {
                      "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                      "name": "流程的发起人"
                    }
                  },
                  "selectorType": "DYNAMIC_STAFF",
                  "echoName": {
                    "id": null,
                    "name": "流程的发起人",
                    "number": null,
                    "invalid": false,
                    "userType": null,
                    "userTypeEnum": null
                  }
                }
              ],
              "carbonCopyAssigneeRule": null,
              "fieldList": [
                {
                  "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                  "widgetName": "单行文本",
                  "visible": true,
                  "editable": false
                }
              ],
              "buttonList": [
                {
                  "type": "AGREE",
                  "buttonName": "同意",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "REJECT",
                  "buttonName": "拒绝",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "BACK",
                  "buttonName": "退回",
                  "enable": true,
                  "backType": null,
                  "function": {
                    "type": "BACK",
                    "adviceRequired": null,
                    "signatureRequired": false,
                    "backType": "FREEDOM",
                    "backNodeIdList": [],
                    "showSignature": true
                  }
                },
                {
                  "type": "TRANSIENT",
                  "buttonName": "暂存",
                  "enable": true,
                  "backType": null,
                  "function": null
                },
                {
                  "type": "PRINT",
                  "buttonName": "打印",
                  "enable": true,
                  "backType": null,
                  "function": null
                }
              ]
            },
            "state": "UNAUDIT",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "FLOW_ZfrqA3_1690192071164",
              "nodeName": "连接线",
              "type": "FLOW",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "AUDIT_jqkrdc_1690192071164"
              ],
              "outgoingList": [
                "End_Node"
              ],
              "props": null,
              "state": "UNAUDIT",
              "operateState": null,
              "distributionList": null,
              "child": {
                "nodeId": "End_Node",
                "nodeName": "结束",
                "type": "END",
                "pairId": null,
                "pairPosition": null,
                "incomingList": [
                  "FLOW_ZfrqA3_1690192071164"
                ],
                "outgoingList": [],
                "props": null,
                "state": "UNAUDIT",
                "operateState": null,
                "distributionList": null
              }
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "FLOW_MP7XRV_1690192088657",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "GW_PARALLEL_vAEreU_1690192088657"
    ],
    "outgoingList": [
      "DISTRIBUTION_IHYHZG_1690192069065"
    ],
    "props": null,
    "state": "AUDITING",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "DISTRIBUTION_IHYHZG_1690192069065",
      "nodeName": "任务分发节点",
      "type": "DISTRIBUTION",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "FLOW_MP7XRV_1690192088657"
      ],
      "outgoingList": [
        "FLOW_HXXVWv_1690192069065"
      ],
      "props": {
        "type": null,
        "nodeName": null,
        "userRuleList": [
          {
            "ruleProperties": {
              "ruleId": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
              "ruleName": "谢志强(谢志强-gq专用)",
              "dynamicPersonnel": null,
              "ruleValue": null
            },
            "selectorType": "DESIGNATED_PERSONNEL",
            "echoName": {
              "id": "2cc6d53a-943a-4e4e-88e5-e21d89499fa1",
              "name": "谢志强(谢志强-gq专用)",
              "number": "9876538",
              "invalid": false,
              "userType": 1,
              "userTypeEnum": "TEACHER"
            }
          }
        ],
        "carbonCopyAssigneeRule": null,
        "fieldList": [
          {
            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
            "widgetName": "单行文本",
            "visible": true,
            "editable": false
          }
        ],
        "buttonList": [
          {
            "type": "AGREE",
            "buttonName": "同意",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "REJECT",
            "buttonName": "拒绝",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "BACK",
            "buttonName": "退回",
            "enable": true,
            "backType": null,
            "function": {
              "type": "BACK",
              "adviceRequired": null,
              "signatureRequired": false,
              "backType": "FREEDOM",
              "backNodeIdList": [],
              "showSignature": true
            }
          },
          {
            "type": "TRANSIENT",
            "buttonName": "暂存",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "PRINT",
            "buttonName": "打印",
            "enable": true,
            "backType": null,
            "function": null
          }
        ]
      },
      "state": "AUDITING",
      "operateState": null,
      "distributionList": [
        {
          "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
          "nodeName": "李黎明",
          "type": "condition",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "9b12f448-2b76-11ee-97cf-ca09a85df480"
          ],
          "outgoingList": [
            "33d94300-2b92-11ee-90f5-ca09a85df480"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "conditions": [],
          "showWay": "condition"
        },
        {
          "nodeId": "33d94300-2b92-11ee-90f5-ca09a85df480",
          "nodeName": "范家本",
          "type": "condition",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "4d883a3e-2b77-11ee-8fea-ca09a85df480"
          ],
          "outgoingList": null,
          "props": null,
          "state": "AUDITING",
          "operateState": null,
          "distributionList": null,
          "conditions": [],
          "showWay": "condition"
        },
        {
          "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
          "nodeName": "李全文",
          "type": "condition",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "9b12f448-2b76-11ee-97cf-ca09a85df480"
          ],
          "outgoingList": null,
          "props": null,
          "state": "AUDITING",
          "operateState": null,
          "distributionList": null,
          "conditions": [],
          "showWay": "condition"
        },
        {
          "nodeId": "9b12f448-2b76-11ee-97cf-ca09a85df480",
          "nodeName": "谢志强(谢志强-gq专用)",
          "type": "condition",
          "pairId": null,
          "pairPosition": null,
          "incomingList": null,
          "outgoingList": [
            "4d883a3e-2b77-11ee-8fea-ca09a85df480",
            "4dd289be-2b77-11ee-8fea-ca09a85df480"
          ],
          "props": null,
          "state": "AUDITED",
          "operateState": null,
          "distributionList": null,
          "conditions": [
            {
              "nodeId": "4d883a3e-2b77-11ee-8fea-ca09a85df480",
              "nodeName": "李黎明",
              "type": "condition",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "9b12f448-2b76-11ee-97cf-ca09a85df480"
              ],
              "outgoingList": [
                "33d94300-2b92-11ee-90f5-ca09a85df480"
              ],
              "props": null,
              "state": "AUDITED",
              "operateState": null,
              "distributionList": null,
              "conditions": [],
              "showWay": "condition"
            },
            {
              "nodeId": "4dd289be-2b77-11ee-8fea-ca09a85df480",
              "nodeName": "李全文",
              "type": "condition",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "9b12f448-2b76-11ee-97cf-ca09a85df480"
              ],
              "outgoingList": null,
              "props": null,
              "state": "AUDITING",
              "operateState": null,
              "distributionList": null,
              "conditions": [],
              "showWay": "condition"
            }
          ],
          "showWay": "condition"
        }
      ],
      "child": {
        "nodeId": "FLOW_HXXVWv_1690192069065",
        "nodeName": "连接线",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "DISTRIBUTION_IHYHZG_1690192069065"
        ],
        "outgoingList": [
          "AUDIT_jqkrdc_1690192071164"
        ],
        "props": null,
        "state": "UNAUDIT",
        "operateState": null,
        "distributionList": null,
        "child": {
          "nodeId": "AUDIT_jqkrdc_1690192071164",
          "nodeName": "审批节点",
          "type": "AUDIT",
          "pairId": null,
          "pairPosition": null,
          "incomingList": [
            "FLOW_HXXVWv_1690192069065"
          ],
          "outgoingList": [
            "FLOW_ZfrqA3_1690192071164"
          ],
          "props": {
            "type": null,
            "isMultiInstance": false,
            "userRuleList": [
              {
                "ruleProperties": {
                  "ruleId": null,
                  "ruleName": null,
                  "dynamicPersonnel": "PROCESS_INITIATOR",
                  "ruleValue": {
                    "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                    "name": "流程的发起人"
                  }
                },
                "selectorType": "DYNAMIC_STAFF",
                "echoName": {
                  "id": null,
                  "name": "流程的发起人",
                  "number": null,
                  "invalid": false,
                  "userType": null,
                  "userTypeEnum": null
                }
              }
            ],
            "carbonCopyAssigneeRule": null,
            "fieldList": [
              {
                "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
                "widgetName": "单行文本",
                "visible": true,
                "editable": false
              }
            ],
            "buttonList": [
              {
                "type": "AGREE",
                "buttonName": "同意",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "REJECT",
                "buttonName": "拒绝",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "BACK",
                "buttonName": "退回",
                "enable": true,
                "backType": null,
                "function": {
                  "type": "BACK",
                  "adviceRequired": null,
                  "signatureRequired": false,
                  "backType": "FREEDOM",
                  "backNodeIdList": [],
                  "showSignature": true
                }
              },
              {
                "type": "TRANSIENT",
                "buttonName": "暂存",
                "enable": true,
                "backType": null,
                "function": null
              },
              {
                "type": "PRINT",
                "buttonName": "打印",
                "enable": true,
                "backType": null,
                "function": null
              }
            ]
          },
          "state": "UNAUDIT",
          "operateState": null,
          "distributionList": null,
          "child": {
            "nodeId": "FLOW_ZfrqA3_1690192071164",
            "nodeName": "连接线",
            "type": "FLOW",
            "pairId": null,
            "pairPosition": null,
            "incomingList": [
              "AUDIT_jqkrdc_1690192071164"
            ],
            "outgoingList": [
              "End_Node"
            ],
            "props": null,
            "state": "UNAUDIT",
            "operateState": null,
            "distributionList": null,
            "child": {
              "nodeId": "End_Node",
              "nodeName": "结束",
              "type": "END",
              "pairId": null,
              "pairPosition": null,
              "incomingList": [
                "FLOW_ZfrqA3_1690192071164"
              ],
              "outgoingList": [],
              "props": null,
              "state": "UNAUDIT",
              "operateState": null,
              "distributionList": null
            }
          }
        }
      }
    }
  },
  {
    "nodeId": "FLOW_akhmKX_1690192088657",
    "nodeName": "分支条件",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "GW_PARALLEL_ullDzD_1690192088657"
    ],
    "outgoingList": [
      "AUDIT_XTaqFb_1690192091801"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "showWay": "condition",
    "child": {
      "nodeId": "AUDIT_XTaqFb_1690192091801",
      "nodeName": "审批节点",
      "type": "AUDIT",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "FLOW_akhmKX_1690192088657"
      ],
      "outgoingList": [
        "FLOW_DW7cMu_1690192091802"
      ],
      "props": {
        "type": null,
        "isMultiInstance": false,
        "userRuleList": [
          {
            "ruleProperties": {
              "ruleId": null,
              "ruleName": null,
              "dynamicPersonnel": "PROCESS_INITIATOR",
              "ruleValue": {
                "id": "0a060aa4-803a-1962-8180-4095a8d23658",
                "name": "流程的发起人"
              }
            },
            "selectorType": "DYNAMIC_STAFF",
            "echoName": {
              "id": null,
              "name": "流程的发起人",
              "number": null,
              "invalid": false,
              "userType": null,
              "userTypeEnum": null
            }
          }
        ],
        "carbonCopyAssigneeRule": null,
        "fieldList": [
          {
            "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
            "widgetName": "单行文本",
            "visible": true,
            "editable": false
          }
        ],
        "buttonList": [
          {
            "type": "AGREE",
            "buttonName": "同意",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "REJECT",
            "buttonName": "拒绝",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "BACK",
            "buttonName": "退回",
            "enable": true,
            "backType": null,
            "function": {
              "type": "BACK",
              "adviceRequired": null,
              "signatureRequired": false,
              "backType": "FREEDOM",
              "backNodeIdList": [],
              "showSignature": true
            }
          },
          {
            "type": "TRANSIENT",
            "buttonName": "暂存",
            "enable": true,
            "backType": null,
            "function": null
          },
          {
            "type": "PRINT",
            "buttonName": "打印",
            "enable": true,
            "backType": null,
            "function": null
          }
        ]
      },
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null,
      "child": {
        "nodeId": "FLOW_DW7cMu_1690192091802",
        "nodeName": "连接线",
        "type": "FLOW",
        "pairId": null,
        "pairPosition": null,
        "incomingList": [
          "AUDIT_XTaqFb_1690192091801"
        ],
        "outgoingList": [
          "GW_PARALLEL_vAEreU_1690192088657"
        ],
        "props": null,
        "state": "AUDITED",
        "operateState": null,
        "distributionList": null
      }
    }
  },
  {
    "nodeId": "AUDIT_dDD9NI_1690192090553",
    "nodeName": "审批节点",
    "type": "AUDIT",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "FLOW_67wxTY_1690192088657"
    ],
    "outgoingList": [
      "FLOW_mt41u4_1690192090553"
    ],
    "props": {
      "type": null,
      "isMultiInstance": false,
      "userRuleList": [
        {
          "ruleProperties": {
            "ruleId": null,
            "ruleName": null,
            "dynamicPersonnel": "PROCESS_INITIATOR",
            "ruleValue": {
              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
              "name": "流程的发起人"
            }
          },
          "selectorType": "DYNAMIC_STAFF",
          "echoName": {
            "id": null,
            "name": "流程的发起人",
            "number": null,
            "invalid": false,
            "userType": null,
            "userTypeEnum": null
          }
        }
      ],
      "carbonCopyAssigneeRule": null,
      "fieldList": [
        {
          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
          "widgetName": "单行文本",
          "visible": true,
          "editable": false
        }
      ],
      "buttonList": [
        {
          "type": "AGREE",
          "buttonName": "同意",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "REJECT",
          "buttonName": "拒绝",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "BACK",
          "buttonName": "退回",
          "enable": true,
          "backType": null,
          "function": {
            "type": "BACK",
            "adviceRequired": null,
            "signatureRequired": false,
            "backType": "FREEDOM",
            "backNodeIdList": [],
            "showSignature": true
          }
        },
        {
          "type": "TRANSIENT",
          "buttonName": "暂存",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "PRINT",
          "buttonName": "打印",
          "enable": true,
          "backType": null,
          "function": null
        }
      ]
    },
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "FLOW_mt41u4_1690192090553",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "AUDIT_dDD9NI_1690192090553"
      ],
      "outgoingList": [
        "GW_PARALLEL_vAEreU_1690192088657"
      ],
      "props": null,
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null
    }
  },
  {
    "nodeId": "FLOW_mt41u4_1690192090553",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "AUDIT_dDD9NI_1690192090553"
    ],
    "outgoingList": [
      "GW_PARALLEL_vAEreU_1690192088657"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null
  },
  {
    "nodeId": "AUDIT_XTaqFb_1690192091801",
    "nodeName": "审批节点",
    "type": "AUDIT",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "FLOW_akhmKX_1690192088657"
    ],
    "outgoingList": [
      "FLOW_DW7cMu_1690192091802"
    ],
    "props": {
      "type": null,
      "isMultiInstance": false,
      "userRuleList": [
        {
          "ruleProperties": {
            "ruleId": null,
            "ruleName": null,
            "dynamicPersonnel": "PROCESS_INITIATOR",
            "ruleValue": {
              "id": "0a060aa4-803a-1962-8180-4095a8d23658",
              "name": "流程的发起人"
            }
          },
          "selectorType": "DYNAMIC_STAFF",
          "echoName": {
            "id": null,
            "name": "流程的发起人",
            "number": null,
            "invalid": false,
            "userType": null,
            "userTypeEnum": null
          }
        }
      ],
      "carbonCopyAssigneeRule": null,
      "fieldList": [
        {
          "widgetId": "widget_cbc7d5630b414683b876e756072ca0e6",
          "widgetName": "单行文本",
          "visible": true,
          "editable": false
        }
      ],
      "buttonList": [
        {
          "type": "AGREE",
          "buttonName": "同意",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "REJECT",
          "buttonName": "拒绝",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "BACK",
          "buttonName": "退回",
          "enable": true,
          "backType": null,
          "function": {
            "type": "BACK",
            "adviceRequired": null,
            "signatureRequired": false,
            "backType": "FREEDOM",
            "backNodeIdList": [],
            "showSignature": true
          }
        },
        {
          "type": "TRANSIENT",
          "buttonName": "暂存",
          "enable": true,
          "backType": null,
          "function": null
        },
        {
          "type": "PRINT",
          "buttonName": "打印",
          "enable": true,
          "backType": null,
          "function": null
        }
      ]
    },
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null,
    "child": {
      "nodeId": "FLOW_DW7cMu_1690192091802",
      "nodeName": "连接线",
      "type": "FLOW",
      "pairId": null,
      "pairPosition": null,
      "incomingList": [
        "AUDIT_XTaqFb_1690192091801"
      ],
      "outgoingList": [
        "GW_PARALLEL_vAEreU_1690192088657"
      ],
      "props": null,
      "state": "AUDITED",
      "operateState": null,
      "distributionList": null
    }
  },
  {
    "nodeId": "FLOW_DW7cMu_1690192091802",
    "nodeName": "连接线",
    "type": "FLOW",
    "pairId": null,
    "pairPosition": null,
    "incomingList": [
      "AUDIT_XTaqFb_1690192091801"
    ],
    "outgoingList": [
      "GW_PARALLEL_vAEreU_1690192088657"
    ],
    "props": null,
    "state": "AUDITED",
    "operateState": null,
    "distributionList": null
  }
];
