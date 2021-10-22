

import {
    useParams
  } from "react-router-dom";
import {useEffect, useState, useMemo} from "react"

import {hospital} from "../../config/axios"
import {AddEmployment} from "../candidates/addEmployment"
import {AddPersonal} from "../candidates/addPersonal"
import maxLength30 from "../../utils/maxLength30";
import axios from "axios";
import {baseUrl} from "../../Services/config.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import * as actions from './../../Store/Actions';
import {connect} from "react-redux";





function Candidate({candidateDataById}) {

    const params = useParams();
    // useMemo(() => {
    //     getCandidateById(params.id);
    // },[])
    
    const [fields,setFields]=useState({
        fullName:"",
        employementHistory:[
        ],
        education:[],
    })


    function getEducation(v,i,k){
        const arr=[...fields.education];
        arr.splice(i,1,{
            ...fields.education[i],
            [k]:v
        })
        return arr
    }
    
  
        useEffect(() => {
            if(candidateDataById.data){
                setFields(candidateDataById.data);
            }
        }, [candidateDataById])



    

    return (
     
        <div class="main_content_iner ">
        <div class="container-fluid p-0">
              <div class="row justify-content-center">
                  
                  <div class="col-lg-12">
                      <div class="white_box mb_30">
                          <div class="box_header container text-center ">
                              <div class="main-title">
                                  <h3 class="mb-0" >Candidate Data</h3>
                              </div>
                          </div>
                            <form>
                                <div class="row">
                                    
                                       <div class="col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Position Applied For</label>
                                                <input disabled  value={fields.position}
                                                type="text" class="form-control" id="exampleFormControlInput1" 
                                                placeholder="i.e Graphic designer"
                                                />
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Full Name (as per cnic)</label>
                                                <input disabled value={fields.fullName}
                                                type="text" class="form-control" 
                                                id="exampleFormControlInput1"
                                                placeholder="i.e Altaf Korejo"/>
                                    
                                            </div>
                                        </div>
                                        
                                    <div class="col-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Father Name</label>
                                        <input disabled type="text" value={fields.fatherName}    
                                        class="form-control" id="exampleFormControlInput1" placeholder="i.e Altaf Korejo"/>
                                    
                                 
                                    </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">CNIC</label>
                                            <input disabled type="text" class="form-control" value={fields.cnic}   
                                            id="exampleFormControlInput1" placeholder="i.e 4210180666031"/>
                                        
                                        
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Email Address</label>
                                            <input disabled type="email" class="form-control"
                                        
                                            value={fields.email}    id="exampleFormControlInput1" placeholder="name@example.com"/>
                                        
                                          
                                        </div> 
                                    </div>


                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Present address </label>
                                                <textarea  rows="4" cols="50" placeholder=""
                                                 class="form-control">
                                                {fields.presentAddress}   
                                                </textarea>
                                                
                                            
                                        </div>
                                    </div>
                                    
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Permanent address </label>
                                            <textarea   rows="4" cols="50" placeholder="" 
                                             class="form-control">
                                            {fields.permanentAddress}
                                            </textarea>
                                            
                                          
                                         </div>
                                    </div>



                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Cell#</label>
                                            <input disabled type="number" value={fields.cellNo}  class="form-control" 
                                            
                                            id="exampleFormControlInput1" placeholder="i.e 03485956432"/>

                                        
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Res#</label>
                                            <input disabled type="number"  value={fields.resNo}  class="form-control"
                                            
                                        id="exampleFormControlInput1" placeholder="i.e 02185956432"/>
                                        
                                        
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Office#</label>
                                            <input disabled type="number" class="form-control" 
                                            
                                            value={fields.officeNo} id="exampleFormControlInput1"  placeholder="i.e 02185956432"/>
                                        
                                        
                                        </div>
                                    </div>




                                    <div class="col-3">
                                        <div class="form-group">
                                                <label for="#">Date of Birth</label>
                                                <input disabled  class="form-control" type="date" value={fields.dateOfBirth}  
                                                
                                                id="birthday" name="birthday"/>
                                        
                                            
                                        </div>
                                    </div>


                                    <div class="col-3">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">City of birth</label>
                                            <input disabled type="text" class="form-control" value={fields.cityOfBirth}  
                                            
                                        

                                            id="exampleFormControlInput1"   placeholder="i.e Karachi"/>
                                        
                                        </div>
                                    </div>


                                    <div class="col-3">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Nationality</label>
                                            <input disabled type="text" class="form-control" value={fields.nationality}  
                                            id="exampleFormControlInput1"   placeholder="i.e Pakistani"/>
                                        
                                        
                                        </div>
                                    </div>

                                    <div class="col-3">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Religion</label>
                                            <input disabled type="text" class="form-control" value={fields.religion} 

                                            id="exampleFormControlInput1"   placeholder="i.e Islam"/>
                                        
                                        
                                        </div>
                                    </div>
                                    

                                    
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Martial Status</label>
                                            <select class="form-control"  value={fields.martialStatus}  
                                            
                                            

                                        id="exampleFormControlSelect1">
                                            <option>Single</option>
                                            <option>Married</option>
                                            <option>Divorced</option>
                                            <option>Widowed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Number of Siblings</label>
                                            <input disabled type="text" class="form-control"  value={fields.siblings}  
                                            id="exampleFormControlInput1" placeholder="6"/>
                                        </div>
                                        
                                  
                                    </div>
                                    

                                    <div class="col-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Number of Childrens</label>
                                            <input disabled type="text" class="form-control" value={fields.childrens} 
                                            
                                            
                                            id="exampleFormControlInput1" placeholder="8"/>
                                        </div>
                                        
                                    </div>


                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Family Information</label>
                                            <div class="form-group">
                                        
                                                <input disabled type="checkbox" id="havingfather" name="havingfather" value="1"/>
                                                <label  for="vehicle1"> Father</label><br/>
                                            
                                            
                                                <input disabled type="checkbox" id="havingMother" name="havingMother" value="1"/>
                                                <label for="vehicle2"> Mother</label><br/>

                                                <input disabled type="checkbox" id="havingSpouse"  name="havingSpouse" value="1"/>
                                                <label for="havingSpouse"> Spouse</label>

                                            </div>
                                        
                                        </div>
                                    </div>




                            <div class="col-12">
                                <h2 className="mb-2"> Educational History </h2>


                                    <div class="QA_table mb_30">
                                        <table class="table lms_table_active">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Level attained</th>
                                                    <th scope="col">Name of institution</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Major</th>
                                                    <th scope="col">Division/Grade/CGPA</th>
                                                    <th scope="col">From (Year)</th>
                                                    <th scope="col">To (Year)</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            {fields.education.map((item,i)=>{
                                                    return(
                                                        <tr>
                                                
                                                    <td><input type="text" disabled value={fields.education[i]?.levelAttained?fields.education[i].levelAttained:''}
                                                  className="form-control"  placeholder="zz"/></td>
                                                    <td><input type="text" disabled value={fields.education[i]?.institutionName?fields.education[i].institutionName:''}
                                                        className="form-control" placeholder="SSUET"/></td>
                                                    <td><input type="text"  disabled value={fields.education[i]?.title?fields.education[i].title:''}                                                   
                                                  className="form-control" placeholder="Technado (PVT) LTD"/></td>
                                            
                                                    <td><input type="number" disabled  value={fields.education[i]?.cgpa?fields.education[i].cgpa:''}
                                                  className="form-control" placeholder="SE"/></td>          
                                                    <td><input type="number" disabled className="form-control" placeholder="50,000"/></td>
                                                  
                                                  
                                                  <td><input type="date"  disabled value={fields.education[i]?.fromYear?fields.education[i].fromYear:''}                                                 
                                                     className="form-control" placeholder="22 Augast,2012"/></td>
                                                  

                                                    <td><input type="date"   disabled  value={fields.education[i]?.toYear?fields.education[i].toYear:''}                                            
                                                   className="form-control" placeholder="22 Augast,2012"/></td>
                                             
                                                    </tr>
                                                    )
                                                })}


                                                </tbody>
                                              </table>
                                          </div>
                                    </div>










                                    <div class="col-12">
                                    <h2 className="mb-2"> Employment History </h2>

                                            <div class="QA_table mb_30">
                                          
                                        <table class="table lms_table_active">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date From</th>
                                                    <th scope="col">Date To</th>
                                                    <th scope="col">Company Name</th>
                                                    <th scope="col">Position</th>
                                                    <th scope="col">Reason For leaving</th>
                                                    <th scope="col">Gross Salary</th>
                                                    <th scope="col">Benefits</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {fields.employementHistory.map((item,i)=>{
                                                    return(
                                                        <tr>
                                                        <td><input type="date"                                                         
                                                            value={fields.employementHistory[i]?.fromDate?fields.employementHistory[i].fromDate:''}
                                                           className="form-control" disabled placeholder="22 Augast,2012"/></td>
                                                        <td><input type="date" 
                                                          
                                                          value={fields.employementHistory[i]?.toDate?fields.employementHistory[i].toDate:''}
                                                        className="form-control" disabled placeholder="22 Augast,2012"/></td>
                                                        <td><input type="text" 
                                                        value={fields.employementHistory[i]?.companyName?fields.employementHistory[i].companyName:''}
                                                        className="form-control" disabled placeholder="Technado (PVT) LTD"/></td>                                                     
                                                     
                                                        <td><input type="text"  
                                                            value={fields.employementHistory[i]?.position?fields.employementHistory[i].position:''}
                                                            className="form-control" disabled placeholder="Technical growth"/></td>                                                    
                                                        <td><input type="text"  
                                                        value={fields.employementHistory[i]?.leavingReason?fields.employementHistory[i].leavingReason:''}
                                                         className="form-control" disabled placeholder="Senior PHP developer"/></td>
                                                        <td><input type="text" 
                                                        value={fields.employementHistory[i]?.grossSalary?fields.employementHistory[i].grossSalary:''}
                                                        className="form-control" disabled placeholder="50,000"/></td>
                                                        <td><input type="text"  
                                                        value={fields.employementHistory[i]?.benefits?fields.employementHistory[i].benefits:''}
                                                          className="form-control" disabled placeholder="Fuel allowance"/></td>
                                                       

                                                    </tr>
                                                    )
                                                })}


                                            </tbody>
                                              </table>
                                          </div>
                                          
                                          </div>


                                </div>
                           </form>
                      </div>
                  </div>
                  
  
  
  
          </div>
      </div>
    </div>  
    );
  }
  
const mapStatetoProps = ({candidateDataById}) =>
{
      return {candidateDataById}
}
  export default connect(mapStatetoProps,actions)(Candidate)


  