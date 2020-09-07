import fetcher from './fetcher';

const api={
  list:{
    // url:'/api/getList',
    url:'/risk-warning/riskIndicatorController/queryIndicatorPage',
    method:'post',
  },
  edit:{
    // url:'/api/editItem',
    url:'/risk-warning/riskIndicatorController/addIndicator',
    method:'post',
  },
  del:{
    // url:'/api/deleteItem',
    url:'/risk-warning/riskIndicatorController/deleteIndicator',
    method:'post',
  },
};

const {list,edit,del}=api;

export const getList=data=>fetcher({...list,data});

export const editItem=data=>fetcher({...edit,data});

export const deleteItem=form=>fetcher({...del,form});




