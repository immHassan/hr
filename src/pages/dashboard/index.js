
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

import {
    Link
  } from "react-router-dom";
import {useEffect} from "react"
import Box from "./Box";
import {hospital} from "../../config/axios"
function Dashboard() {

    useEffect(async()=>{
       const res= await hospital.get('/posts')
       console.log(res.data)
    },[])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2
      };

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
                                    count={50}
                                    img={man}
                                    />
                                    
                                    <Box
                                    name="Line Managers"
                                    count={6}
                                    img={pharma}
                                    />

                                    <Box
                                    name="Pending Interviews"
                                    count={2}
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
                            <h3 className="mb_25">New Candidates</h3>
                        </div>
                    </div>



                    
                 <Slider {...settings}>
                        <div className="single_staf ">
                            <div className="staf_thumb ">
                                <img src={staf1} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                       
                        <div className="single_staf">
                            <div className="staf_thumb">
                                <img src={staf2} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                       
                        <div className="single_staf">
                            <div className="staf_thumb">
                                <img src={staf3} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                       
                        <div className="single_staf">
                            <div className="staf_thumb">
                                <img src={staf4} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                      
                        <div className="single_staf">
                            <div className="staf_thumb">
                                <img src={staf5} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                      
                        <div className="single_staf">
                            <div className="staf_thumb">
                                <img src={staf1} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                  
                        <div className="single_staf">
                            <div className="staf_thumb">
                                <img src={staf2} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                   
                        <div className="single_staf">
                            <div className="staf_thumb">
                                <img src={staf3} alt=""/>
                            </div>
                            <h4>Dr. Sysla J Smith</h4>
                            <p>Doctor</p>
                        </div>
                    
  
       </Slider>
       
                </div>
            </div>
        </div>
    </div>
</div>
    );
  }
  
  export default Dashboard;