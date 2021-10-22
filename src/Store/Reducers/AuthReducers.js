
import { 
    CANDIDATE_DATA,
    CANDIDATE_ERROR,
    CANDIDATES_DATA,
    CANDIDATES_ERROR,
    LOGIN_DATA,
    LOGIN_ERROR,
    DELETE_DATA,
    DELETE_ERROR,
    MANAGER_DATA,
    MANAGER_ERROR
} from '../Actions/actionType'

const initialState= {
    success: false
}

export function LoginUser(state=initialState,action){
    switch(action.type){
        case LOGIN_DATA:
            return action.payload;
        case LOGIN_ERROR:
            return action.payload;
        default:
            return state
    }
}


export function candidateData(state=initialState,action){
    switch(action.type){
        case CANDIDATES_DATA:
            return action.payload;
        case CANDIDATES_ERROR:
            return action.payload;
        default:
            return state
    }
}



export function candidateDataById(state=null,action){
    switch(action.type){
        case CANDIDATE_DATA:
            return action.payload;
        case CANDIDATE_ERROR:
            return action.payload;
        default:
            return state
    }
}


export function deleteDataById(state=null,action){
    switch(action.type){
        case DELETE_DATA:
            return action.payload;
        case DELETE_ERROR:
            return action.payload;
        default:
            return state
    }
}






export function managerData(state=initialState,action){
    switch(action.type){
        case MANAGER_DATA:
            return action.payload;
        case MANAGER_ERROR:
            return action.payload;
        default:
            return state
    }
}








