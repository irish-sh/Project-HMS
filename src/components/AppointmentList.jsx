import React, { useEffect, useState } from "react";
import { API } from "../apiConfig/api";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");
      setAppointments(res.data);
    } catch (err) {
      alert("Failed to fetch appointments: " + err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>All Appointments</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Specialization</th>
            <th>Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td>{appt.id}</td>
              <td>{appt.patient.name}</td>
              <td>{appt.doctor.name}</td>
              <td>{appt.doctor.specialization}</td>
              <td>{appt.appointmentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
