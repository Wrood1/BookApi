const express = require('express');
const session = require('express-session');

const app = express(); 
const port = 3000;
const mysql = require('mysql');
const path = require('path');
const multer = require('multer'); 
const db = require('./config/database');
const PerfumeController = require('./controllers/PerfumeController');
const UserController = require('./controllers/userController');
const contactUs = require('./controllers/CountactUs');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your-secret-key', 
  resave: false,
  saveUninitialized: true,
}));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = 'public/uploads';
    console.log('Destination Path:', destinationPath);
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});


const upload = multer({ storage: storage });

app.post('/addPerfume', upload.single('perfumeImage'), PerfumeController.addPerfume);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/login.html'));
});
app.get('/reg', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/signup.html'));
});
app.get('/contact-us', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/contact_us.html'));
});
app.get('/add', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/add.html'));
});
app.get('/perfumes', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/perfumes.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/about_us.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/index.html'));
});

app.post('/addPerfume', upload.single('perfumeImage'), PerfumeController.addPerfume);

app.post('/addContact', contactUs.addContactUs);

const { getAllProducts } = require('./controllers/PerfumeController');

// ...
app.get('/all_perfumes', getAllProducts);

app.get('/perfumes', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/html_folder/perfumes.html'));
});
app.post('/signUp', UserController.signUp);



app.post('/login', UserController.loginUser);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
