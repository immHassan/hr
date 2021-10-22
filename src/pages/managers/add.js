

import {
    Link,useHistory
  } from "react-router-dom";
import {useEffect, useState} from "react"

import {hospital} from "../../config/axios"
import {AddEmployment} from "../candidates/addEmployment"
import {AddPersonal} from "../candidates/addPersonal"
import maxLength30 from "../../utils/maxLength30";

import axios from "axios";
import {baseUrl} from "../../Services/config.json"
function Candidate() {
    const [progress, onChangeProgress] = useState(null)
    const [submit,setSubmit]=useState(false)
    var history = useHistory();
    
    
    const [fields,setFields]=useState({
        fullName:""
    })


    console.log(fields)
    const getValue=(k,v)=>setFields({...fields,[k]:v})

    
    function next(){
        setSubmit(true)


                if(fields.fullName && fields.email && fields.password && fields.presentAddress && fields.designation && fields.role){
                    if(fields.password ==  fields.cPassword){
                        postManager();
                    }
                }
    }


    

    function postManager(){

        axios.post(`${baseUrl}/home/user`,fields).then((res)=>{
                console.log(res.data);
        })

                console.log("Manager added successfully")

    }



    return (
     
        <div class="main_content_iner ">
        <div class="container-fluid p-0">
              <div class="row justify-content-center">
                  
                  <div class="col-lg-12">
                      <div class="white_box mb_30">
                          <div class="box_header ">
                              <div class="main-title">
                                  <h3 class="mb-0" >Manager Form</h3>
                              </div>
                          </div>
                          <form>
                          

                                            
                            <div class="row">
                                <div class="col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Full Name (as per cnic)</label>
                                                <input value={fields.fullName}
                                                style={{borderColor:submit && !fields.fullName?'red':""}}
                                                onChange={(e)=> getValue('fullName',e.target.value) }  
                                                type="text" class="form-control" 
                                                id="exampleFormControlInput1"
                                                placeholder="i.e Altaf Korejo"/>
                                                {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
                                            </div>

                                        
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Email Address</label>
                                            <input type="email" class="form-control"
                                            
                                            style={{borderColor:submit && !fields.email?'red':""}}
                                            onChange={(e)=> getValue('email',e.target.value) }  
                                            
                                            value={fields.email}   onChange={(e)=> getValue('email',e.target.value) }   id="exampleFormControlInput1" placeholder="name@example.com"/>
                                        
                                            {submit && maxLength30(fields.email)?<p style={{color:'red'}}>Invalid length </p>:null}
                                        </div> 
    



                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Password</label>
                                        <input type="number" value={fields.password}  class="form-control" 
                                        
                                        style={{borderColor:submit && !fields.password?'red':""}}
                                        onChange={(e)=> getValue('password',e.target.value) }  

                                        onChange={(e)=> getValue('password',e.target.value) } id="exampleFormControlInput1" placeholder="i.e ds#%$$2sq "/>

                                        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
                                    </div>




                                    
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Confrim Password</label>
                                        <input type="number" value={fields.cPassword}  class="form-control" 
                                        
                                        style={{borderColor:submit && !fields.cPassword?'red':""}}
                                        onChange={(e)=> getValue('cPassword',e.target.value) }  

                                        onChange={(e)=> getValue('cPassword',e.target.value) } id="exampleFormControlInput1" placeholder="i.e ds#%$$2sq"/>

                                        {submit && maxLength30(fields.cPassword)?<p style={{color:'red'}}>Invalid length </p>:null}

                                        {submit && (fields.cPassword != fields.password)?<p style={{color:'red'}}>Password mismatch </p>:null}


                                    </div>



                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Present address </label>
                                            <textarea  rows="4" cols="50" placeholder=""
                                            
                                            style={{borderColor:submit && !fields.presentAddress?'red':""}}
                                            onChange={(e)=> getValue('presentAddress',e.target.value) }  
                                            
                                            onChange={(e)=> getValue('presentAddress',e.target.value) }  class="form-control">
                                            {fields.presentAddress}   
                                            </textarea>
                                            
                                            {submit && maxLength30(fields.presentAddress)?<p style={{color:'red'}}>Invalid length </p>:null}
                                    </div>
                             
                                    




                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Designation</label>
                                        <input type="number" value={fields.designation}  class="form-control" 
                                        
                                        style={{borderColor:submit && !fields.designation?'red':""}}
                                        onChange={(e)=> getValue('designation',e.target.value) }  

                                        onChange={(e)=> getValue('designation',e.target.value) } id="exampleFormControlInput1" placeholder="i.e Associate Manager"/>

                                        {submit && maxLength30(fields.designation)?<p style={{color:'red'}}>Invalid length </p>:null}
                                    </div>







                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Role</label>
                                        <select class="form-control"  value={fields.role}  
                                        
                                        
                                        style={{borderColor:submit && !fields.role?'red':""}}
                                        onChange={(e)=> getValue('role',e.target.value) }  


                                        onChange={(e)=> getValue('role',e.target.value) }   id="exampleFormControlSelect1">
                                            <option>Admin</option>
                                            <option>Manager</option>
                                            <option>HR</option>
                                        </select>
                                        
                                        {submit && maxLength30(fields.role)?<p style={{color:'red'}}>Invalid length </p>:null}
                                    </div>
                                    

                                </div>

                           </div>

                         </form>
                         <div class="container text-right">
                            <input onClick={next}  type="button" value="Submit"  class="btn btn-primary" />       
                        </div>

                      </div>
                  </div>
                  
  
  
  
          </div>
      </div>
    </div>  
    );
  }
  
  export default Candidate;