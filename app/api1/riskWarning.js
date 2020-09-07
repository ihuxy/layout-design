const apis={
  target:{
    getTreeTarget:{
      url:'/risk-warning/riskIndicatorCategoryController/getIndicatorCategoryTrees',
    },
    addNodeTarget:{
      url:'/risk-warning/riskIndicatorCategoryController/addIndicatorCategory',
      method:'post',
    },
    deleteNodeTarget:{
      url:'/risk-warning/riskIndicatorCategoryController/deleteIndicatorCategory',
      method:'post',
    },
    listTarget:{
      url:'/risk-warning/riskIndicatorController/queryIndicatorPage',
      method:'post',
    },
    addListTarget:{
      url:'/risk-warning/riskIndicatorController/addIndicator',
      method:'post',
    },
    deleteListTarget:{
      url:'/risk-warning/riskIndicatorController/deleteIndicator',
      method:'post',
    },
    listAllTarget:{
      url:'/risk-warning/risEvaluateRuleController/queryEvaluateRuleAll',
      method:'post',
    },
  },
  model:{
    getTreeModel:{
      url:'/risk-warning/riskDomainCategoryController/getDomainCategoryTrees',
    },
    addNodeModel:{
      url:'/risk-warning/riskDomainCategoryController/addDomainCategory',
      method:'post',
    },
    deleteNodeModel:{
      url:'/risk-warning/riskDomainCategoryController/deleteDomainCategory',
      method:'post',
    },
    listModel:{
      url:'/risk-warning/riskAnalysisModelController/queryAnalysisModelPage',
      method:'post',
    },
    addListModel:{
      url:'/risk-warning/riskAnalysisModelController/addAnalysisModel',
      method:'post',
    },
    deleteListModel:{
      url:'/risk-warning/riskAnalysisModelController/deleteAnalysisModel',
      method:'post',
    },
  },
  rule:{
    listRule:{
      url:'/risk-warning/risEvaluateRuleController/queryEvaluateRulePage',
      method:'post',
    },
    addRule:{
      url:'/risk-warning/risEvaluateRuleController/addEvaluateRule',
      method:'post',
    },
    deleteRule:{
      url:'/risk-warning/risEvaluateRuleController/deleteEvaluateRule',
      method:'post',
    },
  },
};

export default apis;





