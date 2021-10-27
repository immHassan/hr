
import  img from "../Assets/img/icon/icon_search.svg";



import  client_img from "../Assets/img/staf/1.png";
import {useHistory} from "react-router-dom"
import * as actions from './../Store/Actions/';
import {connect} from "react-redux";
import {useEffect,useState} from "react"
import { toast } from "react-toastify";
 const avatar= {
    height: '75px',
    width: '75px',
    borderRadius: '50%',
    backgroundColor: '#cececec7',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
 }

function UpperNav({LoginUser}) {


    const [userName, setUserName] = useState("")
    const [userDesignation, setUserDesignation] = useState("")
     


    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if(userData){
            const parse = JSON.parse(userData)            
            setUserName(parse.fullName);  
            setUserDesignation(parse.role); 
        }

    }, [LoginUser])



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

    const history=useHistory()
    return (
         <div className="container-fluid no-gutters">
         <div className="row">
             <div className="col-lg-12 p-0">
                 <div className="header_iner d-flex justify-content-between align-items-center">
                     <div className="sidebar_icon d-lg-none">
                         <i className="ti-menu"></i>
                     </div>
                     <div className="serach_field-area">
                             <div className="search_inner">
                                 <form action="#">
                                     <div className="search_field">
                                         <input type="text" placeholder="Search here..." />
                                     </div>
                                     <button type="submit"> <img src={img} alt=""/> </button>
                                 </form>
                             </div>
                         </div>
                     <div className="header_right d-flex justify-content-between align-items-center">
                         <div className="header_notification_warp d-flex align-items-center">
                             <li>
                                 <a href="#"> <img src="img/icon/bell.svg" alt=""/> </a>
                             </li>
                             <li>
                                 <a href="#"> <img src="img/icon/msg.svg" alt=""/> </a>
                             </li>
                         </div>
                         <div className="profile_info">
                             {!client_img?
                                <img src={client_img} alt="#"/>     
                                :
                                <div className="avatar" style={avatar} > <h3 className="mb-0"> {getAvatarName(userName)}</h3></div>
                             }

                             <div className="profile_info_iner">
                                 <p> {userName} </p>
                                 <h5>{userDesignation} </h5>
                                 <div className="profile_info_details">
                                     <a href="#">Settings <i className="ti-settings"></i></a>
                                     <a href="#" onClick={()=>{
                                         localStorage.removeItem('userData')
                                         history.go(0)
                                     }}>Log Out <i className="ti-shift-left"></i></a>
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
  export default connect(mapStatetoProps,actions)(UpperNav)

  