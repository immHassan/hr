import {combineReducers,compose,createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {
    LoginUser, candidateData,candidateDataById,deleteDataById,managerData,UpdateByIdData,DashboardData
} from './Reducers/AuthReducers'


const reducers = combineReducers({
    LoginUser,
    candidateData,
    candidateDataById,
    deleteDataById,
    managerData,
    UpdateByIdData,
    DashboardData
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(reducers,{},composeEnhancers(applyMiddleware(ReduxThunk)));


export default store