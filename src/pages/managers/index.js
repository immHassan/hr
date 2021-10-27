
import axios from 'axios';
import {baseUrl} from "../../Services/config.json"
import { FaRegEdit } from 'react-icons/fa';
import { AiFillDelete,AiFillEye } from 'react-icons/ai';

import {
    Link, useHistory
  } from "react-router-dom";
import {useEffect,useState} from "react"


import * as actions from '../../Store/Actions';
import { connect } from "react-redux";

import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


function Managers({DeleteById,deleteDataById,managerData,getManagers}) {



    



    const [data,setData]=useState([])
    

    useEffect(() => {
        if (managerData.success) {
            setData(managerData.data)
        } else {
            setData([])
        }

    }, [managerData])


    function getUser(){

        axios.get(`${baseUrl}/home/users`).then((res)=>{
            
        })
    
    }
    var history = useHistory();

    
                  
    
    
   const [modalShow, onChangeModalShow] = useState(false)
  const handleClose = () => onChangeModalShow(false);
  const handleShow = () => onChangeModalShow(true);


    const [deleteId, setDeleteId] = useState("")


       
    return (
        <div class="main_content_iner ">
        <div class="container-fluid p-0">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="QA_section">
                        <div class="white_box_tittle list_header">
                            <h4>Line Managers</h4>
                            <div class="box_right d-flex lms_block">
                                <div class="serach_field_2">
                                    <div class="search_inner">
                                        <form Active="#">
                                            <div class="search_field">
                                                <input type="text" placeholder="Search content here..."/>
                                            </div>
                                            <button type="submit"> <i class="ti-search"></i> </button>
                                        </form>
                                    </div>
                                </div>
                                <div class="add_button ml-10">
                                <a href="javascript:void()" data-toggle="modal" onClick={()=>{ history.push('/add/manager') }} data-target="#addcategory" class="btn_1">Add New</a>
                              </div>
                            </div>
                        </div>

                        <div class="QA_table mb_30">
                            <table class="table lms_table_active">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>



                                    
                                              
                               { data.map((item,i)=>{
                                                    return(
                                                        <tr>
                                                
                                                <th scope="row"> <a href="#" class="question_content"> {item.master_admin_id}</a></th>
                                                <td>{item.fullName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.designation}</td>
                                                <td>{item.role}</td>
                                                <td>  
                                                    <a href={`#${item.master_admin_id}`} > <FaRegEdit /> </a> 
                                                   
                                                    <a onClick={()=>{ setDeleteId(item.master_admin_id); handleShow(); }} >< AiFillDelete/> </a> 
                                                    
                                                    
                                                    <a href="#{item.candidates_id}" ><AiFillEye /> </a>   </td>
                                                </tr>
                                                )})}
                                
                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
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
          <Button variant="primary" onClick={()=> DeleteById('manager',deleteId).then(()=>{ getManagers(); handleClose();  
                toast.success("Deleted Successfully");   }) }>Yes</Button>
        </Modal.Footer>
      </Modal>

    
    </div>
    );
  }
  
const mapStatetoProps = ({ deleteDataById,managerData }) => {
    return {deleteDataById,managerData }
}
export default connect(mapStatetoProps, actions)(Managers)


