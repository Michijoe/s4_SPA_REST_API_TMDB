const express = require("express");
const app = express();
const fs = require('fs');
const path = require("path");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");
const fetch = require('node-fetch');

/**
 * IIFE (Immediately Invoked Function Expression) qui créé le fichier films.json au démarrage du server
 */
(async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1&region=CA';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            // API_KEY est une variable de .env
            Authorization: `Bearer ${API_KEY}`
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = JSON.stringify(result);
        fs.writeFile(__dirname + "/frontend/static/js/films.json", data, err => {
            if (err) throw err;
            console.log("Success");
        });
    } catch (error) {
        console.log(error)
    }
})();

// appele le point d'entrée de l'app
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// toutes les pages redirigent vers index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

// lance le server sur le port indiqué dans .env
app.listen(PORT, () => console.log("server running on PORT", PORT))