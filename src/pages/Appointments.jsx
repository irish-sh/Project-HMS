import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

const Appointments = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Appointments Management</h2>
      <div className="row">
        {/* Left side - Form */}
        <div className="col-md-5">
          <AppointmentForm />
        </div>

        {/* Right side - List */}
        <div className="col-md-7">
          <AppointmentList />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
