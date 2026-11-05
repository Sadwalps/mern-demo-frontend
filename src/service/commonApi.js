//import axios
const axios = require('axios')

export const commonAPI = async (httprequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httprequest,
        url,
        data: reqBody,
        header: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((error) => {
        return error
    })
}