const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const candidateRouter = require('./routes/candidate')
const voteRouter = require('./routes/voter')
const multer=require("multer")


app.use(express.json());
app.use(cors());

app.use('/users' , userRouter);
app.use('/admin' , adminRouter);
app.use('/candidate' , candidateRouter);
app.use('/vote' , voteRouter);

const MIME_TYPE_MAP = {  
  'image/png': 'png',  
  'image/jpeg': 'jpg',  
  'image/jpg': 'jpg'  ,
  'file/pdf': 'pdf'  ,
  'file/doc': 'doc' ,
  'file/docx': 'docx'  
};  
const storages = multer.diskStorage({
  destination:(req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];  
    let error = new Error("Invalid Mime Type");  
    if(isValid){  
      error = null;  
    }  
    cb(error, "uploads/");
  },
  filename: (req, file, cb) => {
    // const name = file.originalname.toLowerCase().split(' ').join('_');  
    const ext = MIME_TYPE_MAP[file.mimetype];  
    cb(null,  ''+ Date.now()+ '.'+ ext);  
  },
});
const upload=multer({storage:storages})
app.post('/profile',upload.single('file'),(req,res)=>{
  if(!req.file){
    res.json("file not uploaded")
    return
  }
  res.json("file uploaded successfully")
})



mongoose.connect('mongodb://localhost:27017/voting')
  .then(() => {
    console.log('Connected to the database');
    // Do something after successful connection
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    // Handle the connection error
  });

app.listen(4000,() =>{
    console.log('server start');
});