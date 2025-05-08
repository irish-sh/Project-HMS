import React, { useEffect, useState } from 'react';
import { getAllPatients } from '../services/api';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getAllPatients()
      .then(res => setPatients(res.data))
      .catch(err => console.error("Error fetching patients:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Patient List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
