// pages/Appointments.js
import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppt = {
      id: appointments.length + 1,
      patient: e.target.patient.value,
      doctor: e.target.doctor.value,
      date: e.target.date.value
    };
    setAppointments([...appointments, newAppt]);
    e.target.reset();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Appointments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col">
            <input className="form-control" name="patient" placeholder="Patient Name" required />
          </div>
          <div className="col">
            <input className="form-control" name="doctor" placeholder="Doctor Name" required />
          </div>
          <div className="col">
            <input type="date" className="form-control" name="date" required />
          </div>
          <div className="col">
            <button className="btn btn-success w-100">Schedule</button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {appointments.map((appt) => (
          <li key={appt.id} className="list-group-item">
            {appt.date}: {appt.patient} with {appt.doctor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
