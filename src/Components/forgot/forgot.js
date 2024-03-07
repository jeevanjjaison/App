import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import forgotimg from "../../images/login.jpg"
import { apiUrl } from "../../config";
import Cookies from 'js-cookie';
import ForgotTemplate from "./forgotTemplate";

const Forgot = ({page}) => {
    const [email , setEmail] = useState()
    const [msg , setMsg] = useState()
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        if(email){
        try{
            const response = await Axios.post(`${apiUrl}/ticket/forgot-password`, {
                email: email,
            });
            if(response){
                Cookies.set('resetToken', response.data.token, { expires: 5 / (24 * 60) });
                setMsg(response.data.message)
                setTimeout(() => {
                    navigate('/enterOtp')
                }, 2000);
            }            
        }
        catch(error){
            setMsg(error.response.data.error)
            console.log(error.response.data.error)
        }finally{
            setTimeout(() => {
                setMsg()
            }, 2000);
        }
    }}
 const loginContent =  <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a className="link-danger"  onClick={()=>navigate("/login")} style={{ cursor: 'pointer' }} >Login</a></p>

   
    return (
       <ForgotTemplate msg ={msg} handleSubmit ={handleSubmit} loginContent ={loginContent}>
          <div className="form-outline mb-4">
            <label className="form-label">Email</label>
            <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" required
            />                              
          </div>
        </ForgotTemplate>
    );
};

export default Forgot;