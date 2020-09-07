const apis={
  warningSignal:{
    signalList:{
      url:'/risk-warning/riskWarningSignalController/queryRiskSignalInPage',
    },
    signalSend:{
      url:'/risk-warning/riskWarningSignalController/sendRiskSignal',
      method:'post',
    },
    getSignalList:{
      url:'/risk-warning/riskAnalysisModelController/queryAnalysisModel',
      method:'post',
    },
  },
};

export default apis;





