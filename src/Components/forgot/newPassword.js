import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import forgotimg from "../../images/login.jpg"
import { apiUrl } from "../../config";
import Cookies from 'js-cookie';
import ForgotTemplate from "./forgotTemplate";

const NewPassword = ({page}) => {
    const [password , setPassword] = useState()
    const [msg , setMsg] = useState()
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
      
    }
   
    return (
       <ForgotTemplate msg ={msg} handleSubmit ={handleSubmit} loginContent ={loginContent}>
          <div className="form-outline mb-4">
            <label className="form-label">Enter New Password</label>
            <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your new Password" required
            />                              
          </div>
        </ForgotTemplate>
    );
};

export default NewPassword;