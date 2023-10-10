import Navbar from '../Navbar'
import Main from '../Main'
import './index.css'

const Home = () =>{

    return(
        <>
        <div className="HeadCard ">
           <img src="https://lirp.cdn-website.com/332e21fb/dms3rep/multi/opt/logo-1399411-1440w.png" className="logo" alt="img"/>
            <h1 className="webname mt-3">PROJECT HUB</h1>
            <div style={{display:'flex',width:'20%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" style={{marginTop:'15px'}}>
                    <circle cx="22" cy="22" r="22" fill="black"/>
                </svg>
                <h1 className="profileName mt-4">UDAY KIRAN</h1>
            </div>
        </div>
        </>
    )
}

export default Home