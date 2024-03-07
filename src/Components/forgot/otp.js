import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import forgotimg from "../../images/login.jpg"
import { apiUrl } from "../../config";
import Cookies from 'js-cookie';
import ForgotTemplate from "./forgotTemplate";

const Otp = ({page}) => {
    const [otp , setOtp] = useState()
    const [msg , setMsg] = useState()
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        
    }


   
    return (
      <ForgotTemplate msg ={msg} handleSubmit ={handleSubmit}>
         <div className="form-outline mb-4">
            <label className="form-label">OTP</label>
            <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value={otp}
                onChange={(e)=>setOtp(e.target.value)} placeholder="Enter your OTP" required
            />                              
          </div>
      </ForgotTemplate>
    );
};

export default Otp;