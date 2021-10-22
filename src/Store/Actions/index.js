import axios from "../../Services/axiosinstance"
import * as types from './actionType'
import {baseUrl} from "../../Services/config.json"
import { candidateData } from "../Reducers/AuthReducers"
   



export const getCandidates = () => async (dispatch) => {
    try{
        const response = await axios.get(`/home/candidates`, {})        
        if(response.data){
            dispatch({
                type: types.CANDIDATES_DATA,
                payload: response.data,
            })
        }
    }
    catch(e){
        dispatch({
            type: types.CANDIDATES_ERROR,
            payload: "ERROR",
        })
        console.log(e)
    }
}



export const getCandidateById = (id) => async (dispatch) => {
    try{
        const response = await axios.get(`/home/candidate/${id}`, {})        
        if(response.data){
            dispatch({
                type: types.CANDIDATE_DATA,
                payload: response.data,
            })
            console.log(response.data)
        }
    }
    catch(e){
        dispatch({
            type: types.CANDIDATE_ERROR,
            payload: "ERROR",
        })
        console.log(e)
    }
}





export const Login = (obj) => async (dispatch) => {
    try{
        const response = await axios.post(`${baseUrl}/home/login`,obj)
        if(response.data){            
            dispatch({
                type: types.LOGIN_DATA,
                payload: response.data,
            })
            console.log(response.data)
        }
    }
    catch(e){
        dispatch({
            type: types.LOGIN_ERROR,
            payload:e,
        })
        console.log(e)
    }
}



export const DeleteById = (path,id) => async (dispatch) => {
    try{
        const response = await axios.delete(`${baseUrl}home/${path}/${id}`)
        if(response.data){            
            dispatch({
                type: types.DELETE_DATA,
                payload: response.data,
            })
            console.log(response.data)
        }
    }
    catch(e){
        dispatch({
            type: types.DELETE_ERROR,
            payload:e,
        })
        console.log(e)
    }
}







export const getManagers = () => async (dispatch) => {
    try{
        const response = await axios.get(`/home/users`, {})        
        if(response.data){
            dispatch({
                type: types.MANAGER_DATA,
                payload: response.data,
            })
        }
    }
    catch(e){
        dispatch({
            type: types.MANAGER_ERROR,
            payload: "ERROR",
        })
        console.log(e)
    }
}


