import './index.css'

const Navbar = () =>{
    const ram =""
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5">
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active ml-5 navItems">
                <a className="nav-link" style={{color:'black'}} href='/'>HOME<span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active ml-5 navItems">
                <a className="nav-link" href="#" style={{color:'black'}}>PROJECT <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item ml-5 ">
                <a className="nav-link" style={{color:'black'}} href="#">PROBLEM STATEMNETS</a>
            </li>
            <li className="nav-item ml-5">
                <a className="nav-link" href="#" style={{color:'black'}}>COLLEGES</a>
            </li>
            <li className="nav-item ml-5">
                <a className="nav-link" href="#" style={{color:'black'}}>YOUR PROJECTS</a>
            </li>
            <li className="nav-item ml-5">
                <a className="nav-link" href="/about" style={{color:'black'}}>ABOUT US</a>
            </li>
            <li className="nav-item ml-5">
                <a className="nav-link" href="#" style={{color:'black'}}>CONTACT US</a>
            </li>
            <li className="nav-item dropdown ml-5">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'black'}}>
                DROPDOWN
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            </ul>
        </div>
        </nav>
    )
}
export default Navbar