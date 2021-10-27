import { useEffect, useState } from "react"
import { FaRegEdit } from 'react-icons/fa';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import * as actions from './../../Store/Actions';
import { connect } from "react-redux";

import { Modal, Button } from 'react-bootstrap';
import {
    Link, useHistory
} from "react-router-dom";


import { hospital } from "../../config/axios"




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMemo } from 'react';


function Candidates({ getCandidates, candidateData, getCandidateById,DeleteById,deleteDataById,getManagers,managerData,UpdateById }) {
    const [modalShow, onChangeModalShow] = useState(false)    
    const [data, setData] = useState([])
    const [userRole, setUserRole] = useState([""])
    const [managers, setManagers] = useState([])
    const [deleteId, setDeleteId] = useState("")

  const handleClose = () => onChangeModalShow(false);
  const handleShow = () => onChangeModalShow(true);

    useEffect(() => {
        getCandidates();        
        getManagers();

        const userData = localStorage.getItem('userData');
        if(userData){
            const parse = JSON.parse(userData)
            setUserRole(parse.role)
        }else{
            setUserRole("admin")
        }

    }, [])


    

    useEffect(() => {
        if (candidateData.success) {
            setData(candidateData.data)
        } else {
            setData([])
        }

    }, [candidateData])

    const managerMemo = useMemo(() => {
        if (managerData.success) {
            console.log(managerData.data);
            setManagers(managerData.data)
        } else {
            setManagers([])
        }    

    }, [managerData])



  
    var history = useHistory();

    return (
        <>
        <div class="main_content_iner ">
            <div class="container-fluid p-0">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="QA_section">
                            <div class="white_box_tittle list_header">
                                <h4>Candidates</h4>
                                <div class="box_right d-flex lms_block">
                                    <div class="serach_field_2">
                                        <div class="search_inner">
                                            <form Active="#">
                                                <div class="search_field">
                                                    <input type="text" placeholder="Search content here..." />
                                                </div>
                                                <button type="submit"> <i class="ti-search"></i> </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="add_button ml-10">
                                        <a href="#" data-toggle="modal" onClick={() => { history.push('/add/candidate') }} data-target="#addcategory" class="btn_1">Add New</a>
                                    </div>
                                </div>
                            </div>

                            <div class="QA_table mb_30">
                                <table class="table lms_table_active">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Manager Name</th>
                                            <th scope="col">HR Status</th>
                                            <th scope="col">Manager Status</th>
                                            <th scope="col">CEO Status</th>
                                            <th scope="col">Action</th>                 
                                            {userRole!="manager"?<th scope="col">Assign Manager</th>:''}
                                                                                                                             
                                        </tr>
                                    </thead>
                                    <tbody>





        
                                        {data.map((item, i) => {
                                            return (
                                                <tr>

                                                    <th scope="row"> <a href="#" class="question_content"> {item.candidates_id}</a></th>
                                                    <td>{item.fullName}</td>
                                                    <td>{item.position}</td>
                                                    <td>{item.manager_name}</td>
                                                    <td>{item.hr_status}</td>
                                                    <td>{item.manager_status}</td>
                                                    <td>{item.ceo_status}</td>
                                                    <td>
                                                        <a onClick={() => {                                                            
                                                            getCandidateById(item.candidates_id).then(()=>{  history.push(`/candidate/${item.candidates_id}`); })
                                                        }} > < AiFillEye /> </a>
                                                       
                                                       
                                                       {userRole!="manager"?
                                                        <a onClick={() => {
                                                            history.push(`/candidate/edit/${item.candidates_id}`);
                                                            getCandidateById(item.candidates_id)
                                                        }}  >< FaRegEdit/>  </a> : ''}

                                                        {userRole!="manager"?
                                                        <a onClick={()=>{ setDeleteId(item.candidates_id); handleShow(); }} >< AiFillDelete/> </a>  
                                                        : ''}
                                                        </td>
                                                        
                                                            
                                                        {userRole!="manager"?
                                                    <td>
                                                         <select class="form-control" onChange={(e)=> { UpdateById("update_by_id",item.candidates_id,{'manager_id':e.target.value}).then(()=>{getCandidates();}) }}>
                                                
                                                        {managers.map((item1, i) => {

                                                              if(item1.role == "manager" ){                                                                    
                                                                    if(item.manager_id == item1.master_admin_id){
                                                                        return (
                                                                            <option  selected value={item1.master_admin_id} 
                                                                            > {item1.fullName}</option>
                                                                            )    
                                                                    }else{  
                                                                        return (
                                                                            <option  value={item1.master_admin_id} 
                                                                            > {item1.fullName}</option>
                                                                            )
                                                                    }
                                                                }
                                                        
                                                            })}


                                                        </select> 
                                                    </td>: ''}

                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
       <Modal.Header>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                Are you sure you want to delete this record
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> DeleteById('candidate',deleteId).then(()=>{ getCandidates(); handleClose();  
                toast.success("Deleted Successfully");   }) }>Yes</Button>
        </Modal.Footer>
      </Modal>
    </div>



</>

    );
}

const mapStatetoProps = ({ candidateData,deleteDataById,managerData }) => {
    return { candidateData,deleteDataById,managerData }
}
export default connect(mapStatetoProps, actions)(Candidates)
