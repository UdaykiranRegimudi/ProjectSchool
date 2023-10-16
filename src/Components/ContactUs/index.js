import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageLayout } from "../page-layout";
import "./index.css";

const ContactUs = () => {
  return (
    <PageLayout>
      <div className="box m-5">
        <div className="contactBackground shadow p-3 mb-5 bg-white rounded">
          <div>
            <h1>Contact Us</h1>
            <h6 className="mt-4">
              Any questions or remarks? just write us a message!
            </h6>
          </div>
        </div>
        <div className="m-5 form">
          <div className="box1 ">
            <div style={{ width: "50%" }}>
              <h2 className="mt-5 ml-5">Contact Information</h2>
              <p className=" ml-5">Say something to start a live chat!</p>
              <div className="phoneCard ">
                <img
                  className="phone"
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/344/685/small/telephone-transparent-free-png.png"
                  alt="phone"
                />
                <h5 className=" number">12345678910</h5>
              </div>
              <div className="phoneCard">
                <img
                  className="mail"
                  src="https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-213.png"
                  alt="phone"
                />
                <h5 className="mail1 ml-5">abcedf@gmail.com</h5>
              </div>
              <div className="phoneCard">
                <img
                  className="mail"
                  style={{ height: "8vh", width: "4vw", marginTop: "40px" }}
                  src="https://freepngimg.com/download/map/62759-computer-location-icon-icons-free-download-png-hd.png"
                />
                <h5 className="mail1 ml-5 mt-5">
                  1-165/A XXXXXX ROAD,XXXXXXX .. , HYDERABAD
                </h5>
              </div>
            </div>

            <div
              className="container p-5"
              style={{ backgroundColor: "silver", color: "white" }}
            >
              <form>
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                  className="form-control border-top-0 border-bottom border-right-0 border-left-0 border-primary"
                />

                <label for="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  className="form-control border-top-0 border-bottom border-right-0 border-left-0 border-primary"
                />

                <label for="country">Email</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your Email"
                  className="form-control border-top-0 border-bottom border-right-0 border-left-0 border-primary"
                />

                <label for="subject">White your message here..</label>
                <input
                  id="subject"
                  className="form-control border-top-0 border-bottom border-right-0 border-left-0 border-primary"
                  style={{ height: "20vh" }}
                  name="subject"
                  placeholder="Write something.."
                />

                <button type="submit" className="mt-3 btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
