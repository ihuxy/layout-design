const app={
  HOST:process.env.IP||'localhost',
  PORT:process.env.PORT||9300,
  PRO_PORT:process.env.PRO_PORT||9301,
  BUILD_DIR:'../dist',//'build',
  DIST:'../dist',
  PUBLIC_DIR:'../public',
  DEV_ROOT_DIR:'',
  PRD_ROOT_DIR:'/test-app1',
  DEFAULT_TOKEN:'Basic 123456',
  PROXY_URI:'http://47.105.94.51:9202',
  SALT:'yiru',
  TOKEN_SECRET:'yiru',
  mongoUrl:'mongodb://localhost:27017/test',
  serverUrl:'http://localhost:9302',
  serverPort:9302,
  basepath:'/',
};

module.exports=app;
