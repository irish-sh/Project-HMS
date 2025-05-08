// pages/Home.js
import React from 'react';

const Home = () => (
  <div className="container mt-5 text-center">
    <h1 className="display-4">🏥 Welcome to Hospital Management System</h1>
    <p className="lead">Efficiently manage patients, doctors, and appointments.</p>
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="card shadow p-3">
          <h5 className="card-title">Patients</h5>
          <p className="card-text">View and manage patient records.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow p-3">
          <h5 className="card-title">Doctors</h5>
          <p className="card-text">View and manage doctor information.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow p-3">
          <h5 className="card-title">Appointments</h5>
          <p className="card-text">Schedule and track appointments.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
