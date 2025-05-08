// pages/Doctors.js
import React from 'react';

const Doctors = () => (
  <div className="container mt-4">
    <h2 className="text-center mb-4">Doctor Directory</h2>
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr><th>ID</th><th>Name</th><th>Specialization</th><th>Contact</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Dr. Anil Verma</td><td>Cardiologist</td><td>9876543210</td></tr>
        <tr><td>2</td><td>Dr. Neha Singh</td><td>Pediatrician</td><td>9123456789</td></tr>
      </tbody>
    </table>
  </div>
);

export default Doctors;
