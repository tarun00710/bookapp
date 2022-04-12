import React from "react";

const Home = () => {
  const google = () => {
    console.log("i was clciked")
    window.open("http://bookapp-env.eba-hbgxrjud.us-east-1.elasticbeanstalk.com/auth/google", "_self");
  };

  return (
    <div className="main_section">
      <div className="main_heading">SignIn to access the Book App</div>
      <button onClick={google} className="google_button">
        SignIn using Google <i class="fa fa-google" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Home;
