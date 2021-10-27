

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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Candidate() {
    const [progress, onChangeProgress] = useState(null)
    const [step,setSteps]=useState(1)
    const [submit,setSubmit]=useState(false)
    var history = useHistory();
    
    
    const [fields,setFields]=useState({
        fullName:"",
        employementHistory:[
        ],
        education:[],
    })


    console.log(fields)
    const getValue=(k,v)=>setFields({...fields,[k]:v})
    function renderForm(){
        switch(step){
            case 1:
                return <AddPersonal submit={submit} fields={fields} getValue={getValue}/>
            case 2:
                return <AddEmployment submit={submit} fields={fields} getValue={getValue}/>
        }
    }
    function next(){
        setSubmit(true)
        if(step<3){

            if(step == 1){

                if(fields.position && fields.fullName && fields.fatherName && fields.cnic && fields.email && fields.presentAddress && fields.permanentAddress && fields.cellNo && fields.resNo && fields.officeNo && fields.dateOfBirth && fields.cityOfBirth && fields.nationality && fields.religion && fields.martialStatus){

                    setSteps(step+1)
                    setSubmit(false)
                }

            }else if(step == 2){
                
                const isEmployementHistory=fields.employementHistory.reduce((ac,item)=>{
                    if(
                        !item.benefits || 
                        !item.companyName || 
                        !item.fromDate || 
                        !item.grossSalary || 
                        !item.leavingReason || 
                        !item.position || 
                        !item.toDate
                    ){
                        ac=false
                    }
                    return ac
                },true)

                const isEducation=fields.education.reduce((ac,item)=>{
                    if(
                        !item.cgpa || 
                        !item.fromYear || 
                        !item.institutionName || 
                        !item.levelAttained || 
                        !item.major || 
                        !item.title || 
                        !item.toYear
                    ){
                        ac=false
                    }
                    return ac
                },true)

                if(isEducation && isEmployementHistory){
                     postCandidate();   
                }
            }

        }
    }


    function postCandidate(){

        axios.post(`${baseUrl}/home/candidates`,fields).then((res)=>{
                toast.success("Candidate created successfully")
                history.push("/candidates");
        })

    }


    
    return (
     
        <div class="main_content_iner ">
        <div class="container-fluid p-0">
              <div class="row justify-content-center">
                  
                  <div class="col-lg-12">
                      <div class="white_box mb_30">
                          <div class="box_header ">
                              <div class="main-title">
                                  <h3 class="mb-0" >Candidate Form</h3>
                              </div>
                          </div>
                          <form>
                             {
                               renderForm()
                             } 
                          
                         </form>
                         {
                             step==2?(
                                 
                         <div class="container text-left">
                         <input 
                         onClick={()=>setSteps(step-1)}
                         type="button" value="Back"  class="btn btn-primary" />       
                     </div>
                             ):null
                         }





                         <div class="container text-right">
                            <input 
                            onClick={next}
                            type="button" value={step == 2?"Submit":"Next"}  class="btn btn-primary" />       
                        </div>
                       
                      </div>
                  </div>
                  
  
  
  
          </div>
      </div>
    </div>  
    );
  }
  
  export default Candidate;