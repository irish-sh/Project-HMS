// pages/Home.js
import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="container mt-5 text-center">
    <h1 className="display-4">🏥 Welcome to Hospital Management System</h1>
    <p className="lead">Efficiently manage patients, doctors, and appointments.</p>
    <div className="row mt-5">
      <div className="col-md-4">
        <Link to="/patients" style={{textDecoration: "none", color: "inherit"}}>
        <div className="card shadow p-4" >
          <h5 className="card-title">Patients</h5>
          <p className="card-text">View and manage patient records.</p>
        </div>
        </Link>
      </div>
      <div className="col-md-4">
        <Link to={"/doctors"} style={{textDecoration: "none", color: "inherit"}}>
        <div className="card shadow p-4">
          <h5 className="card-title">Doctors</h5>
          <p className="card-text">View and manage doctor information.</p>
        </div>
        </Link>
      </div>
      <div className="col-md-4">
        <Link to={"/appointments"} style={{textDecoration: "none", color:"inherit"}}>
        <div className="card shadow p-4">
          <h5 className="card-title">Appointments</h5>
          <p className="card-text">Schedule and track appointments.</p>
        </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
