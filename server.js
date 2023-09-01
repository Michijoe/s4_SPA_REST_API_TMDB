const express = require("express");
const app = express();
const fs = require('fs');
const path = require("path");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");
const fetch = require('node-fetch');

// fonction self calling qui charge le json des films au chargement de l'app
(async () => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
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

//call the enter point
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// toutes les pages redirigent vers index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.listen(PORT || 8080, () => console.log("server running on PORT", PORT))