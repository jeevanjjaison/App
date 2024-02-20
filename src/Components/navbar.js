import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus} from "../Store/Action";

const Navbar = ({ setModalOpen, setArchive, archive }) => {
    const dispatch = useDispatch();
    const loginStatus = useSelector((state) => state.status)
    const handleCLick =() =>{
        dispatch(setStatus(false))        
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#2F4600D5' }}>
            <div className="container">
                <a className="navbar-brand" href="#">Ticket App</a>
                {(loginStatus) ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {(archive) ? <a className="nav-link active" style={{ cursor: 'pointer' }} aria-current="page" onClick={(e) => setArchive(false)} >Home</a> :
                                <a className="nav-link active" aria-current="page" style={{ cursor: 'pointer' }} onClick={(e) => setArchive(true)} ></a>}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" style={{ cursor: 'pointer' }} onClick={(e) => setModalOpen(true)} ></a>
                        </li>
                    </ul> : <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>}
     
                     <div className="d-flex">
                        {(loginStatus) &&<a className="btn btn-outline-primary"  onClick={()=>(handleCLick("/login"))}>Sign Out</a>}
                
                    
                </div>
            </div>
        </nav>

    );
};

export default Navbar;