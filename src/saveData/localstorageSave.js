import store from "store"
import _default from "antd/lib/time-picker"
const USER = "USER"
export default{
    
    //保存
    saveUser(user){
    //localStorage.setItem(USER,JSON.stringify(user))
    //console.log("SAVE...............")
    store.set(USER,user)
    },
    //获取
    getUser(){
        //console.log("GET...............")
        //localStorage.getItem("user")得到字符串
        //JSON.parse(localStorage.getItem("user"))转成对象
    //   return JSON.parse(localStorage.getItem(USER) || "{}")
       return store.get(USER)
    },
    //删除
    removeUser(){
        // localStorage.removeItem(USER)
        store.remove(USER)
    }
    
}