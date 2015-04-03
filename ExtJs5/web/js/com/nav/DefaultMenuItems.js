var DefaultMenuItems = [
	{
		"opName": "我的工作室",
		"roleName": "MyStudio",
		"qtip": "我的工作室",
		"children": [
			{
				"opName": "我的首页",
				"roleName": "Customize",
				"leaf": true
			},
			{
				"opName": "我的信息",
				"roleName": "PersonalInfo",
				"leaf": true,
				"authorityItems": [
					{
						"opName": "修改信息",
						"roleName": "UserProfile",
						"qtip": "deprecated"
					},
					{
						"opName": "部门信息",
						"roleName": "DeptSimple",
						"qtip": "deprecated"
					},
					{
						"opName": "待办任务",
						"roleName": "TodoList",
						"qtip": "deprecated"
					},
					{
						"opName": "消息管理",
						"roleName": "Message",
						"qtip": "未读消息提醒查看权限"
					}
				]
			},
			{
				"opName": "我的收藏",
				"roleName": "Favorite",
				"leaf": true
			},
			{
				"opName": "我的资料",
				"roleName": "MyMaterial",
				"leaf": true
			},
			{
				"opName": "员工状态",
				"roleName": "AttendanceRecord",
				"leaf": true
			},
			{
				"opName": "员工计划",
				"roleName": "Schedule",
				"leaf": true
			},
			{
				"opName": "指定审批人",
				"roleName": "SpecifyApprover",
				"leaf": true
			},
			{
				"opName": "我的共享",
				"roleName": "MyShare",
				"leaf": true,
				"authorityItems": [
					{
						"opName": "查看所有",
						"roleName": "AllShare",
						"qtip": "有该权限则没有删除共享功能"
					},
					{
						"opName": "共享信息",
						"roleName": "ShareInfor",
						"qtip": "共享权限"
					}
				]
			},
			{
				"opName": "待办已办",
				"roleName": "AffairsMgr",
				"leaf": true
			}
		]
	},
	{
		opName: "客户服务",
		roleName: 'CustomerService',
		authorityItems: [{
			"opName": "客户管理员",
			"roleName": "CustomerManager",
			"qtip": "客户管理员"
		}],
		children: [
			{
				"iid": 531,
				"opName": "客户管理",
				"roleName": "InstitutionMgr",
				"leaf": true
			},
			{
				"iid": 531,
				"opName": "客户联系人",
				"roleName": "CustomerMgr2",
				"leaf": true
			},
			{
				opName: '客户经理调整记录',
				roleName: 'CustomerMgrAdjustLog',
				leaf: true
			},
			{
				opName: '合同管理',
				roleName: 'ContractMgr',
				leaf: true
			},
			{
				opName: '客户派点',
				roleName: 'CusCampPointMgr',
				leaf: true,
				authorityItems: [
					{
						opName: '添加派点',
						roleName: "CusPoint_Add",
						qtip: "控制添加派点是否显示"
					},
					{
						opName: '查看本部门派点',
						roleName: "CusPoint_Dept_Self",
						qtip: "查看本部门派点"
					},
					{
						opName: '查看所有部门派点',
						roleName: "CusPoint_Dept_All",
						qtip: "查看所有部门派点"
					}
				]
			},
			{
				opName: '服务统计',
				roleName: 'CustomerServiceMgr',
				leaf: true,
				authorityItems: [
					{
						opName: '查看本部门',
						roleName: 'CustomServer_Dept_Self',
						qtip: "查看本部门的服务统计"
					},
					{
						opName: '查看所有部门',
						roleName: 'CustomServer_Dept_All',
						qtip: "查看所有部门的服务统计"
					}
				]
			},
			{
				opName: '关注客户',
				roleName: 'CustomerFocus',
				leaf: true
			}, {
				opName: '收支统计',
				roleName: 'CustomerBalanceStatistics',
				leaf: true,
				authorityItems: [
					{
						opName: "录入佣金",
						roleName: "SAVE_INCOME",
						qtip: "拥有该权限则可以添加佣金记录"
					}, {
						opName: "编辑佣金",
						roleName: "EDIt_INCOME",
						qtip: "拥有该权限则可以编辑、删除佣金记录"
			}
		]
			}, {
				opName: '邮件投递',
				roleName: 'mailSenders',
				children: [
					{
						opName: '邮件阅读率',
						roleName: "MailReads",
						leaf: true
	},
	{
						opName: '客户邮件阅读率',
						roleName: "CustomerMailReads",
						leaf: true
					},
					{
						opName: '邮件退订统计',
						roleName: "NotWantReceive",
						leaf: true
					}
				]
			}
		]
	},
	{
		"opName": "办公助理",
		"roleName": "OfficeAssistant",
		"children": [
			{
				"opName": "文档管理",
				"roleName": "DocumentManagement",
				"children": [
					{
						"opName": "常用工具",
						"roleName": "Tools",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "上传工具",
								"roleName": "ToolsUpLoad",
								"qtip": "控制上传按钮是否显示"
							},
							{
								"opName": "删除",
								"roleName": "ToolsDelete",
								"qtip": "工具删除权限"
							},
							{
								"opName": "添加文件夹",
								"roleName": "ToolsAdd",
								"qtip": "添加和删除文件夹权限"
							}
						]
					},
					{
						"opName": "文档资料",
						"roleName": "Documents",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "上传文件",
								"roleName": "DocumentsUpLoad",
								"qtip": "控制上传文档资料和视频文件按钮是否显示"
							},
							{
								"opName": "删除",
								"roleName": "DocumentsDelete",
								"qtip": "控制上传文档资料和视频文件可删除权限"
							},
							{
								"opName": "添加文件夹",
								"roleName": "DocumentsAdd",
								"qtip": "控制上传文档资料和视频文件添加文件夹权限"
							}
						]
					},
					{
						"opName": "excel资料",
						"roleName": "ExcelDocuments",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "Excel资料上传",
								"roleName": "UploadExcelDocuments",
								"qtip": "excel资料上传权限"
							},
							{
								"opName": "Excel资料下载",
								"roleName": "DownloadExcelDocuments",
								"qtip": "excel资料下载权限"
							},
							{
								"opName": "Excel资料删除",
								"roleName": "DeleteExcelDocuments",
								"qtip": "excel资料删除权限"
							}
						]
					},
					{
						"opName": "视频共享",
						"roleName": "Videos",
						"leaf": true
					}
				]
			},
			{
				"opName": "事务管理",
				"children": [
					{
						"opName": "事务录入",
						"roleName": "DocumentREC",
						"leaf": true
					},
					{
						"opName": "待完成文档",
						"roleName": "Drafts",
						"leaf": true
					},
					{
						"opName": "待办事务",
						"roleName": "AffairsMgr",
						"leaf": true
					},
					{
						"opName": "已提交事务",
						"roleName": "SubmittedDocs",
						"leaf": true
					},
					{
						"opName": "已通过事务",
						"roleName": "FinishedDocs",
						"leaf": true
					},
					{
						"opName": '已审核事务',
						"roleName": 'ExaminantDocs',
						"leaf": true
					},
					{
						"opName": "已存档事务",
						"roleName": "DeletedDocs",
						"leaf": true
					},
					{
						"opName": "事务查看",
						"roleName": "PanelView",
						"leaf": true
					},
					{
						"opName": "合规审批统计",
						"roleName": "ComplianceStatistics",
						"leaf": true
					}
				]
			},
			{
				"opName": "考勤管理",
				"roleName": "DutyGeneral",
				"leaf": true,
				"authorityItems": [
					{
						"opName": "考勤查询",
						"roleName": "AttendQuery",
						"qtip": "考勤查询权限"
					},
					{
						"opName": "考勤统计",
						"roleName": "AttendanceSearch",
						"qtip": "考勤统计和月统计查看权限"
					},
					{
						"opName": "代理签退",
						"roleName": "AgentSignout",
						"qtip": "代理签退权限"
					},
					{
						"opName": "晨会代签",
						"roleName": "AgentSign",
						"qtip": "出席晨会权限"
					},
					{
						"opName": "请假出差申请",
						"roleName": "AskLeave",
						"qtip": "请假和出差申请权限"
					},
					{
						"opName": "查看本部门",
						"roleName": "Attend_Statistics_Dept_Self",
						"qtip": "查看本部门权限"
					},
					{
						"opName": "考勤管理员",
						"roleName": "Leader",
						"qtip": "考勤统计修改备注、修改出席晨会时间、考勤状态查看本部门还是查看所有权限配置"
					},
					{
						"opName": "查看所有人员",
						"roleName": "Attend_Statistics_Dept_All",
						"qtip": "查看所有权限"
					}
				]
			},
			{
				"opName": "工作管理",
				"roleName": "TaskManager",
				"children": [
					{
						"opName": "工作任务",
						"roleName": "ScheduleTask",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "查看所有人员",
								"roleName": "Worktype_Dept_All",
								"qtip": "查看所有人员工作任务的权限"
							},
							{
								"opName": "查看本部门",
								"roleName": "Worktype_Dept_Self",
								"qtip": "查看本部门人员工作任务的权限"
							}
						]
					},
					{
						"opName": "工作任务查询",
						"roleName": "EventCalendarSearch",
						"leaf": true
					},
					{
						"opName": "工作状态查询",
						"roleName": "WorkStatusQuery",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "查看所有人员",
								"roleName": "Worktype_Dept_All",
								"description": "查看所有人员工作任务的权限"
							},
							{
								"opName": "查看本部门",
								"roleName": "Worktype_Dept_Self",
								"description": "查看本部门人员工作任务的权限"
							}
						]
					},
					{
						"opName": "日程安排查询",
						"roleName": "JobScheduleSearch",
						"leaf": true
					}
				]
			},
			{
				"opName": "通讯管理",
				"roleName": "Communication",
				"children": [
					{
						"opName": "信息交流",
						"roleName": "InformationExchange",
						"leaf": true
					},
					{
						"opName": "消息管理",
						"roleName": "Message",
						"leaf": true
					},
					{
						"opName": "邮件发送",
						"roleName": "Mail",
						"leaf": true
					},
					{
						"opName": "短信发送",
						"roleName": "SMessage",
						"leaf": true
					},
					{
						"opName": "通讯录",
						"roleName": "Wab",
						"leaf": true
					},
					{
						"opName": "待发送邮件",
						"roleName": "DocMailSend",
						"leaf": true
					}
				]
			}
		]
	},
	{
		"opName": "投资研究",
		"roleName": "InvestmentAnalysis",
		"children": [
			{
				"opName": "估值模型",
				"roleName": "AnalysisGeneral",
				"authorityItems": [{
						"opName": "跨域共享",
						"roleName": "shareDomain",
						"qtip": "跨域共享操作权限"
					},
					{
						"opName": "查看跨域共享",
						"roleName": "LookShareDomain",
						"qtip": "跨域共享查看权限"
					}
				],
				"children": [
					{
						"opName": "我的模型",
						"roleName": "AnalyseGeneral",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "类型设置",
								"roleName": "ModelTypeConfig",
								"qtip": "类型设置权限"
							},
							{
								"opName": "关联报告模板类型",
								"roleName": "AnalyseToTemplate",
								"qtip": "关联报告模板类型权限"
							}
						]
					},
					{
						"opName": "我的模板",
						"roleName": "ModelGeneral",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "设为基金底版",
								"roleName": "ModelToFundDomain",
								"qtip": "设置为他域模板权限"
							},
							{
								"opName": "新建模板",
								"roleName": "AnaTplNew",
								"qtip": "新建模板权限"
							},
							{
								"opName": "新建行业模板",
								"roleName": "AnaTplTradeNew",
								"qtip": "新建行业模板权限"
							},
							{
								"opName": "模板设置",
								"roleName": "ModelTplCfg",
								"qtip": "模板设置权限"
							}
						]
					},
					{
						"opName": "图表管理",
						"roleName": "GraphModel",
						"leaf": true
					},
					{
						"opName": "模型分配",
						"roleName": "TaskDispatch",
						"leaf": true
					},
					{
						"opName": "模型分类",
						"roleName": "Workspace",
						"leaf": true
					},
					{
						"opName": "共享模型",
						"roleName": "AnalyseShare",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "本部门共享分析",
								"roleName": "ModifiableToDeptWorks",
								"qtip": "deprecated"
							}
						]
					}
				]
			},
			{
				"opName": "研究报告",
				"roleName": "Report",
				"children": [
					{
						opName: "报告编写",
						roleName: "WriteReport",
						leaf: true
					}/*,
					{
						"opName": "报告模板",
						"roleName": "ReportTemplate",
						"leaf": true
					},
					{
						"opName": "报告编写",
						"roleName": "ReportDocument",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "删除",
								"roleName": "delDoc",
								"description": "deprecated"
							},
							{
								"opName": "自动生成早报",
								"roleName": "MnewList",
								"description": "自动生成早报权限"
							}
						]
					},
					{
						opName: '晨报编写',
						roleName: 'MorningWrite',
						leaf: true
					}*/
				]
			},
			{
				opName: '优典资讯',
				roleName: 'ExcellentClassicInformation',
				children: [
					{
						opName: '产品类型管理',
						roleName: 'ProducTypetMgr',
						leaf: true
					},
					{
						opName: '要点类型维护',
						roleName: 'PointTypeMgr',
						leaf: true
					},
					{
						opName: '产品列表',
						roleName: 'MyProductMgr',
						leaf: true
					},
					{
						opName: '已审批产品',
						roleName: 'ApprovedProduct',
						leaf: true
					},
					{
						opName: '产品管理',
						roleName: 'PointMgr',
						leaf: true
					}
				]
			},
			{
				"opName": "股票投资",
				"roleName": "StockInvestment",
				"authorityItems":[
					{
						"opName": "搜索本部门",
						"roleName": "Stock_Dept_Self",
						"qtip": "基础股票池、投资评级池，重点关注池搜索本部门权限"
					},
					{
						"opName": "搜索全部",
						"roleName": "Stock_Dept_All",
						"qtip": "基础股票池、投资评级池，重点关注池搜索全部权限"
					}				
				],
				"children": [
					{
						"opName": "股票池管理",
						"roleName": "StockPoolManagement",
						"children": [
							{
								"opName": "基础股票池",
								"roleName": "StockPool",
								"leaf": true,
								"authorityItems": [
									{
										"opName": "股票池管理员",
										"roleName": "StockAdmin",
										"qtip": "基础股票池搜索全部权限..."
									},
									{
										"opName": "调整研究员",
										"roleName": "AdjustResearcher",
										"qtip": "基础股票池调整研究员权限"
									},
									{
										"opName": "调整行业",
										"roleName": "AdjustIndustry",
										"qtip": "基础股票池调整行业权限"
									},
									{
										"opName": "停用股票",
										"roleName": "StopStock",
										"qtip": "基础股票池停用股票权限"
									},
									{
										"opName": "股票编辑",
										"roleName": "StockEdit",
										"qtip": "基础股票池股票编辑权限"
									},
									{
										"opName": "导出excel",
										"roleName": "ExportStockExcel",
										"qtip": "基础股票池导出excel权限"
									}
								]
							},
							{
								"opName": "层级管理",
								"roleName": "StockPoolLayerMgr",
								"leaf": true
							},
							{
								"opName": "我的股票池",
								"roleName": "StockPoolMgr",
								"leaf": true
							},
							{
								"opName": "重点区域管理",
								"roleName": "StockPoolRegion",
								"leaf": true
							},
							{
								"opName": "重点股票跟踪查询",
								"roleName": "StockTrackInformation",
								"leaf": true
							},
							{
								"opName": "入池答辩",
								"roleName": "StockReply",
								"qtip": "这个菜单没用了",
								"leaf": true
							},
							{
								opName: '入池答辩查询',
								roleName: 'ViewIntoPoolReply',
								leaf: true
							}
						]
					},
					{
						"opName": "股票池分析",
						"authorityItems": [
							{
								"opName": "调整历史",
								"roleName": "AjustHistory",
								"qtip": "投资评级池和共享池中股票的调整历史"
							}
						],
						children: [
							{
								"opName": "投资评级池",
								"roleName": "StockPoolRating",
								"leaf": true
							},
							{
								"opName": "重点关注池",
								"roleName": "StockMyAttention",
								"leaf": true,
								"authorityItems": [
									{
										"opName": "查看所有关注股票",
										"roleName": "StockAttentionAll",
										"qtip": "deprecated"
									}
								]
							},
							{
								"opName": "重点区域池",
								"roleName": "StockPoolImportantArea",
								"leaf": true
							},
							{
								"opName": "共享股票池",
								"roleName": "StockPoolShared",
								"leaf": true
							}
						]
					},
					{
						"iid": 325,
						"opName": "投资组合",
						"roleName": "InvestmentCombination ",
						"children": [
							{
								"opName": "组合类型",
								"roleName": "PortfolioType",
								"leaf": true
							},
							{
								"opName": "组合管理",
								"roleName": "PortfolioList",
								"leaf": true
							}/*,
							{
								"iid": 243,
								"opName": "投资组合类型",
								"roleName": "CombiManage",
								"leaf": true
							},
							{
								"iid": 244,
								"opName": "我的投资组合",
								"roleName": "CombiInvestment",
								"leaf": true
							},
							{
								"iid": 245,
								"opName": "共享投资组合",
								"roleName": "CombiInvestmentShare",
								"leaf": true
							},
							{
								"iid": 246,
								"opName": "公式管理",
								"roleName": "StockFormula",
								"leaf": true
							}*/
						]
					},
					{
						"iid": 324,
						"opName": "指数管理",
						"roleName": "IndexManagement",
						"children": [
							{
								"iid": 292,
								"opName": "分析师指数",
								"roleName": "StockChartUser",
								"leaf": true
							}
						]
					},
					{
						"opName": '评级管理',
						"roleName": 'InvestmentGradeMgr',
						"children": [
							{
								"opName": '公司评级',
								"roleName": 'CompanyRatingMgr',
								"leaf": true
							},
							{
								"opName": '行业评级',
								"roleName": 'IndustryRatingMgr',
								"leaf": true
							}
						]
					}
				]
			},
			{
				"opName": "公告信息",
				"roleName": "NoticeInfo",
				"children": [
					{
						"opName": "公告定制",
						"roleName": "NoticeCustom",
						"leaf": true
					},
					{
						"opName": "公告查询",
						"roleName": "NoticeSearch",
						"leaf": true
					}
				]
			}
		]
	},
	{
		"opName": "研究成果",
		"roleName": "ResearchMgr",
		"children": [
			{
				"iid": 112,
				"opName": "报告查询",
				"roleName": "StudyDocu",
				"authorityItems": [
					{
						"opName": "行政文档",
						"roleName": "AdmSearch",
						"qtip": "行政文档查看权限"
					}				
				],
				"children": [
					{
						"iid": 113,
						"opName": "内部报告",
						"roleName": "HtDocu",
						"authorityItems": [
							{
								"opName": "内部报告",
								"roleName": "HtSearch",
								"qtip": "内部报告查看权限"
							}
						],
						"children": [
							{
								"iid": 114,
								"opName": "最新报告",
								"roleName": "HtNewDocu",
								"children": [
									{
										"iid": 115,
										"opName": "当天报告",
										"roleName": "SearchToday",
										"leaf": true
									},
									{
										"iid": 116,
										"opName": "最近一周报告",
										"roleName": "SearchWeek",
										"leaf": true
									},
									{
										"iid": 117,
										"opName": "最近一月报告",
										"roleName": "SearchMonth",
										"leaf": true
									},
									{
										"iid": 118,
										"opName": "所有报告",
										"roleName": "SearchAllReport",
										"leaf": true
									}
								]
							},
							{
								"iid": 119,
								"opName": "按类型浏览",
								"roleName": "SearchByType",
								"leaf": true
							},
							{
								"iid": 120,
								"opName": "按行业浏览",
								"roleName": "SearchByInd",
								"leaf": true
							}
						]
					},
					{
						"iid": 129,
						"opName": "同业精品",
						"roleName": "Boutique",
						"authorityItems": [
							{
								"opName": "同业精品",
								"roleName": "BizSearch",
								"qtip": "同业精品查看权限"
							}
						],
						"children": [
							{
								"iid": 130,
								"opName": "最新报告",
								"roleName": "BNewDocu",
								"children": [
									{
										"iid": 131,
										"opName": "当天报告",
										"roleName": "ReportToday",
										"leaf": true
									},
									{
										"iid": 132,
										"opName": "最近一周报告",
										"roleName": "ReportWeek",
										"leaf": true
									},
									{
										"iid": 133,
										"opName": "最近一月报告",
										"roleName": "ReportMonth",
										"leaf": true
									},
									{
										"iid": 134,
										"opName": "所有报告",
										"roleName": "ReportAll",
										"leaf": true
									}
								]
							},
							{
								"iid": 135,
								"opName": "按类型浏览",
								"roleName": "ViewByType",
								"leaf": true
							},
							{
								"iid": 136,
								"opName": "按行业浏览",
								"roleName": "ViewByInd",
								"leaf": true
							},
							{
								"iid": 137,
								"opName": "按机构浏览",
								"roleName": "ViewByOrg",
								"leaf": true
							},
							{
								'opName': '按来源浏览',
								'roleName': 'ViewByForm',
								'leaf': true
							}
						]
					},
					{
						"opName": "推荐品种查询",
						"roleName": "GroomVarietyView",
						"children": [
							{
								"opName": "股票推荐",
								"roleName": "ReCmdStockView",
								"leaf": true
							},
							{
								"opName": "衍生品推荐",
								"roleName": "ReCmdRelView",
								"leaf": true
							},
							{
								"opName": "基金推荐",
								"roleName": "ReCmdFundView",
								"leaf": true
							},
							{
								"opName": "债券推荐",
								"roleName": "ReCmdBondView",
								"leaf": true
							},
							{
								"opName": "共享资料查询",
								"roleName": "SharedPPTSearch",
								"leaf": true,
								"authorityItems": [
									{
										"opName": "全部PPT共享查询",
										"roleName": "SharedPPTSearchAll",
										"qtip": "deprecated"
									},
									{
										"opName": "本部门PPT共享查询",
										"roleName": "SharedPPTSearchDept",
										"qtip": "deprecated"
									},
									{
										"opName": "本人PPT共享查询",
										"roleName": "SharedPPTSearchSelf",
										"qtip": "deprecated"
									}
								]
							},
							{
								"opName": "理财一组",
								"roleName": "financialManageView1",
								"leaf": true
							},
							{
								"opName": "理财二组",
								"roleName": "financialManageView2",
								"leaf": true
							}
						]
					},
					{
						"opName": "投资理财中心",
						"roleName": "InvestCenter",
						"authorityItems": [
							{
								"opName": "删除",
								"roleName": "deleteInvestCenterReport",
								"qtip": "投资理财中心删除权限"
							}
						],
						"children": [
							{
								"opName": "每日投资策略",
								"roleName": "DailyInvest",
								"leaf": true
							},
							{
								"opName": "财富账户周策略",
								"roleName": "WeeklyBizAccount",
								"leaf": true
							},
							{
								"opName": "B股策略周报",
								"roleName": "WeeklyBizB",
								"leaf": true
							},
							{
								"opName": "月度策略周报",
								"roleName": "MonthBizWeekly",
								"leaf": true
							},
							{
								"opName": "债券市场周报",
								"roleName": "BondWeekly",
								"leaf": true
							},
							{
								"opName": "基金报告",
								"roleName": "MonthFundSet",
								"leaf": true
							},
							{
								"opName": "财富账户港股周策略",
								"roleName": " WeeklyHK",
								"leaf": true
							}
						]
					},
					{
						"opName": "统计查询",
						"roleName": "StatisticalInquiry",
						"children": [
							{
								"opName": "服务预约查询",
								"roleName": "PreArrangedServices",
								"leaf": true,
								"authorityItems": [
									{
										"opName": "全部服务预约查询",
										"roleName": "PreArrangedAll",
										"qtip": "deprecated"
									},
									{
										"opName": "本部门服务预约查询",
										"roleName": "PreArrangedDept",
										"qtip": "deprecated"
									},
									{
										"opName": "本人服务预约查询",
										"roleName": "PreArrangedSelf",
										"qtip": "deprecated"
									}
								]
							},
							{
								"opName": "业务报备查询",
								"roleName": "mergeDoc",
								"leaf": true,
								"authorityItems": [
									{
										"opName": "汇总全部",
										"roleName": "mergeAll",
										"qtip": "deprecated"
									},
									{
										"opName": "汇总部门",
										"roleName": "mergeDept",
										"qtip": "deprecated"
									}
								]
							}
						]
					}/**,
					{
						"iid": 129,
						"opName": "博览财经",
						"roleName": "Bolan",
						*"children": [
							{
								"iid": 135,
								"opName": "按类型浏览",
								"roleName": *"ViewByTypeBolan",
								"leaf": true
							}
						]
					}*/,
					{
						"iid": 138,
						"opName": "高级检索",
						"roleName": "CurrentReport",
						"leaf": true
					},
					{
						"opName": "知识库查询",
						"roleName": "KnowledgeBaseQuery",
						"leaf": true
					}
				]
			}
		]
	},
	{
		"opName": "数据中心",
		"roleName": "DataCenter",
		"children": [
			{
				"opName": "采集维护",
				"roleName": "DataSourceMgr2",
				"children": [
					{
						"opName": "数据源管理",
						"roleName": "DataSourceMgr2",
						"leaf": true
					}
				]
			},
			{
				"opName": "字段来源",
				"roleName": "FieldsSource",
				leaf: true
			},
			{
				"opName": "数据源管理",
				"roleName": "DataSourceMgr",
				leaf: true
			},
			{
				"opName": "资讯网站",
				"roleName": "InformationWebsite",
				leaf: true
			},
			{
				"opName": "资讯数据",
				"roleName": "InformationData",
				leaf: true
			},
			{
				"opName": "数据权限",
				"roleName": "DataPower",
				leaf: true
			},
			{
				"opName": "统计查看",
				"roleName": "StatisticsView",
				leaf: true
			},
			{
				"opName": "任务定制",
				"roleName": "TaskCustomize",
				leaf: true
			},
			{
				"opName": "数据校验",
				"roleName": "DataValidate",
				leaf: true
			},
			{
				"opName": "结构化采集日志",
				"roleName": "KettleView",
				iconCls: "issue-ico",
				leaf: true
			},
			{
				"opName": "结构化采集任务",
				"roleName": "KettleTask",
				iconCls: "issue-ico",
				leaf: true
			},
			{
				"opName": "结构化数据采集",
				"roleName": "KettleMgr",
				"children": [{
						"opName": "港澳",
						"roleName": "KettleMgr",
						"value": 1,
						"leaf": true
					},
					{
						"opName": "万得",
						"value": 2,
						"roleName": "KettleMgr",
						"leaf": true
					},
					{
						"opName": "投研平台",
						"value": 3,
						"roleName": "KettleMgr",
						"leaf": true
					}
				]
			},
			{
				"opName": "非结构化数据采集",
				"roleName": "DataCaiji",
				"children": [
					{
						"opName": "行情数据采集",
						"roleName": "DataGather",
						"value": 1,
						"leaf": true
					},
					{
						"opName": "公司数据采集",
						"value": 2,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "宏观经济",
						"value": 92,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "煤炭行业",
						"value": 91,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "化工行业",
						"value": 25,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "电力行业",
						"value": 26,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "旅游行业",
						"value": 27,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "农业",
						"value": 28,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "房地产行业",
						"value": 29,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "建材行业—水泥",
						"value": 30,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "食品饮料行业",
						"value": 31,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "钢铁行业",
						"value": 32,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "电子行业",
						"value": 33,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "其他",
						"value": 80,
						"roleName": "DataGather",
						"leaf": true
					},
					{
						"opName": "自定义采集",
						"roleName": "GatherCustomize",
						"leaf": true,
						"iconCls": "issue-ico"
					}
				]
			},
			{
				"opName": "数据管理",
				"roleName": "DataM",
				"children": [
					{
						"opName": "插件提取日志",
						"roleName": "AddinLog",
						leaf: true
					},
					{
						"opName": "维度管理",
						"roleName": "DataSourceMgrCover",
						"iconCls": "dept-ico",
						"leaf": true
					},
					{
						"opName": "数据字典",
						"roleName": "ImportFromDB",
						"leaf": true
					},
					{
						"opName": "Excel模板",
						"roleName": "ExcelTemplate",
						"leaf": true
					},
					{
						"opName": "视图管理",
						"roleName": "DataViewManage",
						"leaf": true
					},
					{
						"opName": "数据分类",
						"roleName": "DataSetClassification",
						"leaf": true
					},
					{
						"opName": "指标层级管理",
						"roleName": "IndexLayerManager",
						"leaf": true
					},
					{
						opName: '数据指标',
						roleName: 'DataIndex',
						leaf: true
					}
				]
			},
			{
				"opName": "菜单分类管理",
				"children": [
					{
						"opName": "网络采集",
						"roleName": "DataClassMgr",
						"value": 1,
						leaf: true
					},
					{
						"opName": "数据库采集",
						"roleName": "DataClassMgr",
						"value": 2,
						"leaf": true
					},
					{
						"opName": "数据发布",
						"roleName": "DataClassMgr",
						value: 3,
						"leaf": true
					}
				]
			}
		]
	},
	{
		"opName": "绩效考核",
		"roleName": "PerforAnalysis",
		"children": [
			{
				"opName": "考核项管理",
				"roleName": "PerformanceManagement",
				"leaf": true
			},
			{
				"opName": "考核模板管理",
				"roleName": "ExamineTempletManagement",
				"leaf": true
			},
			{
				"opName": "客户服务打分",
				"roleName": "ServiceGrade",
				"leaf": true
			},
			{
				"opName": "考核统计",
				"roleName": "ExamineCenter",
				"children": [
					{
						"opName": "按考核项统计",
						"roleName": "AssessmentDetail",
						"leaf": true
					},
					{
						"opName": "按用户统计",
						"roleName": "AssessmentStatistics",
						"leaf": true
					},
					{
						"opName": "考核中心",
						"roleName": "AssessmentCenter",
						"leaf": true
					}
				],
				"authorityItems": [
					{
						"opName": "查看所有人",
						"roleName": "Assessment_Dept_All",
						"qtip": "考核统计查看所有权限"
					},
					{
						"opName": "查看本部门",
						"roleName": "Assessment_Dept_Self",
						"qtip": "考核统计查看本部门权限"
					},
					{
						"opName": "启动考核",
						"roleName": "Assessment_Start",
						"qtip": "启动考核和重新考核权限"
					},
					{
						"opName": "考核结果编辑",
						"roleName": "Assessment_Result_Edit",
						"qtip": "考核结果编辑权限"
					}
				]
			}
		]
	},
	{
		"opName": "系统管理",
		"roleName": "SystemGeneral",
		"children": [
			{
				"opName": "组织结构",
				"roleName": "Framework",
				"children": [
					{
						"opName": "部门人员",
						"roleName": "DeptGeneral",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "同步数据",
								"roleName": "SynchronousData",
								"qtip": "同步数据"
							}
						]
					},
					{
						"opName": "角色管理",
						"roleName": "Role",
						"leaf": true
					},
					{
						"opName": "岗位管理",
						"roleName": "Post",
						"leaf": true
					},
					{
						"opName": "通讯录",
						"roleName": "UserDictionary",
						"leaf": true
					},
					{
						"opName": "用户角色关联查询",
						"roleName": "RoleRelate",
						"leaf": true
					},
					{
						"opName": "合作伙伴配置",
						"roleName": "PartnerList",
						"leaf": true
					},
					{
						"opName": "托管机构配置",
						"roleName": "OrgList",
						"leaf": true
					},{
						"opName": "产品类型配置",
						"roleName": "ProductTypeList",
						"leaf": true
					}
				]
			},
			{
				"opName": "客户管理设置",
				"children": [
					{
						"opName": "客户职务",
						"roleName": "CustomerPosition",
						"leaf": true
					}/*,
					{
						"opName": "客户部门",
						"roleName": "CustomerDepartmentMgr",
						"leaf": true
					},
					{
						"opName": "客户工作领域",
						"roleName": "OutWorkAreas",
						"leaf": true
					}*/,
					{
						"opName": "负责业务",
						"roleName": "CustomerBusiness",
						"leaf": true
					},
					{
						"opName": "客户级别",
						"roleName": "CustomerLevel",
						"leaf": true
					}/*,
					{
						"opName": "客户性质",
						"roleName": "CustomerNature",
						"leaf": true
					}*/,
					{
						"opName": "客户分类",
						"roleName": "CustomerType",
						"leaf": true
					},
					{
						"opName": "客户区域",
						"roleName": "AreaConfig",
						"leaf": true
					},
					{
						opName: '业务进度',
						roleName: 'BusinessProgress',
						leaf: true
					},
					{
						opName: '纪念日维护',
						roleName: 'MemorialDay',
						leaf: true
					}/*,
					{
						"opName": "内部用户职务",
						"roleName": "UserPosition",
						"leaf": true
					},
					{
						"opName": "内部部门管理",
						"roleName": "DepartmentManager",
						"leaf": true
					},
					{
						"opName": "内部工作领域",
						"roleName": "InWorkAreas",
						"leaf": true
					}*/
				]
			},
			{
				"opName": "邮件配置",
				"roleName": "MailVindicate",
				"children": [
					{
						"opName": "邮件账号管理",
						"roleName": "MailAccount",
						"leaf": true
					},
					{
						"opName": "邮件主题维护",
						"roleName": "MailSubject",
						"leaf": true
					},
					{
						"opName": "邮件发送规则",
						"roleName": "MailSendRule",
						"leaf": true
					},
					{
						"opName": "邮件接收规则",
						"roleName": "MailAcceptRule",
						"leaf": true
					},
					{
						"opName": "邮件发送情况一览",
						"roleName": "MailSendView",
						"leaf": true
					},
					{
						"opName": "邮件解析失败日志",
						"roleName": "MailParseFault",
						"leaf": true
					},
					{
						"opName": "发送对象管理",
						"roleName": "SendObjectMgr",
						"leaf": true
					}
				]
			},
			{
				"opName": "基础配置",
				"roleName": "BaseVindicate",
				"children": [
					{
						"opName": "行业",
						"roleName": "Industry",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "添加行业",
								"roleName": "addHtIndustry",
								"qtip": "deprecated"
							},
							{
								"opName": "编辑行业",
								"roleName": "editHtIndustry",
								"qtip": "deprecated"
							},
							{
								"opName": "删除行业",
								"roleName": "delHtIndustry",
								"qtip": "deprecated"
							}
						]
					},
					{
						"opName": "公司",
						"roleName": "Company",
						"leaf": true
					},
					{
						"opName": "密级管理",
						"roleName": "Secret",
						"leaf": true
					},
					{
						"opName": "调研类报告类型维护",
						"roleName": "WorkTypeForm",
						"leaf": true
					},
					{
						"opName": "研究机构维护",
						"roleName": "ResearchDept",
						"leaf": true
					},
					{
						"opName": "媒体维护",
						"roleName": "MediaView",
						"leaf": true
					},
					{
						"opName": "外部系统",
						"roleName": "ExternalSystem",
						"leaf": true
					}
				]
			},
			{
				"opName": "数据安全",
				"roleName": "DataSafeManger",
				"authorityItems": [
					{
						"opName": "引用表单转为输出表单",
						"roleName": "referSheetToExportSheet",
						"qtip": "deprecated"
					}
				],
				"children": [
					{
						"opName": "参数设置",
						"roleName": "DataSafe",
						"leaf": true
					},
					{
						"opName": "文档特权修改",
						"roleName": "DocumentLimit",
						"leaf": true
					}
				]
			},
			{
				"opName": "流程管理",
				"roleName": "WorkflowManagement",
				"authorityItems": [
					{
						"opName": "结束工作流",
						"roleName": "WorkflowStopInst",
						"qtip": "deprecated"
					},
					{
						"opName": "跨部门审批",
						"roleName": "WorkflowCrossDept",
						"qtip": "deprecated"
					}
				],
				"children": [
					{
						"opName": "流程定义",
						"roleName": "WFDefine",
						"leaf": true
					},
					{
						"opName": "流程监控",
						"roleName": "FlowDefinition",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "重置审批人",
								"roleName": "ResetAppr",
								"qtip": "流程监控重置审批人权限"
							},
							{
								"opName": "审批流程监控-抄送所有",
								"roleName": "CCTaskView",
								"qtip": "代办查看抄送任务权限"
							}
						]
					}
				]
			},
			{
				"opName": "定制管理",
				"roleName": "CustomManagement",
				"children": [
					{
						"opName": "附件类型管理",
						"roleName": "FileTypeManage",
						"leaf": true
					},
					{
						"opName": "二级主页定制",
						"roleName": "SubPage",
						"leaf": true
					},
					{
						"opName": "要点类型",
						"roleName": "CollaborationType",
						"leaf": true
					},
					{
						"opName": "内部报告类型",
						"roleName": "Notify",
						"leaf": true
					},
					{
						"opName": "内部报告类型new",
						"roleName": "Keyelement",
						"leaf": true
					},
					{
						"opName": "外部报告类型",
						"roleName": "NotifyOut",
						"leaf": true
					},
					{
						"opName": "工作类型",
						"roleName": "WorkType",
						"leaf": true
					},
					{
						opName: '工作类型维护',
						roleName: 'WorkTypeMgr',
						leaf: true
					},
					{
						opName: '短信发送规则',
						roleName: 'SMSSendRule',
						leaf: true
					}, {
						opName: '短信发送日志',
						roleName: 'SMSSendHistroy',
						leaf: true
					}
				]
			},
			{
				"opName": '合规管理',
				"roleName": 'ComplianceMgr',
				"children": [
					{
						"opName": "报告合规定制",
						"roleName": "ComplianceReport",
						"leaf": true
					},
					{
						"opName": "合规检测查询",
						"roleName": "ComplianceManage",
						"leaf": true,
						"authorityItems": [
							{
								"opName": "合规结果修改",
								"roleName": "ModifyCompliance",
								"qtip": "合规修改检测状态权限"
							}
						]
					},
					{
						"opName": "合规操作日志",
						"roleName": "ComplianceHistory",
						"children": [
							{
								"opName": "合规开关",
								"roleName": "ComplianceSwitchHistory",
								"leaf": true
							},
							{
								"opName": "合规定制",
								"roleName": "ComplianReportHistory",
								"leaf": true
							},
							{
								"opName": "合规状态",
								"roleName": "ComplianStatusHistory",
								"leaf": true
							}
						]
					}
				]
			},
			{
				"opName": "考勤配置",
				"roleName": "AttendConfig",
				"children": [
					{
						"opName": "节假日设置",
						"roleName": "HolidaysSetting",
						"leaf": true
					},
					{
						"opName": "上下班时间维护",
						"roleName": "DayDutyTime",
						"leaf": true
					},
					{
						"opName": "考勤成员维护",
						"roleName": "Attendance",
						"leaf": true
					},
					{
						"opName": "迟到早退原因维护",
						"roleName": "DutyReasonManage",
						"leaf": true
					},
					{
						"opName": "考勤登录IP设定",
						"roleName": "IPConfig",
						"leaf": true
					}
				]
			},
			{
				"opName": "工作日志",
				"roleName": "AttendConfig",
				"children": [
					{
						"opName": "发布记录",
						"roleName": "LogIssue",
						"leaf": true
					},
					{
						"opName": "导入记录",
						"roleName": "LogImport",
						"leaf": true
					},
					{
						"opName": "导出记录",
						"roleName": "LogExport",
						"leaf": true
					},
					{
						"opName": "日志管理",
						"roleName": "LogAdmin",
						"leaf": true
					},
					{
						"opName": "pdf转换日志",
						"roleName": "PdfConvert",
						"leaf": true
					},
					{
						"opName": "远程获取日志",
						"roleName": "GetherLog",
						"leaf": true
					}
				]
			}
		]
	},{
		"opName": "产品管理",
		"roleName": "ProductMng",
		"children": [
			{
				"opName": "产品录入",
				"roleName": "WriteProduct",
				"leaf": true
			},{
				"opName": "产品维护",
				"roleName": "ProductMaintenance",
				"leaf": true
			},{
				"opName": "评价产品管理",
				"roleName": "JudgeProductMng",
				"children": [
					{
						"opName": "待投票产品",
						"roleName": "VotingList",
						"leaf": true
					},{
						"opName": "已投票产品",
						"roleName": "VotedList",
						"leaf": true
					}
				]
			},{
				"opName": "上交产品管理",
				"roleName": "HandinProductMng",
				"children": [
					{
						"opName": "上交产品",
						"roleName": "HandinProductList",
						"leaf": true
					}
				]
			},{
				"opName": "产品中心管理",
				"roleName": "ProductCentreMng",
				"children": [
					{
						"opName": "产品中心",
						"roleName": "ProductCentreList",
						"leaf": true
					}
				]
			},{
				"opName": "产品审批管理",
				"roleName": "ProductApproveMng",
				"children": [
					{
						"opName": "待审产品",
						"roleName": "SimpleFlowTaskList",
						"leaf": true
					},{
						"opName": "已审批产品",
						"roleName": "ApprovedTaskList",
						"leaf": true
					}
				]
			}
		]
	},{
		"opName": "产品中心全景图",
		"roleName": "panorama",
		"children": [{
			"opName": "修改费率",
			"roleName": "editPanoramaRate",
			"leaf": true
		},{
			"opName": "查看全景图",
			"roleName": "showPanoramaRate",
			"leaf": true
		}]
	}
];