import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for add data
export const addDataAPI = async (reqBody)=>{
    return await commonAPI(`POST`, `${serverURL}/add`, reqBody)
}

//api for get data
export const getDataAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/alldata`,"" )
}

//api for delete data
export const deleteDataAPI= async(id)=>{
    return await commonAPI(`DELETE`, `${serverURL}/deletedata/${id}`,{})
}