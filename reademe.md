
登录功能接口实现：在react中，
ajax.js:对axios进行二次封装，创建函数ajax(url,data,type),导出这个函数
index.js(api文件中)：把请求接口全部封装成函数，目的是请求一个接口就像调用一个函数
    登录
      使用try{}catch{}捕获错误，针对async和await
      想要不使用try{}catch{}，可以在封装ajax时，统一处理失败
    路由级别的组件有三个属性：history：go,goback,push(返回用),replace(一个新页面（路由）)
                             match
                             location
    数据可以存在内存或本地（一直存在）
    判断用户是否登录，也就是判断内存中是否有数据
