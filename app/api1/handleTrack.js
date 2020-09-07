const apis={
  clue:{
    clueList1:{
      url:'/risk-warning/riskHandlingController/queryRiskClueInPage',
    },
    clueList2:{
      url:'/risk-warning/riskHandlingController/queryRiskClueById',
    },
    audit:{
      url:'/risk-warning/riskHandlingController/auditClueById',
      method:'post',
    },
    publish:{
      url:'/risk-warning/riskHandlingController/publishClueById',
      method:'post',
    },
    handle:{
      url:'/risk-warning/riskHandlingController/handleClueById',
      method:'post',
    },
  },
};

export default apis;





