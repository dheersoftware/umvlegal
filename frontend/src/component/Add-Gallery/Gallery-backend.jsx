import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addgallery.css';
import Dashboard from '../Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';

const AddGalleryImages = ({ onLogout }) => {
  const [galleryFile, setGalleryFile] = useState(null);
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const token = localStorage.getItem('token');

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/gallery-images');
      setImages(response.data);
      setMessage('');
    } catch (error) {
      setMessage('Error fetching gallery images: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleGalleryFileChange = (e) => {
    setGalleryFile(e.target.files[0]);
  };

  const handleUploadGallery = async () => {
    if (!galleryFile) {
      setMessage('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', galleryFile);

    try {
      const response = await axios.post('http://localhost:5000/upload-gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setGalleryFile(null);
      fetchImages();
    } catch (error) {
      setMessage('Error uploading gallery image: ' + error.message);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/images/${id}`);
      setMessage(response.data.message);
      fetchImages();
    } catch (error) {
      setMessage('Error deleting image: ' + error.message);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  return (
    <>
      <Dashboard />
      <div id="addcarouseldiv">
        <div className="containerrs">
          <h2>Upload Gallery Image</h2>
          <div>
            <input type="file" onChange={handleGalleryFileChange} />
            <button onClick={handleUploadGallery}>Upload Gallery</button>
          </div>

          <p className={message.includes('Error') ? 'error' : ''}>{message}</p>

          <h3>Uploaded Gallery Images</h3>
          {loading ? (
            <p>Loading images...</p>
          ) : (
            <>
              <table className="image-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((image) => (
                      <tr key={image._id}>
                        <td>
                          <img
                            src={`http://localhost:5000${image.path}`}
                            alt={image.name}
                            style={{ width: '100px', height: '100px' }}
                          />
                        </td>
                        <td>
                          <button onClick={() => handleDeleteImage(image._id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2">No images found</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="pagination">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <button onClick={onLogout} className="logout-btn">Logout</button>
    </>
  );
};

export default AddGalleryImages;
