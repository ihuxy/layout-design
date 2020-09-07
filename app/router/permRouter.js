const permRouter=(routers,permList,permKey='authority')=>{
  return routers.map(router=>{
    if(router.children?.length){
      router.children=permRouter(router.children,permList,permKey);
    }
    router.denied=router.denied||router[permKey]&&!permList.includes(router[permKey]);
    return router;
  });
};

export default permRouter;







