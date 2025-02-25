require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express(); // Define app at the top

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


// // Serve static files for carousel and gallery images
app.use('/carousel-images', express.static(path.join(__dirname, 'carousel-images')));
app.use('/gallery', express.static(path.join(__dirname, 'gallery')));
app.use('/client', express.static(path.join(__dirname, 'client')));

// Ensure `carousel-images` and `gallery` directories exist
if (!fs.existsSync('./carousel-images')) {
  fs.mkdirSync('./carousel-images');
}

if (!fs.existsSync('./gallery')) {
  fs.mkdirSync('./gallery');
}
if (!fs.existsSync('./client')) {
  fs.mkdirSync('./client');
}

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/imageUploadDB';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Image Schema
const imageSchema = new mongoose.Schema({
  name: String,
  path: String,
  heading: String,
  paragraph: String,
});

const Image = mongoose.model('Image', imageSchema);

// Multer setup for file uploads
const storage = (folder) => multer.diskStorage({
  destination: (req, file, cb) => cb(null, folder),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const carouselUpload = multer({ storage: storage('carousel-images') });
const galleryUpload = multer({ storage: storage('gallery') });
const clientUpload = multer({ storage: storage('client') });

// Upload Carousel Image
app.post('/upload-carousel', carouselUpload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const { filename } = req.file;
    const { heading, paragraph } = req.body;
    const newImage = await Image.create({ name: filename, path: `/carousel-images/${filename}`, heading, paragraph });

    res.status(201).json({ message: 'Carousel image uploaded successfully', data: newImage });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading carousel image', error: error.message });
  }
});

// Upload Gallery Image
app.post('/upload-gallery', galleryUpload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const { filename } = req.file;
    const { heading, paragraph } = req.body;
    const newImage = await Image.create({ name: filename, path: `/gallery/${filename}`, heading, paragraph });

    res.status(201).json({ message: 'Gallery image uploaded successfully', data: newImage });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading gallery image', error: error.message });
  }
});

// Upload Client Image
app.post('/upload-client', clientUpload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const { heading, paragraph } = req.body;
    const newImage = await Image.create({
      name: req.file.originalname,
      path: `/client/${req.file.filename}`,
      heading,
      paragraph,
    });

    res.status(201).json({ message: 'Client image uploaded successfully', data: newImage });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading client image', error: error.message });
  }
});

// Fetch all Carousel Images
app.get('/carousel-images', async (req, res) => {
  try {
    const images = await Image.find({ path: { $regex: '^/carousel-images/' } });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching carousel images', error: error.message });
  }
});

// Fetch all Gallery Images
app.get('/gallery-images', async (req, res) => {
  try {
    const images = await Image.find({ path: { $regex: '^/gallery/' } });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gallery images', error: error.message });
  }
});

// Fetch all clients Images
app.get('/client-images', async (req, res) => {
  try {
    const images = await Image.find({ path: { $regex: '^/client/' } });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching client images', error: error.message });
  }
});

// Delete Image
app.delete('/images/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ message: 'Image not found' });

    const filePath = path.join(__dirname, image.path);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath); // Check before deleting

    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
});

// Delete Client Image
app.delete('/clients/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ message: 'Client not found' });

    const filePath = path.join(__dirname, image.path);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting client', error: error.message });
  }
});


// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  service: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Create Appointment
app.post('/appointments', async (req, res) => {
  try {
    await Appointment.create(req.body);
    res.status(201).json({ message: 'Appointment saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving appointment', error: error.message });
  }
});

// Fetch Appointments
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error: error.message });
  }
});
// Fetch Appointments
app.delete("/appointments/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error deleting appointment" });
  }
});


// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Login Route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' });
    res.cookie('token', token, { httpOnly: true, maxAge: 30 * 60 * 1000 });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Validate Token
app.post('/validate-token', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });
    res.json({ message: 'Token is valid' });
  });
});

// Logout Route
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
