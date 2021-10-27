import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router, Route,Redirect} from "react-router-dom"
import SideNav from '../components/SideNav'
import UpperNave from "../components/UpperNav"
import Footer from '../components/Footer'
import Dashboard from '../pages/dashboard'
import Candidates from '../pages/candidates'
import Managers from '../pages/managers'
import Candidate from '../pages/candidates/add'
import CandidateById from '../pages/candidates/viewCandidate'
import Manager from '../pages/managers/add'
import Login from '../pages/login'
import * as actions from './../Store/Actions';
import {connect} from "react-redux";
import axios from '../Services/axiosinstance'

function Routes({LoginUser}) {
    const [token, setToken] = useState(null)
   
   
    // useEffect(() => {
    //     const userData = localStorage.getItem('userData');
    //     if(userData){
    //         const parse = JSON.parse(userData)
    //         setToken(parse.token)
    //         console.log(parse.token, "TOKEN")
    //     }
    // },[])


    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if(userData){
            const parse = JSON.parse(userData)
            setToken(parse.token)
            axios.defaults.headers.common['Authorization']= parse.token;   
            
        }
    }, [LoginUser])

    return (
        <Router>
            {/* <section className="main_content dashboard_part" > */}
        {
            token ?
            <section className="main_content dashboard_part" >
                <SideNav/>
                    <UpperNave/>
                    <Route path="/login" component={()=><Redirect to="/dashboard"/>}/>
                    <Route exact path="/dashboard" component={Dashboard}/> 
                    <Route exact path="/" component={Dashboard}/>  
                    <Route path="/candidates" component={Candidates}/>                    
                    <Route path="/add/candidate" component={Candidate}/>   
                    <Route path="/candidate/:id" component={CandidateById}/>
                    <Route path="/managers" component={Managers}/>   
                    <Route path="/add/manager" component={Manager}/> 

                    <Footer/>

            </section>:
           <>
            <Route  path="/" component={()=><Redirect to="/login"/>}/>
            <Route exact path="/login" component={Login}/>
           </> 
        }
           

        </Router>
        
    )
}

const mapStatetoProps = ({LoginUser}) =>
{
      return {LoginUser}
}
export default connect(mapStatetoProps,actions)(Routes)