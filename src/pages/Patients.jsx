// src/pages/Patients.jsx
import React, { useEffect, useState } from 'react';
import PatientList from '../components/PatientList';
import AddPatientForm from '../components/AddPatientForm';
import { API } from '../apiConfig/api';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await API.get('/patients');
      setPatients(res.data);
    } catch (err) {
      console.error('Error fetching patients:', err);
    }
  };

  const addPatient = async (newPatient) => {
    try {
      const res = await API.post('/patients', newPatient);
      alert('Patient added successfully!');
      fetchPatients(); // Refresh list after successful add
    } catch (err) {
      alert('Error adding patient: ' + err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Patient Management</h2>
      <div className="row">
        <div className="col-md-6">
          <AddPatientForm onAdd={addPatient} />
        </div>
        <div className="col-md-6">
          <PatientList patients={patients} />
        </div>
      </div>
    </div>
  );
};

export default Patients;
