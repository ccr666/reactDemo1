//封装请球接口为函数
import ajax from './ajax'

//  1). 登陆
//http://localhost:5000/login  GET username string 用户名 password  string 密码
// let BASE_URL = "http://localhost:5000";
let BASE_URL = "";
// const reqLogin = function  reqLogin(){
//     return  ajax(BASE_URL+"/login",{username:"admin",password:"admin"},"POST")
// }
//
 export const reqLogin = (username,password)=>ajax(BASE_URL+"/login",{ username,password},"POST")



//  2). 添加用户
//  3). 更新用户
//  4). 获取所有用户列表
//  5). 删除用户
//  6). 获取一级或某个二级分类列表
//  7). 添加分类
//  8). 更新品类名称
//  9). 根据分类ID获取分类
//  10). 获取商品分页列表
//  11). 根据ID/Name搜索产品分页列表
//  12). 添加商品
//  13). 更新商品
//  14). 对商品进行上架/下架处理
//  15). 上传图片
//  16). 删除图片
//  17). 添加角色
//  18). 获取角色列表
//  19). 更新角色(给角色设置权限)
//  20). 获取天气信息(支持jsonp)