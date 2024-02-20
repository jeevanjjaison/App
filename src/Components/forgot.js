import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import forgotimg from "../images/forgot.jpg"

const Forgot = ({page}) => {

    const navigate = useNavigate();
    const handleChange =() =>{

    }
   
    return (
        <div className="container" style={{ paddingTop: 60 }}>

            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Forgot Password</p>
                            </div>
                            <p>
                            </p>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="name"
                                    onChange={handleChange} placeholder="Enter your Username" required
                                />
                                <label className="form-label">Username</label>
                            </div>
                           

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg" >Submit</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a className="link-danger"  onClick={()=>navigate("/login")} style={{ cursor: 'pointer' }} >Login</a></p>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={forgotimg} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;