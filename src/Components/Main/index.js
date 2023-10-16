import "./index.css";
import { PageLayout } from "../page-layout";

const Main = () => {
  return (
    <PageLayout>
      <div className="main">
        <div>
          <img
            src="https://yt3.googleusercontent.com/ytc/APkrFKasjUJq9CZ6nGNzx9D6kf79UTFfFUuufwdbFVeZFA=s900-c-k-c0x00ffffff-no-rj"
            alt="mainImage"
            className="mainImage"
          />
        </div>
        <div className="discp">
          <h3>
            Welcome to Project Hub - Where Ideas Flourish and Dreams Take
            Flight!<br></br>
          </h3>
          <p>
            Are you ready to embark on a journey of innovation, collaboration,
            and endless possibilities? Look no further; you've found your
            gateway to a world of creativity and achievement.<br></br>
            <br></br>At Project Hub, we're on a mission to empower individuals
            and teams like you to turn your ideas into reality. Whether you're a
            seasoned professional, an aspiring entrepreneur, a student with a
            vision, or simply someone with a passion for making a difference,
            you've come to the right place.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Main;
