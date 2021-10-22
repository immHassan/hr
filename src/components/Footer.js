
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
    return (
    <>
    <div className="footer_part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer_iner text-center">

                        <ToastContainer />
                            <p>2020 © Influence - Designed by <a href="#"> <i className="ti-heart"></i> </a><a href="#"> Dashboard</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    

    </>
    );
  }
  
  export default Footer;
