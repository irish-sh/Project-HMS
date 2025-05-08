import { useState } from 'react';

const AddPatientForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', age: '', gender: '', doctor: '' });

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: '', age: '', gender: '', doctor: '' });
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h4>Add New Patient</h4>
      <input className="form-control mb-2" placeholder="Name" value={form.name}
             onChange={e => setForm({ ...form, name: e.target.value })} required />
      <input className="form-control mb-2" type="number" placeholder="Age" value={form.age}
             onChange={e => setForm({ ...form, age: e.target.value })} required />
      <input className="form-control mb-2" placeholder="Gender" value={form.gender}
             onChange={e => setForm({ ...form, gender: e.target.value })} required />
      <input className="form-control mb-2" placeholder="Doctor Assigned" value={form.doctor}
             onChange={e => setForm({ ...form, doctor: e.target.value })} />
      <button className="btn btn-primary">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;