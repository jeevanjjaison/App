
import forgotimg from "../../images/login.jpg"

const ForgotTemplate = ({children , msg , handleSubmit ,loginContent}) => {
   
    return (
        <div className="container" style={{ paddingTop: 60 }}>

            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Forgot Password</p>
                            </div>
                            <p style={{ color: 'red' }}>
                                {msg}
                            </p>
                            {children}
                             
                           <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button>
                                 {loginContent}
                            </div>
                                    
                    </form>
                    </div>
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={forgotimg} className="img-fluid" style={{opacity: 0.9}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotTemplate;