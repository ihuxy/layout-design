const apis={
  riskTask:{
    taskList:{
      url:'/risk-warning/riskModelTaskController/queryModelTaskPage',
      method:'post',
    },
    taskAdd:{
      url:'/risk-warning/riskModelTaskController/addModelTask',
      method:'post',
    },
    taskDelete:{
      url:'/risk-warning/riskModelTaskController/deleteModelTaskBatch',
      method:'post',
    },
    taskExecute:{
      url:'/risk-warning/riskModelTaskController/executeTask',
      method:'post',
    },
  },
};

export default apis;





