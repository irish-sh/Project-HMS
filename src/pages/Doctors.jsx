import React, { useState, useEffect } from "react";
import { API } from "../apiConfig/api";
import DoctorForm from "../components/DoctorForm";
import DoctorList from "../components/DoctorList";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const res = await API.get("/doctors");
      setDoctors(res.data);
    } catch (err) {
      alert("Failed to fetch doctors: " + err.message);
    }
  };

  const addDoctor = async (doctor) => {
    try {
      const res = await API.post("/doctors", doctor);
      alert(res.data);
      fetchDoctors(); // Refresh doctor list
    } catch (err) {
      alert("Error adding doctor: " + err.message);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Doctor Management</h2>
      <div className="row">
        <div className="col-md-6">
          <DoctorForm onAdd={addDoctor} />
        </div>
        <div className="col-md-6">
          <DoctorList doctors={doctors} />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
