import React from 'react'

const Home = () => {

const google = () =>{
    window.open("http://localhost:5000/auth/google","_self")
}

  return (
    <div className="main_section">
    <div className='main_heading'>SignIn to access the Book App</div>
    <button onClick={google} className='google_button'>SignIn using Google <i class="fa fa-google" aria-hidden="true"></i></button>
    </div>
  )
}

export default Home