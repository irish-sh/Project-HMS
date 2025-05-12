import React, { useState } from "react";

const DoctorForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.specialization.trim()) {
      alert("Both fields are required.");
      return;
    }

    // Call parent handler
    onAdd(formData);

    // Clear form
    setFormData({ name: "", specialization: "" });
  };

  return (
    <div className="container mt-4">
      <h3>Add Doctor</h3>
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
          <label>Specialization</label>
          <input
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default DoctorForm;
