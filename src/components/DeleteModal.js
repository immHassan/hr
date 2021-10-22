
import { useState,React } from 'react'
export default function DeleteModal({ modalShowProp 
}) {

    const [display, setDisplay] = useState('block');

    return (
        <div className="custom-modal-class modal "  style={{display:display}} id="myModal" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={()=>{ setDisplay = 'none' }}>Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

