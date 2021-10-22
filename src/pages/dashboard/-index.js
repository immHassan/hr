
import  man from "../../Assets/img/icon/man.svg";
import  cap from "../../Assets/img/icon/cap.svg";
import  wheel from "../../Assets/img/icon/wheel.svg";
import  pharma from "../../Assets/img/icon/pharma.svg";

import  patient1 from "../../Assets/img/patient/2.png";
import  patient2 from "../../Assets/img/patient/2.png";
import  patient3 from "../../Assets/img/patient/3.png";
import  patient4 from "../../Assets/img/patient/4.png";
import  patient5 from "../../Assets/img/patient/5.png";
import  patient6 from "../../Assets/img/patient/6.png";

import  staf1 from "../../Assets/img/staf/1.png";
import  staf2 from "../../Assets/img/staf/2.png";
import  staf3 from "../../Assets/img/staf/3.png";
import  staf4 from "../../Assets/img/staf/4.png";
import  staf5 from "../../Assets/img/staf/5.png";


import {
    Link
  } from "react-router-dom";
import {useEffect, useState} from "react"
import Box from "./Box";
import {hospital} from "../../config/axios"
function Dashboard() {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(async()=>{
       const res= await hospital.get('/posts')
       setData(res.data)
       setLoading(false)
    },[])
console.log("state",data)
if(loading){
return <p>Loading ....</p>
}else{
    return (
        <div>
            {data.map(({title,body,id})=>{
                return(
                    <div key={id}>
                        <h4>{title}</h4>
                        <p>{body}</p>
                    </div>
                )
            })}
        </div>
    )
}
//     <div className="main_content_iner ">
//     <div className="container-fluid p-0">
//         <div className="row justify-content-center">
//             <div className="col-lg-12">
//                 <div className="single_element">
//                     <div className="quick_activity">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="quick_activity_wrap">
//                                     <Box
//                                     name="Doctors"
//                                     count={520}
//                                     img={man}
//                                     />
//                                     <Box
//                                     name="Nurses"
//                                     count={7510}
//                                     img={cap}
//                                     />
//                                     <Box
//                                     name="Patients"
//                                     count={520}
//                                     img={wheel}
//                                     />
//                                     <Box
//                                     name="Pharmacusts"
//                                     count={2110}
//                                     img={pharma}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-lg-12 col-xl-12">
//                 <div className="white_box mb_30 ">
//                     <div className="box_header border_bottom_1px  ">
//                         <div className="main-title">
//                             <h3 className="mb_25" >Hospital Survey</h3>
//                         </div>
//                     </div>
//                     <div className="income_servay">
//                         <div className="row">
//                             <div className="col-md-3">
//                                 <div className="count_content">
//                                     <h3>$ <span className="counter">305</span> </h3>
//                                     <p>Today's Income</p>
//                                 </div>
//                             </div>
//                             <div className="col-md-3">
//                                 <div className="count_content">
//                                     <h3>$ <span className="counter">1005</span> </h3>
//                                     <p>This Week's Income</p>
//                                 </div>
//                             </div>
//                             <div className="col-md-3">
//                                 <div className="count_content">
//                                     <h3>$ <span className="counter">5505</span> </h3>
//                                     <p>This Month's Income</p>
//                                 </div>
//                             </div>
//                             <div className="col-md-3">
//                                 <div className="count_content">
//                                     <h3>$ <span className="counter">155615</span> </h3>
//                                     <p>This Year's Income</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div id="bar_wev"></div>
//                 </div>
//             </div>
//             <div className="col-xl-7">
//                 <div className="white_box QA_section card_height_100">
//                     <div className="white_box_tittle list_header m-0 align-items-center">
//                         <div className="main-title mb-sm-15">
//                             <h3 className="m-0 nowrap">Patients</h3>
//                         </div>
//                         <div className="box_right d-flex lms_block">
//                             <div className="serach_field-area2">
//                                 <div className="search_inner">
//                                     <form Active="#">
//                                         <div className="search_field">
//                                             <input type="text" placeholder="Search here..."/>
//                                         </div>
//                                         <button type="submit"> <i className="ti-search"></i> </button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="QA_table ">
//                         <table className="table lms_table_active2">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">Patients Name</th>
//                                     <th scope="col">department</th>
//                                     <th scope="col">Appointment Date</th>
//                                     <th scope="col">Serial Number</th>
//                                     <th scope="col">Amount</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <th scope="row">
//                                         <div className="patient_thumb d-flex align-items-center">
//                                             <div className="student_list_img mr_20">
//                                                 <img src={patient1} alt="" srcset=""/>
//                                             </div>
//                                             <p>Jhon Kural</p>
//                                         </div>
//                                     </th>
//                                     <td>Monte Carlo</td>
//                                     <td>11/03/2020</td>
//                                     <td>MDC65454</td>
//                                     <td>
//                                         <div className="amoutn_action d-flex align-items-center">
//                                             $29,192
//                                             <div className="dropdown ml-4">
//                                                 <a className=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                     <i className="fas fa-ellipsis-v"></i>
//                                                 </a>
                                              
//                                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
//                                                   <a className="dropdown-item" href="#">View</a>
//                                                   <a className="dropdown-item" href="#">Edit</a>
//                                                   <a className="dropdown-item" href="#">Delete</a>
//                                                 </div>
//                                               </div>
//                                         </div> </td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">
//                                         <div className="patient_thumb d-flex align-items-center">
//                                             <div className="student_list_img mr_20">
//                                                 <img src={patient2} alt="" srcset=""/>
//                                             </div>
//                                             <p>Jhon Kural</p>
//                                         </div>
//                                     </th>
//                                     <td>Monte Carlo</td>
//                                     <td>11/03/2020</td>
//                                     <td>MDC65454</td>
//                                     <td>
//                                         <div className="amoutn_action d-flex align-items-center">
//                                             $29,192
//                                             <div className="dropdown ml-4">
//                                                 <a className=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                     <i className="fas fa-ellipsis-v"></i>
//                                                 </a>
                                              
//                                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
//                                                   <a className="dropdown-item" href="#">View</a>
//                                                   <a className="dropdown-item" href="#">Edit</a>
//                                                   <a className="dropdown-item" href="#">Delete</a>
//                                                 </div>
//                                               </div>
//                                         </div> </td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">
//                                         <div className="patient_thumb d-flex align-items-center">
//                                             <div className="student_list_img mr_20">
//                                                 <img src={patient3} alt="" srcset=""/>
//                                             </div>
//                                             <p>Jhon Kural</p>
//                                         </div>
//                                     </th>
//                                     <td>Monte Carlo</td>
//                                     <td>11/03/2020</td>
//                                     <td>MDC65454</td>
//                                     <td>
//                                         <div className="amoutn_action d-flex align-items-center">
//                                             $29,192
//                                             <div className="dropdown ml-4">
//                                                 <a className=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                     <i className="fas fa-ellipsis-v"></i>
//                                                 </a>
                                              
//                                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
//                                                   <a className="dropdown-item" href="#">View</a>
//                                                   <a className="dropdown-item" href="#">Edit</a>
//                                                   <a className="dropdown-item" href="#">Delete</a>
//                                                 </div>
//                                               </div>
//                                         </div> </td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">
//                                         <div className="patient_thumb d-flex align-items-center">
//                                             <div className="student_list_img mr_20">
//                                                 <img src={patient4} alt="" srcset=""/>
//                                             </div>
//                                             <p>Jhon Kural</p>
//                                         </div>
//                                     </th>
//                                     <td>Monte Carlo</td>
//                                     <td>11/03/2020</td>
//                                     <td>MDC65454</td>
//                                     <td>
//                                         <div className="amoutn_action d-flex align-items-center">
//                                             $29,192
//                                             <div className="dropdown ml-4">
//                                                 <a className=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                     <i className="fas fa-ellipsis-v"></i>
//                                                 </a>
                                              
//                                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
//                                                   <a className="dropdown-item" href="#">View</a>
//                                                   <a className="dropdown-item" href="#">Edit</a>
//                                                   <a className="dropdown-item" href="#">Delete</a>
//                                                 </div>
//                                               </div>
//                                         </div> </td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">
//                                         <div className="patient_thumb d-flex align-items-center">
//                                             <div className="student_list_img mr_20">
//                                                 <img src={patient5} alt="" srcset=""/>
//                                             </div>
//                                             <p>Jhon Kural</p>
//                                         </div>
//                                     </th>
//                                     <td>Monte Carlo</td>
//                                     <td>11/03/2020</td>
//                                     <td>MDC65454</td>
//                                     <td>
//                                         <div className="amoutn_action d-flex align-items-center">
//                                             $29,192
//                                             <div className="dropdown ml-4">
//                                                 <a className=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                     <i className="fas fa-ellipsis-v"></i>
//                                                 </a>
                                              
//                                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
//                                                   <a className="dropdown-item" href="#">View</a>
//                                                   <a className="dropdown-item" href="#">Edit</a>
//                                                   <a className="dropdown-item" href="#">Delete</a>
//                                                 </div>
//                                               </div>
//                                         </div> </td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">
//                                         <div className="patient_thumb d-flex align-items-center">
//                                             <div className="student_list_img mr_20">
//                                                 <img src={patient6} alt="" srcset=""/>
//                                             </div>
//                                             <p>Jhon Kural</p>
//                                         </div>
//                                     </th>
//                                     <td>Monte Carlo</td>
//                                     <td>11/03/2020</td>
//                                     <td>MDC65454</td>
//                                     <td>
//                                         <div className="amoutn_action d-flex align-items-center">
//                                             $29,192
//                                             <div className="dropdown ml-4">
//                                                 <a className=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                     <i className="fas fa-ellipsis-v"></i>
//                                                 </a>
                                              
//                                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
//                                                   <a className="dropdown-item" href="#">View</a>
//                                                   <a className="dropdown-item" href="#">Edit</a>
//                                                   <a className="dropdown-item" href="#">Delete</a>
//                                                 </div>
//                                               </div>
//                                         </div> </td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">
//                                         <div className="patient_thumb d-flex align-items-center">
//                                             <div className="student_list_img mr_20">
//                                                 <img src={patient6} alt="" srcset=""/>
//                                             </div>
//                                             <p>Jhon Kural</p>
//                                         </div>
//                                     </th>
//                                     <td>Monte Carlo</td>
//                                     <td>11/03/2020</td>
//                                     <td>MDC65454</td>
//                                     <td>
//                                         <div className="amoutn_action d-flex align-items-center">
//                                             $29,192
//                                             <div className="dropdown ml-4">
//                                                 <a className=" dropdown-toggle hide_pils" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                                     <i className="fas fa-ellipsis-v"></i>
//                                                 </a>
                                              
//                                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
//                                                   <a className="dropdown-item" href="#">View</a>
//                                                   <a className="dropdown-item" href="#">Edit</a>
//                                                   <a className="dropdown-item" href="#">Delete</a>
//                                                 </div>
//                                               </div>
//                                         </div> </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-xl-5 ">
//                 <div className="white_box card_height_50 mb_30">
//                     <div className="box_header border_bottom_1px  ">
//                         <div className="main-title">
//                             <h3 className="mb_25">Total Recover Report</h3>
//                         </div>
//                     </div>
//                     <div id="chart-7"></div>
//                     <div className="row text-center mt-3">
//                         <div className="col-sm-6">
//                             <h6 className="heading_6 d-block">Last Month</h6>
//                             <p className="m-0">358</p>
//                         </div>
//                         <div className="col-sm-6">
//                             <h6 className="heading_6 d-block">Current Month</h6>
//                             <p className="m-0">194</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="white_box card_height_50 mb_30">
//                     <div className="box_header border_bottom_1px  ">
//                         <div className="main-title">
//                             <h3 className="mb_25">Total Death Report</h3>
//                         </div>
//                     </div>
//                     <div id="chart-8"></div>
//                     <div className="row text-center mt-3">
//                         <div className="col-sm-6">
//                             <h6 className="heading_6 d-block">Last Month</h6>
//                             <p className="m-0">358</p>
//                         </div>
//                         <div className="col-sm-6">
//                             <h6 className="heading_6 d-block">Current Month</h6>
//                             <p className="m-0">194</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-xl-12">
//                 <div className="white_box card_height_100">
//                     <div className="box_header border_bottom_1px  ">
//                         <div className="main-title">
//                             <h3 className="mb_25">Hospital Staff</h3>
//                         </div>
//                     </div>
//                     <div className="staf_list_wrapper sraf_active owl-carousel">
                     
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf1} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
                       
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf2} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
                       
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf3} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
                       
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf4} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
                      
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf5} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
                      
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf1} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
                  
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf2} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
                   
//                         <div className="single_staf">
//                             <div className="staf_thumb">
//                                 <img src={staf3} alt=""/>
//                             </div>
//                             <h4>Dr. Sysla J Smith</h4>
//                             <p>Doctor</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-xl-6">
//                 <div className="white_box card_height_100">
//                     <div className="box_header border_bottom_1px  ">
//                         <div className="main-title">
//                             <h3 className="mb_25">Recent Activity</h3>
//                         </div>
//                     </div>
//                     <div className="Activity_timeline">
//                         <ul>
//                             <li>
//                                 <div className="activity_bell"></div>
//                                 <div className="activity_wrap">
//                                     <h6>5 min ago</h6>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
//                                     </p>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className="activity_bell"></div>
//                                 <div className="activity_wrap">
//                                     <h6>5 min ago</h6>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
//                                     </p>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className="activity_bell"></div>
//                                 <div className="activity_wrap">
//                                     <h6>5 min ago</h6>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
//                                     </p>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className="activity_bell"></div>
//                                 <div className="activity_wrap">
//                                     <h6>5 min ago</h6>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
//                                     </p>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-xl-6">
//                 <div className="white_box mb_30">
//                     <div className="box_header border_bottom_1px  ">
//                         <div className="main-title">
//                             <h3 className="mb_25">Recent Activity</h3>
//                         </div>
//                     </div>
//                     <div className="activity_progressbar">
//                         <div className="single_progressbar">
//                             <h6>USA</h6>
//                             <div id="bar1" className="barfiller">
//                                 <div className="tipWrap">
//                                     <span className="tip"></span>
//                                 </div>
//                                 <span className="fill" data-percentage="95"></span>
//                             </div>
//                         </div>
//                         <div className="single_progressbar">
//                             <h6>AFRICA</h6>
//                             <div id="bar2" className="barfiller">
//                                 <div className="tipWrap">
//                                     <span className="tip"></span>
//                                 </div>
//                                 <span className="fill" data-percentage="75"></span>
//                             </div>
//                         </div>
//                         <div className="single_progressbar">
//                             <h6>UK</h6>
//                             <div id="bar3" className="barfiller">
//                                 <div className="tipWrap">
//                                     <span className="tip"></span>
//                                 </div>
//                                 <span className="fill" data-percentage="55"></span>
//                             </div>
//                         </div>
//                         <div className="single_progressbar">
//                             <h6>CANADA</h6>
//                             <div id="bar4" className="barfiller">
//                                 <div className="tipWrap">
//                                     <span className="tip"></span>
//                                 </div>
//                                 <span className="fill" data-percentage="25"></span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
    // );
  }
  
  export default Dashboard;