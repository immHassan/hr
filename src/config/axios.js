import axios from "axios";
import {api} from "./config.json"

export const hospital=axios.create({
    baseURL:api
})