
import  logo from "../Assets/img/logo.png";


import  menuicon1 from "../Assets/img/menu-icon/1.svg";
import  menuicon2 from "../Assets/img/menu-icon/2.svg";
import  menuicon3 from "../Assets/img/menu-icon/3.svg";
import  menuicon4 from "../Assets/img/menu-icon/4.svg";
import  menuicon5 from "../Assets/img/menu-icon/5.svg";
import  menuicon6 from "../Assets/img/menu-icon/6.svg";
import  menuicon7 from "../Assets/img/menu-icon/7.svg";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"




function SideNav() {


  
  const [userRole, setUserRole] = useState([""])

  useEffect(() => {
   
      const userData = localStorage.getItem('userData');
      if(userData){
          const parse = JSON.parse(userData)
          setUserRole(parse.role)
      }else{
          setUserRole("admin")
      }

  }, [])




    return (
      <nav class="sidebar">
      <div class="logo d-flex justify-content-between">
          <a href="index.html"><img src={logo} alt=""/></a>
          <div class="sidebar_close_icon d-lg-none">
              <i class="ti-close"></i>
          </div>
      </div>
      <ul id="sidebar_menu">
     
      <i class="fas fa-th"></i> 

        
          <li class="side_menu_title">
              <span>Menu</span>
            </li>

            
          <Link to="/">
          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon1} alt=""/>
              <span>Dashboard</span>
            </a>
          </li>
          </Link>


          <Link to="/candidates">
          <li class="">
          <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon6} alt=""/>
              <span>Candidates</span>
              </a>
          </li>
          </Link>



          {userRole!= "manager"? 
          <Link to="/managers">
          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon6} alt=""/>
              <span>Managers</span>
            </a>
          </li>
          </Link>:''}

          {userRole!= "manager"? 
          <Link to="/roles">
          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon7} alt=""/>
              <span>Roles</span>
            </a>
          </li>
          </Link> :''}


{/* 

          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon2} alt=""/>
              <span>Pages</span>
            </a>
          </li>

          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon3} alt=""/>
              <span>Pages</span>
            </a>
          </li>

          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon4} alt=""/>
              <span>Pages</span>
            </a>
          </li>

          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon5} alt=""/>
              <span>Pages</span>
            </a>
          </li>

          <li class="">
            <a   class="has-arrow" href="#" aria-expanded="false">
              <img src={menuicon7} alt=""/>
              <span>Pages</span>
            </a>
          </li> */}

  
  
        </ul>
      
  </nav>
    );
  }
  
  export default SideNav;