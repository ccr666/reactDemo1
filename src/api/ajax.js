import axios from "axios"
import { message } from 'antd';

//对axios二次封装--->实现ajax(url,data={},type="GET")  
export default function ajax(url,data={},type="GET") {
    //统一处理异常
      return new Promise((resolve,reject)=>{
         let promise;
        if(type==="GET"){
            promise = axios.get(url,{
                params:data
            })
        }
        else{
            promise = axios.post(url,data)
        }
        promise.then(response=>{//请求成功
           resolve(response)
           //console.log(response.data)
        }).catch(error=>{//请求失败
            message.error('This is an error message');
        })
    })
    
}