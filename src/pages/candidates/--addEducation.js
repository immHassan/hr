
import {
    Link,useHistory
  } from "react-router-dom";
import {useEffect, useState} from "react"

import {hospital} from "../../config/axios"

export function AddEducation() {

    const [progress, onChangeProgress] = useState(null)
    const [formOne, onChangeformOne] = useState(false)
    var history = useHistory();
    const submitForm = () => {
        
        onChangeProgress(50)
        onChangeformOne(true)
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
                          <div class="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}</div>
                            </div>
                            <br/>
                            <br/>
                          <form>
                        {
                            !formOne ?
                        
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Position Applied For</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="i.e Graphic designer"/>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Full Name (as per cnic)</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="i.e Altaf Korejo"/>
                                    </div>
                                </div>
                                
                             <div class="col-6">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Father Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="i.e Altaf Korejo"/>
                              </div>
                             </div>

                            <div class="col-6">
                                <div class="form-group">
                                <label for="exampleFormControlInput1">CNIC</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="i.e 4210180666031"/>
                              </div>
                            </div>

                            <div class="col-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email Address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div> 
                            </div>


                            <div class="col-6">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Present address </label>
                                    <textarea  rows="4" cols="50" placeholder=""  class="form-control">
                                    </textarea>
                              </div>
                            </div>
                              
                            <div class="col-6">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Permanent address </label>
                                    <textarea  rows="4" cols="50" placeholder=""  class="form-control">
                                    </textarea>
                              </div>
                            </div>



                            <div class="col-4">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Cell#</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="i.e 03485956432"/>
                              </div>
                              </div>

                              <div class="col-4">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Res#</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="i.e 02185956432"/>
                              </div>
                              </div>

                              <div class="col-4">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Office#</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="i.e 02185956432"/>
                              </div>
                              </div>




                              <div class="col-3">
                              <div class="form-group">
                                    <label for="#">Date of Birth</label>
                                    <input  class="form-control" type="date" id="birthday" name="birthday"/>
                              </div>
                              </div>


                              <div class="col-3">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">City of birth</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="i.e Karachi"/>
                              </div>
                              </div>


                              <div class="col-3">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Nationality</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="i.e Pakistani"/>
                              </div>
                              </div>

                              <div class="col-3">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Religion</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="i.e Islam"/>
                              </div>
                              </div>
                              

                              
                              <div class="col-4">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Martial Status</label>
                                <select class="form-control" id="exampleFormControlSelect1">
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
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="6"/>
                              </div>
                            </div>
                              

                            <div class="col-4">
                              <div class="form-group">
                                <label for="exampleFormControlInput1">Number of Childrens</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="8"/>
                              </div>
                              </div>


                              <div class="col-12">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Family Information</label>
                                <div class="form-group">
                             
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label  for="vehicle1"> Father</label><br/>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                    <label for="vehicle2"> Mother</label><br/>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> Spouse</label>

                                </div>
                             
                              </div>
                              </div>

                              

          

                       

                            </div>:<h1>Form 2</h1>

                        }
                         </form>
                         <div class="col-12 container">
                                    <div class="form-group">
                                        <input type="button" onClick={submitForm} value='next' class="btn btn-primary" />
                                    </div>
                            </div>
                      </div>
                  </div>
                  
  
  
  
          </div>
      </div>
    </div>  
    );
  }
  