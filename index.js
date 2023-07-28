const axios = require('axios');
const fs = require('fs');

// Function to generate QR code using the Google Charts API and save it to a file
async function generateQRCode(data, filename) {
  try {
    const url = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${encodeURIComponent(data)}`;
    const response = await axios.get(url, { responseType: 'stream' });
    response.data.pipe(fs.createWriteStream(filename));
    console.log(`QR code generated and saved to ${filename}`);
  } catch (err) {
    console.error('Error generating QR code:', err);
  }
}

// Usage example
const dataToEncode = 'https://portfolio-kosuri.netlify.app/';

const outputFilename = 'qr_code.png';
generateQRCode(dataToEncode, outputFilename);
