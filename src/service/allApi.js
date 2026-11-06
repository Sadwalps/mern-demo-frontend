import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for add data
export const addDataAPI = async (reqBody)=>{
    return await commonAPI(`POST`, `${serverURL}/add`, reqBody)
}