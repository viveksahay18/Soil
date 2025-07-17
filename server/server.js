const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // 

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);


const soilRoutes = require('./routes/soil');
app.use('/api/soil', soilRoutes);  


const distributorRoutes = require('./routes/distributor');
app.use('/api/distributor', distributorRoutes); 


// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  // Start Server after DB connection
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
