const apis={
  riskModel:{
    modelTree:{
      url:'/risk-warning/riskDomainCategoryController/getDomainCategoryTrees',
    },
    getModelList:{
      url:'/risk-warning/riskAnalysisModelController/queryAnalysisModelPage',
      method:'post',
    },
    modelList:{
      url:'/risk-warning/riskIndicatorController/queryIndicatorPage',
      method:'post',
    },
  },
};

export default apis;





