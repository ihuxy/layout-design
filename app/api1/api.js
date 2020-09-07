import fetcher from './fetcher';
import {
  featureAnalysis,
  handleTrack,
  riskModel,
  riskTask,
  warningSignal,
  riskWarning,
  home,
  domain,
} from './apis';

const {tree:{url,method}}=domain;
const {feature:{faList1,faList2},tab:{tab1,tab2,tab3,tab4,tab5,tab6,tab7,tab8,tab9,tab10,tab11,tab12}}=featureAnalysis;
const {clue:{clueList1,clueList2,audit,publish,handle}}=handleTrack;
const {riskModel:{modelTree,getModelList,modelList}}=riskModel;
const {riskTask:{taskList,taskAdd,taskDelete,taskExecute}}=riskTask;
const {warningSignal:{signalList,signalSend,getSignalList}}=warningSignal;
const {
  target:{getTreeTarget,addNodeTarget,deleteNodeTarget,listTarget,addListTarget,deleteListTarget,listAllTarget},
  model:{getTreeModel,addNodeModel,deleteNodeModel,listModel,addListModel,deleteListModel},
  rule:{listRule,addRule,deleteRule},
}=riskWarning;
const {home:{homeList}}=home;

export const getDomainCategoryTreesSync=params=>fetcher(method)(url,{params});

export const queryEnterpriseCharacteristicsListInPage=params=>fetcher(homeList.method)(homeList.url,{params});


// export const queryEnterpriseCharacteristicsListInPage=params=>fetcher(faList1.method)(faList1.url,{params});


// featureAnalysis
export const queryEnterpriseCharacteristicsInPage=params=>fetcher(faList2.method)(faList2.url,{params});
export const getTab1=params=>fetcher(tab1.method)(tab1.url,{params});
export const getTab2=params=>fetcher(tab2.method)(tab2.url,{params});
export const getTab3=params=>fetcher(tab3.method)(tab3.url,{params});
export const getTab4=params=>fetcher(tab4.method)(tab4.url,{params});
export const getTab5=params=>fetcher(tab5.method)(tab5.url,{params});
export const getTab6=params=>fetcher(tab6.method)(tab6.url,{params});
export const getTab7=params=>fetcher(tab7.method)(tab7.url,{params});
export const getTab8=params=>fetcher(tab8.method)(tab8.url,{params});
export const getTab9=params=>fetcher(tab9.method)(tab9.url,{params});
export const getTab10=params=>fetcher(tab10.method)(tab10.url,{params});
export const getTab11=params=>fetcher(tab11.method)(tab11.url,{params});
export const getTab12=params=>fetcher(tab12.method)(tab12.url,{params});


// handleTrack
export const queryRiskClueInPage=params=>fetcher(clueList1.method)(clueList1.url,{params});
export const queryRiskClueById=params=>fetcher(clueList2.method)(clueList2.url,{params});
export const auditClueById=form=>fetcher(audit.method)(audit.url,{form});
export const publishClueById=form=>fetcher(publish.method)(publish.url,{form});
export const handleClueById=form=>fetcher(handle.method)(handle.url,{form});


// riskModel
export const getTree=params=>fetcher(modelTree.method)(modelTree.url,{params});
export const getList=data=>fetcher(getModelList.method)(getModelList.url,{data});
export const queryIndicatorPage=data=>fetcher(modelList.method)(modelList.url,{data});


// riskTask
export const queryModelTaskPage=data=>fetcher(taskList.method)(taskList.url,{data});
export const addModelTask=data=>fetcher(taskAdd.method)(taskAdd.url,{data});
export const deleteModelTaskBatch=data=>fetcher(taskDelete.method)(taskDelete.url,{data});
export const executeTask=form=>fetcher(taskExecute.method)(taskExecute.url,{form});


// warningSignal
export const queryRiskSignalInPage=params=>fetcher(signalList.method)(signalList.url,{params});
export const sendRiskSignal=form=>fetcher(signalSend.method)(signalSend.url,{form});
export const listSignal=data=>fetcher(getSignalList.method)(getSignalList.url,{data});


// riskWarning
export const getIndicatorCategoryTrees=params=>fetcher(getTreeTarget.method)(getTreeTarget.url,{params});
export const addNode=data=>fetcher(addNodeTarget.method)(addNodeTarget.url,{data});
export const deleteNode=form=>fetcher(deleteNodeTarget.method)(deleteNodeTarget.url,{form});
// export const queryIndicatorPage=data=>fetcher(listTarget.method)(listTarget.url,{data});
export const addIndicator=data=>fetcher(addListTarget.method)(addListTarget.url,{data});
export const deleteIndicator=form=>fetcher(deleteListTarget.method)(deleteListTarget.url,{form});
export const queryEvaluateRuleAll=data=>fetcher(listAllTarget.method)(listAllTarget.url,{data});


export const getDomainCategoryTrees=params=>fetcher(getTreeModel.method)(getTreeModel.url,{params});
export const addDomainCategory=data=>fetcher(addNodeModel.method)(addNodeModel.url,{data});
export const deleteDomainCategory=form=>fetcher(deleteNodeModel.method)(deleteNodeModel.url,{form});
export const queryAnalysisModelPage=data=>fetcher(listModel.method)(listModel.url,{data});
export const addAnalysisModel=data=>fetcher(addListModel.method)(addListModel.url,{data});
export const deleteAnalysisModel=form=>fetcher(deleteListModel.method)(deleteListModel.url,{form});


export const queryEvaluateRulePage=data=>fetcher(listRule.method)(listRule.url,{data});
export const addEvaluateRule=data=>fetcher(addRule.method)(addRule.url,{data});
export const deleteEvaluateRule=form=>fetcher(deleteRule.method)(deleteRule.url,{form});









