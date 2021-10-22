

 import {
    Link,useHistory
  } from "react-router-dom";
import {useEffect, useState} from "react"
import checkEmail from "../../utils/checkEmail";

import {fullName} from "../../utils/checkEmail";
import maxLength30 from "../../utils/maxLength30";


export function AddPersonal({getValue,fields,submit}) {

const [progress, onChangeProgress] = useState(null)
const [formOne, onChangeformOne] = useState(false)

var history = useHistory();


const submitForm = () => {
    
    onChangeProgress(50)
    onChangeformOne(true)

}

    return (
                            
          
        <div class="row">
        <div class="col-12">
            <div class="form-group">
                <label for="exampleFormControlInput1">Position Applied For</label>
                <input  value={fields.position}
                onChange={(e)=> getValue('position',e.target.value) } 
                type="text" class="form-control" id="exampleFormControlInput1" 
                placeholder="i.e Graphic designer"
                style={{borderColor:submit && !fields.position ?'red':""}}
                />
                {submit && maxLength30(fields.position)?<p style={{color:'red'}}>invalid length </p>:null}
            </div>
        </div>

        <div class="col-6">
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
        </div>
        
     <div class="col-6">
      <div class="form-group">
        <label for="exampleFormControlInput1">Father Name</label>
        <input type="text" value={fields.fatherName} onChange={(e)=> getValue('fatherName',e.target.value) }   
     
        style={{borderColor:submit && !fields.fatherName?'red':""}}
        onChange={(e)=> getValue('fatherName',e.target.value) }  

        class="form-control" id="exampleFormControlInput1" placeholder="i.e Altaf Korejo"/>
      
        {submit && maxLength30(fields.fatherName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
     </div>

    <div class="col-6">
        <div class="form-group">
        <label for="exampleFormControlInput1">CNIC</label>
        <input type="text" class="form-control" value={fields.cnic}  onChange={(e)=> getValue('cnic',e.target.value) } 
        
        style={{borderColor:submit && !fields.cnic?'red':""}}
        onChange={(e)=> getValue('cnic',e.target.value) }  

        id="exampleFormControlInput1" placeholder="i.e 4210180666031"/>
      
        {submit && maxLength30(fields.cnic)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
    </div>

    <div class="col-6">
        <div class="form-group">
            <label for="exampleFormControlInput1">Email Address</label>
            <input type="email" class="form-control"
            
            style={{borderColor:submit && !fields.email?'red':""}}
            onChange={(e)=> getValue('email',e.target.value) }  
            
            value={fields.email}   onChange={(e)=> getValue('email',e.target.value) }   id="exampleFormControlInput1" placeholder="name@example.com"/>
        
            {submit && maxLength30(fields.email)?<p style={{color:'red'}}>Invalid length </p>:null}
        </div> 
    </div>


    <div class="col-6">
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
    </div>
      
    <div class="col-6">
      <div class="form-group">
        <label for="exampleFormControlInput1">Permanent address </label>
            <textarea   rows="4" cols="50" placeholder="" 
            
            style={{borderColor:submit && !fields.permanentAddress?'red':""}}
            onChange={(e)=> getValue('permanentAddress',e.target.value) }  

            onChange={(e)=> getValue('permanentAddress',e.target.value) }   class="form-control">
            {fields.permanentAddress}
            </textarea>
            
            {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
    </div>



    <div class="col-4">
    <div class="form-group">
        <label for="exampleFormControlInput1">Cell#</label>
        <input type="number" value={fields.cellNo}  class="form-control" 
        
        style={{borderColor:submit && !fields.cellNo?'red':""}}
        onChange={(e)=> getValue('cellNo',e.target.value) }  

        onChange={(e)=> getValue('cellNo',e.target.value) } id="exampleFormControlInput1" placeholder="i.e 03485956432"/>

        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>

      <div class="col-4">
      <div class="form-group">
        <label for="exampleFormControlInput1">Res#</label>
        <input type="number"  value={fields.resNo}  class="form-control"
        
        style={{borderColor:submit && !fields.resNo?'red':""}}
        onChange={(e)=> getValue('resNo',e.target.value) }  


        onChange={(e)=> getValue('resNo',e.target.value) } id="exampleFormControlInput1" placeholder="i.e 02185956432"/>
      
        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>

      <div class="col-4">
      <div class="form-group">
        <label for="exampleFormControlInput1">Office#</label>
        <input type="number" class="form-control" 
        
        style={{borderColor:submit && !fields.officeNo?'red':""}}
        onChange={(e)=> getValue('officeNo',e.target.value) }  


        value={fields.officeNo} id="exampleFormControlInput1"  onChange={(e)=> getValue('officeNo',e.target.value) } placeholder="i.e 02185956432"/>
      
        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>




      <div class="col-3">
      <div class="form-group">
            <label for="#">Date of Birth</label>
            <input  class="form-control" type="date" value={fields.dateOfBirth}  
            
              style={{borderColor:submit && !fields.dateOfBirth?'red':""}}
              onChange={(e)=> getValue('dateOfBirth',e.target.value) }  

            onChange={(e)=> getValue('dateOfBirth',e.target.value) } id="birthday" name="birthday"/>
      
            {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>


      <div class="col-3">
      <div class="form-group">
        <label for="exampleFormControlInput1">City of birth</label>
        <input type="text" class="form-control" value={fields.cityOfBirth}  
        
        style={{borderColor:submit && !fields.cityOfBirth?'red':""}}
        onChange={(e)=> getValue('cityOfBirth',e.target.value) }  


        id="exampleFormControlInput1" onChange={(e)=> getValue('cityOfBirth',e.target.value) }  placeholder="i.e Karachi"/>
      
        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>


      <div class="col-3">
      <div class="form-group">
        <label for="exampleFormControlInput1">Nationality</label>
        <input type="text" class="form-control" value={fields.nationality}  
        
        style={{borderColor:submit && !fields.nationality?'red':""}}
        onChange={(e)=> getValue('nationality',e.target.value) }  

        id="exampleFormControlInput1"  onChange={(e)=> getValue('nationality',e.target.value) }  placeholder="i.e Pakistani"/>
      
        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>

      <div class="col-3">
      <div class="form-group">
        <label for="exampleFormControlInput1">Religion</label>
        <input type="text" class="form-control" value={fields.religion} 
        
        style={{borderColor:submit && !fields.religion?'red':""}}
        onChange={(e)=> getValue('religion',e.target.value) }  

        id="exampleFormControlInput1"  onChange={(e)=> getValue('religion',e.target.value) }  placeholder="i.e Islam"/>
      
        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>
      

      
      <div class="col-4">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Martial Status</label>
        <select class="form-control"  value={fields.martialStatus}  
        
        
        style={{borderColor:submit && !fields.martialStatus?'red':""}}
        onChange={(e)=> getValue('martialStatus',e.target.value) }  


        onChange={(e)=> getValue('martialStatus',e.target.value) }   id="exampleFormControlSelect1">
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
        </select>
        
        {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>
      </div>

      <div class="col-4">
      <div class="form-group">
        <label for="exampleFormControlInput1">Number of Siblings</label>
        <input type="text" class="form-control"  value={fields.siblings}  
        
          style={{borderColor:submit && !fields.siblings?'red':""}}
          onChange={(e)=> getValue('siblings',e.target.value) }  
          
        onChange={(e)=> getValue('siblings',e.target.value) } id="exampleFormControlInput1" placeholder="6"/>
      </div>
      
      {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
    </div>
      

    <div class="col-4">
      <div class="form-group">
        <label for="exampleFormControlInput1">Number of Childrens</label>
        <input type="text" class="form-control" value={fields.childrens} 
        
        style={{borderColor:submit && !fields.childrens?'red':""}}
        onChange={(e)=> getValue('childrens',e.target.value) }  
        
        onChange={(e)=> getValue('childrens',e.target.value) }  id="exampleFormControlInput1" placeholder="8"/>
      </div>
      
      {submit && maxLength30(fields.fullName)?<p style={{color:'red'}}>Invalid length </p>:null}
      </div>


      <div class="col-12">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Family Information</label>
        <div class="form-group">
     
            <input type="checkbox" onChange={(e)=> getValue('havingfather',e.target.value) } id="havingfather" name="havingfather" value="1"/>
            <label  for="vehicle1"> Father</label><br/>
           
           
            <input type="checkbox" onChange={(e)=> getValue('havingMother',e.target.value) } id="havingMother" name="havingMother" value="1"/>
            <label for="vehicle2"> Mother</label><br/>

            <input type="checkbox" id="havingSpouse" onChange={(e)=> getValue('havingSpouse',e.target.value) } name="havingSpouse" value="1"/>
            <label for="havingSpouse"> Spouse</label>

        </div>
     
      </div>
      </div>

    </div>

    );
  }
  
