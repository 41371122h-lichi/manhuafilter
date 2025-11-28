const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

app.use(express.static(path.join(__dirname, 'build')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/api/upload-image', upload.single('mangaImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('沒有檔案上傳。');
  }
  const imagePath = `/uploads/${req.file.filename}`; 

  res.json({ 
      success: true, 
      imageUrl: imagePath 
  });
});

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});