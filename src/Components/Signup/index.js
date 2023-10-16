import { useState,useEffect } from "react"


const Signup = () =>{
   

    const [data,setData] = useState({username:'',gmail:'',collegeId:'',collegeRollnum:'',password:''})


    const Username = (e) =>{
        data.username = e.target.value
        setData("")

    }
    const Email = (e) =>{
        data.gmail = e.target.value

    }
    const CollegeId = (e) =>{
        data.collegeId = e.target.value

    }
    const CollegeRoll = (e) =>{
        data.collegeRollnum = e.target.value

    }
    const Password = (e) =>{
        data.password = e.target.value

    }
    const handleSubmit = (event) =>{    
        event.preventDefault()
        let jsonData = JSON.stringify(data)
        console.log(jsonData)
    }
    

    return(
            <section className="" style={{backgroundColor:'eee',}}>
            <div className="container h-100 w-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{borderRadius:'25px'}}>
                    <div className="card-body p-md-5">
                        <div style={{display:'flex',justifyContent:'',}}>
                            <button className="btn btn--outline-primary" style={{marginLeft:'30px',width:'10vw'}}>Login</button>
                            <button className="btn btn--outline" style={{width:"10vw",marginLeft:'30px'}}>Signup</button>
                        </div>
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mr-0" >

                            <p className=   "text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="form3Example1c">User Name</label>
                                <input type="text" id="form3Example1c" className="form-control" style={{width:'23vw'}} onChange={Username} />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example3c">User Email</label>
                                <input type="email" id="form3Example3c" className="form-control" style={{width:'23vw'}} onChange={Email} />
                                
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example4cd">College Id</label>
                                <input type="text" id="form3Example4cd" className="form-control" style={{width:'23vw'}} onChange={CollegeId} />
                                
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example4cd">College Roll Num</label>
                                <input type="text" id="form3Example4cd" className="form-control" style={{width:'23vw'}} onChange={CollegeRoll}/>
                                
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                
                                <div className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example4c">Password</label>
                                <input type="password" id="form3Example4c" className="form-control" style={{width:'23vw'}} onChange={Password} />
                               
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <div className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                <input type="password" id="form3Example4cd" className="form-control" style={{width:'23vw'}} />
                               
                                </div>
                            </div>


                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" className="btn btn-primary btn-lg" >Register</button>
                            </div>

                            </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" >

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              alt="Sample image" style={{width:'32vw',margin:'0px'}}/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}

export default Signup