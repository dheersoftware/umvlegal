import React, { useEffect, useState } from "react";
import axios from "axios";
import "./appointment.css";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";

const Appointments = ({ onLogout }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/appointments");
        setAppointments(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching appointments.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Function to delete an appointment
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/appointments/${id}`);
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
    } catch (err) {
      alert("Error deleting appointment.");
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(appointments.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Dashboard />
      <div id="appoint">
        <h2>Appointments</h2>
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Service</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.date}</td>
                <td>{appointment.service}</td>
                <td>
                  <button onClick={() => handleDelete(appointment._id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <button onClick={onLogout} className="logout-btn">
        Logout
      </button>
    </>
  );
};

export default Appointments;
