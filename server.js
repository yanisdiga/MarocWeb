const express = require('express');
const path = require('path');
const app = express();

// Définition du chemin vers le fichier index.html
const indexPath = path.join(__dirname, 'index.html');

// Route pour la racine de l'URL
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/come.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'come.html'));
});

// Utiliser express.static pour servir les fichiers statiques
app.use(express.static('public'));

// Lancer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});