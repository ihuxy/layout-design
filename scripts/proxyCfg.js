const proxyCfg=url=>({
  prefix:'/api',
  opts:{
    target: url,
    changeOrigin: true,
    // pathRewrite: {'^/v1':'/v1'},
  },
});

module.exports=proxyCfg;





