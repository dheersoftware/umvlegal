import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa"; // Close icon from react-icons
import "./gallery.css"; // Import your CSS file
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

Modal.setAppElement("#root"); // Prevents accessibility warning

const Gallery = () => {
  const [images, setImages] = useState([]); // Store fetched images
  const [selectedImage, setSelectedImage] = useState(null); // Store clicked image for modal
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/gallery-images"); // Replace with your API
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <NavBar/>
    <div className="gallery-container">
       <div id="headings-aboutus">
        <h2>
          GALLERY
        </h2>
      </div>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={image._id}
              className={`gallery-item ${index % 4 === 0 ? "big" : "small"}`} // Every 4th image is big
              onClick={() => setSelectedImage(`http://localhost:5000${image.path}`)}
            >
              <img src={`http://localhost:5000${image.path}`} alt="Gallery" />
            </div>
          ))}
        </div>
      )}

      {/* Modal for full-screen image */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="modal-close" onClick={() => setSelectedImage(null)}>
            <FaTimes size={24} color="#fff" />
          </div>
          <img src={selectedImage} alt="Full view" />
        </Modal>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;
