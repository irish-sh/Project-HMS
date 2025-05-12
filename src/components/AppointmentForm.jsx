// src/components/AppointmentForm.js
import React, { useState, useEffect } from "react";
import { API } from "../apiConfig/api";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
  });

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    API.get("/patients").then((res) => setPatients(res.data));
    API.get("/doctors").then((res) => setDoctors(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        doctor: { id: parseInt(formData.doctorId) },
        patient: { id: parseInt(formData.patientId) },
        appointmentDate: formData.appointmentDate,
      };
      const res = await API.post("/appointments", payload);
      alert(res.data);
      setFormData({ patientId: "", doctorId: "", appointmentDate: "" });
    } catch (err) {
      alert("Error creating appointment: " + err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Create Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Patient</label>
          <select
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Patient</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Doctor</label>
          <select
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select Doctor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} ({d.specialization})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button className="btn btn-success">Create Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
