import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import Home from "./Components/Home";
import Modal from "./Components/Modal";
import Forgot from "./Components/forgot/forgot";
import Otp from "./Components/forgot/otp";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


function App() {
  const loginStatus = useSelector((state)=>state.status)
  const [isModalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState();
  const [archive, setArchive] = useState(false);
  const [page , setPage] = useState()
 
  return (
    <div className="app">
      <Navbar setModalOpen={setModalOpen}  setArchive={setArchive} archive={archive} setPage ={setPage}/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={loginStatus ?<Home setStatus={setStatus} status={status} archive={archive} /> : <Navigate to ="/login"/>} />
          <Route path ="/forgot" element={loginStatus?<Navigate to ="/"/>:<Forgot/>}></Route>
          <Route path="/login" element={loginStatus?<Navigate to ="/"/>:<Login permission="User"/>} />
          <Route path="/admin" element={loginStatus?<Navigate to ="/"/>:<Login permission ="Admin"/>} />
          <Route path="/signup" element={<SignUp page={page}/>} />
          <Route path="/enterOtp" element={loginStatus?<Navigate to ="/"/>:<Otp/>}></Route>
        </Routes>
      </BrowserRouter>
      <Modal setStatus={setStatus} status={status} setModalOpen={setModalOpen} isOpen={isModalOpen}
      />
    </div>
  );
}

export default App;

