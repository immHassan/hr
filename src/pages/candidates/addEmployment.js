
 import {
  Link,useHistory
} from "react-router-dom";
 import {useEffect, useState} from "react"

export function AddEmployment({getValue,fields,submit}) {
  
 const [progress, onChangeProgress] = useState(null)
 const [formOne, onChangeformOne] = useState(false)
 const [emHisList,setEmHisList]=useState([1])
 const [EduList,setEduList]=useState([1])


  var history = useHistory();
  const submitForm = () => {
     
    onChangeProgress(50)
    onChangeformOne(true)
}

function getEmployementHistory(v,i,k){
    const arr=[...fields.employementHistory];
    arr.splice(i,1,{
        ...fields.employementHistory[i],
        [k]:v
    })
    return arr
}



function getEducation(v,i,k){
    const arr=[...fields.education];
    arr.splice(i,1,{
        ...fields.education[i],
        [k]:v
    })
    return arr
}




    return (
     
                            <div class="row">

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
                                                {emHisList.map((item,i)=>{
                                                    return(
                                                        <tr>
                                                        <td><input type="date"  
                                                         style={{borderColor: submit && !fields.employementHistory[i]?.fromDate?'red':""}}
                                                         
                                                        onChange={(e)=> getValue('employementHistory',getEmployementHistory(e.target.value,i,"fromDate")) }  className="form-control"  placeholder="22 Augast,2012"/></td>
                                                        <td><input type="date" 
                                                        style={{borderColor: submit && !fields.employementHistory[i]?.toDate?'red':""}}

                                                        onChange={(e)=> getValue('employementHistory',getEmployementHistory(e.target.value,i,"toDate")) } className="form-control" placeholder="22 Augast,2012"/></td>
                                                        <td><input type="text" 
                                                        style={{borderColor: submit && !fields.employementHistory[i]?.companyName?'red':""}}
                                                        onChange={(e)=> getValue('employementHistory',getEmployementHistory(e.target.value,i,"companyName")) } className="form-control" placeholder="Technado (PVT) LTD"/></td>
                                                     
                                                     
                                                        <td><input type="text"  
                                                        style={{borderColor: submit && !fields.employementHistory[i]?.position?'red':""}}
                                                        onChange={(e)=> getValue('employementHistory',getEmployementHistory(e.target.value,i,"position")) } className="form-control" placeholder="Technical growth"/></td>                                                    
                                                        <td><input type="text"  
                                                        style={{borderColor: submit && !fields.employementHistory[i]?.leavingReason?'red':""}}

                                                        onChange={(e)=> getValue('employementHistory',getEmployementHistory(e.target.value,i,"leavingReason")) } className="form-control" placeholder="Senior PHP developer"/></td>
                                                        <td><input type="text" 
                                                        style={{borderColor: submit && !fields.employementHistory[i]?.grossSalary?'red':""}}

                                                        onChange={(e)=> getValue('employementHistory',getEmployementHistory(e.target.value,i,"grossSalary")) } className="form-control" placeholder="50,000"/></td>
                                                        <td><input type="text"  
                                                        style={{borderColor: submit && !fields.employementHistory[i]?.benefits?'red':""}}

                                                        onChange={(e)=> getValue('employementHistory',getEmployementHistory(e.target.value,i,"benefits")) } className="form-control" placeholder="Fuel allowance"/></td>
                                                        <td> <button 
                                                        onClick={()=>{
                                                            const arr=[...emHisList];
                                                            arr.splice(i,1)
                                                            setEmHisList(arr)
                                                        }}
                                                        className="btn btn-danger"> Remove</button> </td>

                                                    </tr>
                                                    )
                                                })}


                                            </tbody>
                                              </table>
                                          </div>

                                          
                         <div class="container text-right">
                            <input  onClick={()=>setEmHisList([...emHisList,1])}type="button" value="Add"  class="btn btn-primary" />       
                        </div>


                                    </div>
                                    <div class="col-12">
                                <h2 className="mb-2"> Education </h2>

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
                                              


                                              
                                            {EduList.map((item,i)=>{
                                                    return(
                                                        <tr>
                                                
                                                    <td><input type="text"
                                                    
                                                    style={{borderColor: submit && !fields.education[i]?.levelAttained?'red':""}}
                                                    onChange={(e)=> getValue('education',getEducation(e.target.value,i,"levelAttained")) }  className="form-control"  placeholder="zz"/></td>
                                                    <td><input type="text" 
                                                        style={{borderColor: submit && !fields.education[i]?.institutionName?'red':""}}
                                                        onChange={(e)=> getValue('education',getEducation(e.target.value,i,"institutionName")) } className="form-control" placeholder="SSUET"/></td>
                                                    <td><input type="text"
                                                      style={{borderColor: submit && !fields.education[i]?.title?'red':""}}                                                      
                                                    onChange={(e)=> getValue('education',getEducation(e.target.value,i,"title")) } className="form-control" placeholder="Technado (PVT) LTD"/></td>
                                            
                                                    <td><input type="number"
                                                      style={{borderColor: submit && !fields.education[i]?.major?'red':""}}
                                                    onChange={(e)=> getValue('education',getEducation(e.target.value,i,"major")) } className="form-control" placeholder="SE"/></td>                                                    
                                                
                                                  
                                                    <td><input type="number"  
                                                      style={{borderColor: submit && !fields.education[i]?.cgpa?'red':""}}
                                                    onChange={(e)=> getValue('education',getEducation(e.target.value,i,"cgpa")) } className="form-control" placeholder="50,000"/></td>
                                                  
                                                  
                                                  <td><input type="date"  
                                                      style={{borderColor: submit && !fields.education[i]?.fromYear?'red':""}}                                                      
                                                    onChange={(e)=> getValue('education',getEducation(e.target.value,i,"fromYear")) } className="form-control" placeholder="22 Augast,2012"/></td>
                                                  

                                                    <td><input type="date" 
                                                    style={{borderColor: submit && !fields.education[i]?.toYear?'red':""}}                                                      
                                                    onChange={(e)=> getValue('education',getEducation(e.target.value,i,"toYear")) } className="form-control" placeholder="22 Augast,2012"/></td>
                                             
                                                      
                                                      
                                                        <td> <button 
                                                        onClick={()=>{
                                                            const arr=[...EduList];
                                                            arr.splice(i,1)
                                                            setEduList(arr)
                                                        }}
                                                        className="btn btn-danger"> Remove</button> </td>

                                                    </tr>
                                                    )
                                                })}


                                                </tbody>
                                              </table>
                                          </div>

                                          
                                          
                         <div class="container text-right">
                            <input  onClick={()=>setEduList([...EduList,1])}type="button" value="Add"  class="btn btn-primary" />       
                        </div>


                                    </div>
                            </div>
    );
  }
  