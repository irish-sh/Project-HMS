// components/PatientList.js
const PatientList = ({ patients }) => (
    <div className="container mt-4">
      <h3>Patients</h3>
      <table className="table table-striped">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Doctor</th></tr>
        </thead>
        <tbody>
          {patients.map((p, i) => (
            <tr key={i}>
              <td>{p.id}</td><td>{p.name}</td><td>{p.age}</td><td>{p.gender}</td><td>{p.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default  PatientList;