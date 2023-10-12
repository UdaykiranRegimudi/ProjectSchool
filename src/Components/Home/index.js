
import './index.css'

const Home = () =>{
    const login =() =>{
        console.log("uday")
    }

    return(
        <>
        <div className="HeadCard ">
           <img src="https://lirp.cdn-website.com/332e21fb/dms3rep/multi/opt/logo-1399411-1440w.png" className="logo" alt="img"/>
            <h1 className="webname mt-3">PROJECT HUB</h1>
            <div className="nav-item dropdown ml-5 cur" style={{marginTop:'15px',marginRight:'70PX'}}>
                <img style={{height:'7vh'}} className="nav-link dropdown-toggle" data-toggle="dropdown"  src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"/>
                
                
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/signup">Sign Up</a>
                <a className="dropdown-item" href="#">College Login</a>
                <a className="dropdown-item" href="#">Student Login</a>
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Home