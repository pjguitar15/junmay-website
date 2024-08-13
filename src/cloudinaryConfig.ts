// cloudinaryConfig.js
import { Cloudinary } from 'cloudinary-core';

// Initialize Cloudinary
const cloudinaryCore = new Cloudinary({
  cloud_name: 'your-cloud-name', // Replace with your Cloud Name
  secure: true
});

export default cloudinaryCore