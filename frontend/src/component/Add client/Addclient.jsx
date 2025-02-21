import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';

const AddClient = ({ onLogout }) => {
  const [clientFile, setClientFile] = useState(null);
  const [clientHeading, setClientHeading] = useState('');
  const [clientParagraph, setClientParagraph] = useState('');
  const [message, setMessage] = useState('');
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 10;

  const token = localStorage.getItem('token');

  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/client-images');
      setClients(response.data);
      setMessage('');
    } catch (error) {
      setMessage('Error fetching clients: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleClientFileChange = (e) => {
    setClientFile(e.target.files[0]);
  };

  const handleAddClient = async () => {
    if (!clientFile || !clientHeading || !clientParagraph) {
      setMessage('Please fill all fields and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', clientFile);
    formData.append('heading', clientHeading);
    formData.append('paragraph', clientParagraph);

    try {
      const response = await axios.post('http://localhost:5000/upload-client', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
      setClientFile(null);
      setClientHeading('');
      setClientParagraph('');
      fetchClients();
    } catch (error) {
      setMessage('Error adding client: ' + error.message);
    }
  };

  const handleDeleteClient = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/clients/${id}`);
      setMessage(response.data.message);
      fetchClients();
    } catch (error) {
      setMessage('Error deleting client: ' + error.message);
    }
  };

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Dashboard />
      <div id="addclientdiv">
        <div className="containerrs">
          <h2>Add New Client</h2>
          <div>
            <input type="file" onChange={handleClientFileChange} />
            <input type="text" placeholder="Client Heading" value={clientHeading} onChange={(e) => setClientHeading(e.target.value)} />
            <input type="text" placeholder="Client Description" value={clientParagraph} onChange={(e) => setClientParagraph(e.target.value)} />
            <button onClick={handleAddClient}>Add Client</button>
          </div>
          <p className={message.includes('Error') ? 'error' : ''}>{message}</p>

          <h3>Client List</h3>
          {loading ? (
            <p>Loading clients...</p>
          ) : (
            <>
              <table className="client-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Heading</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentClients.length > 0 ? (
                    currentClients.map((client) => (
                      <tr key={client._id}>
                        <td>
                          <img src={`http://localhost:5000${client.path}`} alt={client.heading} style={{ width: '100px', height: '100px' }} />
                        </td>
                        <td>{client.heading}</td>
                        <td>{client.paragraph}</td>
                        <td>
                          <button onClick={() => handleDeleteClient(client._id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No clients found</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="pagination">
                {Array.from({ length: Math.ceil(clients.length / clientsPerPage) }, (_, index) => (
                  <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <button onClick={onLogout} className="logout-btn">Logout</button>
    </>
  );
};

export default AddClient;
