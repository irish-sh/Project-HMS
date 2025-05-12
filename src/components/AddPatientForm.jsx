// src/components/AddPatientForm.js
import React, { useState } from 'react';

const AddPatientForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', age: '', gender: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
