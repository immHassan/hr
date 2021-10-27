

import {
    useParams
  } from "react-router-dom";
import {useEffect, useState, useMemo} from "react"
import 'react-toastify/dist/ReactToastify.css';
import * as actions from './../../Store/Actions';
import {connect} from "react-redux";




function Candidate({getCandidateById,candidateDataById,updateRemarks}) {

    const params = useParams();
    const ust = useMemo(()=>{
        getCandidateById(params.id)

        
        
    },[])
    const [userRole, setUserRole] = useState([""])

    const [remarks, setRemarks] = useState("");
    const [status, setStatus] = useState("");


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
    

    console.log("fields.hr_status",fields.hr_status);

        useEffect(() => {

            // getCandidateById(params.id)

            if(candidateDataById?.success){
                setFields(candidateDataById.data);
            }
            
            const userData = localStorage.getItem('userData');
            if(userData){
                const parse = JSON.parse(userData)
                
                    if(parse.role == "hr" ){
                        setRemarks(candidateDataById?.data?.hr_remarks);
                        setStatus(candidateDataById?.data?.hr_status);
                    }else if(parse.role == "admin" ){
                        setRemarks(candidateDataById?.data?.admin_remarks);
                        setStatus(candidateDataById?.data?.admin_status);
                    }else if(parse.role == "manager"){
                        setRemarks(candidateDataById?.data?.manager_remarks);
                        setStatus(candidateDataById?.data?.manager_status);
                       }

                setUserRole(parse.role)
            }else{
                setUserRole("admin")
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


                                
                                    <div class="col-12">
                                                <hr/>
                                     <h2 className="mb-5 "> Management Remarks </h2>

                                     <h3 className="mb-2"> HR Remarks </h3>
                                     <div class="col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Remarks for candidate</label>
                                                <textarea  disabled={userRole=="hr"?false :true }  rows="4" cols="50" onChange={ (e)=>{ setRemarks(e.target.value) }} 
                                                 placeholder=""   defaultValue={fields.hr_remarks} 
                                             class="form-control">
                                            </textarea>
                                            
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Candidate Status</label>
                                               
                                                    <select disabled={userRole=="hr"?false :true } class="form-control"  onChange={ (e)=>{ 
                                                        setStatus(e.target.value);
                                                        setFields({...fields,hr_status:e.target.value});
                                                         }} value={ fields.hr_status} >                                                  
                                                            <option value="schedule">Schedule</option>
                                                            <option value="pending">Pending</option>
                                                            <option value="declined" >Declined</option>
                                                            <option value="approved" >Approved</option>
                                                    </select>
                                            </div>
                                            
                                            {userRole=="hr"?
                                            <div class="add_button ml-10 text-right">
                                                <a  data-toggle="modal" onClick={() => {   updateRemarks(fields.candidates_id,status,remarks).then(()=>{ getCandidateById(fields.candidates_id) }) } } class="btn_1">Update</a>
                                            </div>
                                            :''}

                                        </div>
                                    </div>



                                    <div class="col-12">
                                     <h3 className="mb-2"> Manager Remarks </h3>
                                     <div class="col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Remarks for candidate</label>
                                                <textarea  disabled={userRole=="manager"?false :true }   rows="4" cols="50" placeholder="" 
                                                
                                                defaultValue={fields.manager_remarks} 
                                                onChange={ (e)=>{ setRemarks(e.target.value) }} 
                                                 class="form-control">
                                            </textarea>
                                            
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Candidate Status</label>
                                                        
                                                    <select disabled={userRole=="manager"?false :true }  class="form-control"  onChange={ (e)=>{ 
                                                        setStatus(e.target.value);
                                                        setFields({...fields,manager_status:e.target.value}) }} value={fields.manager_status} >
                                                            <option value="pending">Pending</option>
                                                            <option value="declined" >Declined</option>
                                                            <option value="approved" >Approved</option>
                                                    </select>
                                            </div>

                                            
                                            {userRole=="manager"?

                                            <div class="add_button ml-10 text-right">
                                                <a  onClick={() => {   updateRemarks(fields.candidates_id,status,remarks).then(()=>{ getCandidateById(fields.candidates_id) }) } }   class="btn_1">Update</a>
                                            </div>
                                            :''}
                                        </div>
                                    </div>




                                    <div class="col-12">
                                     <h3 className="mb-2"> CEO Remarks </h3>
                                     <div class="col-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Remarks for candidate</label>
                                                <textarea disabled={userRole=="admin"?false :true }  onKeyUp={ (e)=>{ setRemarks(e.target.value); }}  defaultValue={fields.ceo_remarks}  rows="4" cols="50" placeholder="" 
                                             class="form-control">
                                            </textarea>
                                            
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Candidate Status</label>
                                                    

                                                 

                                                        <select  disabled={userRole=="admin"?false :true } onChange={ (e)=>{ setStatus(e.target.value);  setFields({...fields,ceo_status:e.target.value}) }} value={fields.ceo_status}   class="form-control">
                                                            <option value="pending">Pending</option>
                                                            <option value="declined" >Declined</option>
                                                            <option value="approved" >Approved</option>
                                                        </select>
                                            </div>
                                            {userRole=="admin"?
                                            <div class="add_button ml-10 text-right">
                                                <a onClick={() => {   updateRemarks(fields.candidates_id,status,remarks).then(()=>{ getCandidateById(fields.candidates_id) }) } }  class="btn_1">Update</a>
                                            </div>
                                            :''}

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


  