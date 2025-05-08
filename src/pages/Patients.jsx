// pages/Patients.js
import React, { useState } from 'react';
import PatientList from '../components/PatientList';
import AddPatientForm from '../components/AddPatientForm';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
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
