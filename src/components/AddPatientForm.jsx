import React, { useState } from 'react';
import { addPatient } from '../services/api';

const AddPatient = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    doctor: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPatient(form)
      .then(() => alert("Patient added successfully!"))
      .catch(err => console.error("Error adding patient:", err));
  };

  return (
    <div className="container mt-4">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3"><input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" required /></div>
        <div className="mb-3"><input type="number" name="age" value={form.age} onChange={handleChange} className="form-control" placeholder="Age" required /></div>
        <div className="mb-3"><input type="text" name="gender" value={form.gender} onChange={handleChange} className="form-control" placeholder="Gender" required /></div>
        <div className="mb-3"><input type="text" name="doctor" value={form.doctor} onChange={handleChange} className="form-control" placeholder="Doctor Name" required /></div>
        <button type="submit" className="btn btn-primary">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
