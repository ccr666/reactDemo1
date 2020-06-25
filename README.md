错误类型
TypeError: props.history is undefined
Router
F:/reactProject1/modules/Router.js:20

  17 | super(props);
  18 | 
  19 | this.state = {
> 20 |   location: props.history.location
     | ^  21 | };
  22 | 
  23 | // This is a bit of a hack. We have to start listening for location
  解决办法：router版本问题 
       cd 项目根目录    // 跳转到项目根目录下
       npm uninstall react-router    // 卸载4.*版本的包
       npm install react-router@3.*  // 安装3.*版本中最新的包