import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addcarousel.css';
import Dashboard from "../Dashboard/Dashboard";

const App = ({ onLogout }) => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchCarouselImages();
  }, []);

  const fetchCarouselImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/carousel-images');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching carousel images:', error);
      setMessage('Error fetching carousel images');
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload-carousel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      fetchCarouselImages();
    } catch (error) {
      console.error('Error uploading data:', error);
      setMessage('Error uploading carousel image');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/images/${id}`);
      fetchCarouselImages();
      setMessage('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      setMessage('Error deleting image');
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Dashboard />
      <div id="addcarouseldiv">
        <div className="containerrs">
          <h2>Carousel Image Upload</h2>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
          <p className={message.includes('Error') ? 'error' : ''}>{message}</p>

          <h3>Uploaded Carousel Images</h3>
          <table className="image-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((image) => (
                <tr key={image._id}>
                  <td>
                    <img
                      src={`http://localhost:5000${image.path}`}
                      alt={image.name}
                      style={{ width: '100px', height: '100px' }}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(image._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="pagination">
            {Array.from({ length: Math.ceil(images.length / itemsPerPage) }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button onClick={onLogout} className="logout-btn">
        Logout
      </button>
    </>
  );
};

export default App;
