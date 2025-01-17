const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configurar la carpeta de almacenamiento de imágenes
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'registro_usuarios'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

// Ruta para registrar usuarios
app.post('/register', (req, res) => {
    const { nombre, email, password } = req.body;
    const query = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(query, [nombre, email, password], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Usuario registrado exitosamente');
    });
});

// Ruta para subir imágenes
app.post('/upload', upload.single('image'), (req, res) => {
    const imageUrl = `/uploads/${req.file.filename}`;
    const query = 'INSERT INTO imagenes (url) VALUES (?)';
    db.query(query, [imageUrl], (err, result) => {
        
        res.send('Imagen subida exitosamente');
    });
});

// Ruta para mostrar imágenes
app.get('/imagenes', (req, res) => {
    const query = 'SELECT * FROM imagenes';
    db.query(query, (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});
