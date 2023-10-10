import './index.css'

const About = () =>{
    return(
        <div>
        <div className='aboutUscard'>
            <img src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg" alt="img" className="aboutUs mt-5"/>
            <div>
                <h3 className='mt-5'>About Us</h3>
                
                <p>Welcome to Project Hub - Your Gateway to Innovation and Collaboration!<br/><br/>

                    At Project Hub, we believe in the power of ideas and collaboration to drive positive change. <br/>Our platform was born out of a shared passion for innovation and a deep commitment to<br/> fostering a community of creative minds. We are more than just a website;<br/> we are a hub where dreams become reality.</p>
                <h5>Our Mission</h5>
                <p>Our mission is simple yet profound: to connect and empower individuals and teams from all<br/> corners of the globe. Whether you're a seasoned professional, a budding entrepreneur, or a student<br/> with a vision, Project Hub is your go-to destination for bringing your ideas to life. We are here to <br/> facilitate collaboration, provide resources, and inspire innovation.</p>
                
            </div>
        </div>
            <h5 className="offers mt-4">What We Offer</h5>
            <div className="list mt-4">
                <h6>Project Collaboration</h6>
                <h6>Resource Cente</h6>
                <h6>Community</h6>
                <h6>Support and Feedback</h6>
            </div>
        </div>
    )
}

export default About