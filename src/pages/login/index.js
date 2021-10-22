
import React from 'react';
import "react-slick/dist/react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import  bg from "../../Assets/img/login-bg.jpg";
import  loginLogo from "../../Assets/img/login-logo.png";


import Slider from "react-slick";

import {useEffect,useState} from "react"
import Box from "./Box";
import {hospital} from "../../config/axios"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



import {baseUrl} from "../../Services/config.json"


import {
    Link,useHistory
  } from "react-router-dom";


  import * as actions from './../../Store/Actions';
  import {connect} from "react-redux";

  


function Dashboard({Login, LoginUser}) {

    useEffect(() => {
       
        if(LoginUser.success){
            localStorage.setItem('userData',JSON.stringify(LoginUser.data));   
            toast.success(LoginUser.message)
        }else{
            toast.error(LoginUser.message)
        }
    }, [LoginUser])

    var history = useHistory();
    const [loading,setLoading]=useState(false)
    const [submit,setSubmit]=useState(false)
    
    console.log("submit",submit)

    
    
    // useEffect(()=>{
    //     // setData()
    //     console.log("LoginUser",LoginUser)
    //     if(LoginUser){
    //         // alert("AGAYA")
    //     }
    // },[LoginUser])




    function submitBtn(){
        setSubmit(true);
            setLoading(true)
            console.log(fields)
            Login(fields)
        // console.log("submit",submit)
        //     axios.post(`${baseUrl}home/login`,fields).then((res)=>{

        //             if(res.data.success == false){
        //                 toast.error(res.data.message)
        //                 setLoading(false)
        //             }else{
        //                 setLoading(false)
        //              localStorage.setItem('email',res.data.data.email);
        //              localStorage.setItem('fullName',res.data.data.fullName);
        //              localStorage.setItem('userId',res.data.data.master_admin_id);
        //              localStorage.setItem('phone',res.data.data.phone);
        //              localStorage.setItem('address',res.data.data.presentAddress);
        //              localStorage.setItem('role',res.data.data.role);
        //              localStorage.setItem('token',res.data.data.token);  
        //                     history.go(0)
        //                 toast.success(res.data.message)
        //             }
                            
        //     }).catch((err)=>{
        //         console.log(err,"ERROR")
        //     })


    }



    const [fields,setFields]=useState({
        email:""
    })


    const getValue=(k,v)=>setFields({...fields,[k]:v})

    return (
    
       
    <div className="main_content_iner" style={{height:"100vh",backgroundImage:`url(${bg})`}} >            
        <div className="container-fluid p-0" >
            <div className="row justify-content-center ">
                <div className="col-lg-12 row justify-content-center  mt-5">
                    <img src={loginLogo}  />
                </div>
                

                <div className="col-lg-12">
                    <div className="mb_30">
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-6">
                                <div className="modal-content cs_modal">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Log in</h5>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-row social_login_btn">
                                                <div className="form-group col-md-12 text-center">
                                                    <a href="#" className="btn_1 full_width"><i className="fab fa-facebook-square"></i>Log in with Facebook</a>
                                                </div>
                                                <div className="form-group col-md-12 text-center">
                                                    <a href="#" className="btn_1 full_width"><i className="fab fa-google"></i>Log in with Google</a>
                                                </div>
                                            </div>
                                            <div className="border_style">
                                                <span>Or</span>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" 
                                                style={{borderColor:submit && !fields.email?'red':""}}
                                                onChange={(e)=> getValue('email',e.target.value) }  
                                                placeholder="Enter your email"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password"
                                                    style={{borderColor:submit && !fields.password?'red':""}}
                                                    onChange={(e)=> getValue('password',e.target.value) }                                                  
                                                className="form-control" placeholder="Password"/>
                                            </div>
                                            <a  onClick={()=>{submitBtn()}}  className="btn_1 full_width text-center">{loading?   <Loader
                                                                            type="Puff"
                                                                            color="#00BFFF"
                                                                            height={20}
                                                                            width={20}
                                                                        />:"Log in"}</a>
                                            <p>Need an account? <a data-toggle="modal" data-target="#sing_up" data-dismiss="modal"  href="#"> Sign Up</a></p>
                                            <div className="text-center">
                                                <a  data-toggle="modal"  data-target="#forgot_password" data-dismiss="modal" className="pass_forget_btn">Forget Password?</a>
                                            </div>
                                        </form>

                                                                                        
                                                <ToastContainer />

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
  }
  



  
const mapStatetoProps = ({LoginUser}) =>
{
      return {LoginUser}
}
  export default connect(mapStatetoProps,actions)(Dashboard)
