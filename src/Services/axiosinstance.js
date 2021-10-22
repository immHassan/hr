import axios from "axios"
import {baseUrl} from "../Services/config.json"
import Token from "../Services/jwtToken"



// 
export default axios.create({
    baseURL: baseUrl,
    headers:{
        "Authorization":Token()
    }
});

