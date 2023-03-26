import React from 'react'
import './Home.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <>
      <div className="main_box">
        <div className="subpart1">
          <img
            src="https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="apple"
          />
        </div>
        <div className="subpart2">
          <h2>
            "Make something people want” includes making a company that people
            want to work for.
          </h2>
          <p>
            We are here to serve the requirements what you actually looking for.
          </p>
          <button className="btn btn-outline-secondary">Hit me</button>
        </div>
      </div>
    </>
  );
}

export default Home