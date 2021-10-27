
import  man from "../../Assets/img/icon/man.svg";
import  cap from "../../Assets/img/icon/cap.svg";
import  wheel from "../../Assets/img/icon/wheel.svg";
import  pharma from "../../Assets/img/icon/pharma.svg";
import  staf1 from "../../Assets/img/staf/1.png";
import  staf2 from "../../Assets/img/staf/2.png";
import  staf3 from "../../Assets/img/staf/3.png";
import  staf4 from "../../Assets/img/staf/4.png";
import  staf5 from "../../Assets/img/staf/5.png";
import React from 'react';
import "react-slick/dist/react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {useEffect} from "react"
import Box from "./Box";

import * as actions from '../../Store/Actions';
import { connect } from "react-redux";
import { useMemo,useState } from "react";
import { DASHBOARD_DATA } from "../../Store/Actions/actionType";




import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

                                                                        


function Dashboard({getDashboard,DashboardData}) {
    const [loading,setLoading]=useState(true)
    useEffect( async ()=>  {        
        getDashboard().then(()=>setLoading(false))
    },[])
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };

      const avatar= {
        height: '175px',
        width: '175px',
        borderRadius: '5%',
        backgroundColor: '#cececec7',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
     }
    
    
        function getAvatarName(userName) {  
            if(userName.length >0){
                var userArr= userName?.split(' '); 
               var avatarName = userArr[0]?.slice(0,1);
                if(userArr[1]?.slice(0,1) != undefined){
                    avatarName+= userArr[1]?.slice(0,1)
                }
                
                return avatarName;
            }
            return false;
        }

        if(!loading){
            return (
                <div className="main_content_iner ">
                <div className="container-fluid p-0">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="single_element">
                                <div className="quick_activity">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="quick_activity_wrap">
                                                <Box
                                                name="Candidates"
                                                count={DashboardData.data.candidates[0].total}
                                                img={man}
                                                />
                                                
                                                <Box
                                                name="Line Managers"
                                                count={DashboardData.data.managers[0].total}
                                                img={pharma}
                                                />
            
                                                <Box
                                                name="Pending Interviews"
                                                count={DashboardData.data.pending_interviews[0].total}
                                                img={cap}
                                                />
                                       
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
               
                        <div className="col-xl-12">
                            <div className="white_box card_height_100">
                                <div className="box_header border_bottom_1px  ">
                                    <div className="main-title">
                                        <h3 className="mb_25">Recent Candidates</h3>
                                    </div>
                                </div>
                         
                                     <Slider {...settings}>
            
                                            { DashboardData.data.recent_candidates.map((item,i)=>{
                                            return(                        
                                                <div className="single_staf ">
                                                <div className="staf_thumb ">
                
                                                    
                                                    {item.image?
                                                        <img src={item.image} alt="#"/>     
                                                        :
                                                        <div className="avatar" style={avatar} > <h1 className="mb-0"> {getAvatarName(item.fullName)}</h1></div>
                                                    }
            
            
                                                </div>
                                                <h4>{(item.fullName.length >15)?item.fullName.slice(0,15)+"..":item.fullName }</h4>
                                                <p>Candidate</p>
                                                </div>            
                                            )})}
            
              
                                    </Slider> 
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                );
        }
        else{
            return <div className="text-center mt-5">
            <Loader
                type="PropagateLoader"
                color="#00BFFF"
                height={100}
                width={100}
            /></div>
        }
  }
  
  
const mapStatetoProps = ({ DashboardData}) => {
    return {DashboardData}
}
export default connect(mapStatetoProps, actions)(Dashboard)



