# SPA NodeJS ApiRest TMDB

<!-- TABLE OF CONTENTS -->
<details>
  <summary>🏁 Sommaire</summary>
  <ol>
    <li><a href="#-intro">Intro</a></li>
    <li><a href="#-quickstart">Quickstart</a></li>
    <li><a href="#-features">Features</a></li>
    <li><a href="#-built-with">Built with</a></li>
  </ol>
</details>

## ⚡ Intro

Exploitation des données de l'API de The Movie Data Base à partir d'une Single Page Application et à l'aide d'un serveur Node JS.
Les données recherchées sont celles des films présentement à l'affiche dans les cinémas canadiens.

Les données de la liste de tous les films proviennent d'un fichier .json qui est généré après un fetch des données au chargement du serveur. La clé de l'API peut être caché dans un fichier .env et appelé à l'aide de la librairie dotenv.

Les données des pages de détail des films sont récupérées grace à une nouvelle interrogation de l'API avec l'id du film. Cela permet de pouvoir récupérer plus d'informations que dans la fichier .json de départ. Cela permet également de faire des appels à l'API au fur et à mesure de la navigation dans l'app. Cette configuration ne permet plus d'utiliser la librairie dotenv et la clé de l'API n'est plus cachée.

Les librairies utilisées : express, dotenv et node-fetch.

La documentation de l'[API TMDB](https://developer.themoviedb.org/reference/intro/getting-started)

## 🚀 Quickstart

Assurez-vous d'avoir *Node.js* installé sur votre système :
```bash
node -v
```
Si Node.js est installé, cela affichera la version. Si ce n'est pas le cas, vous devrez l'installer à partir du site officiel de [Node.js](https://nodejs.org/).

Installez les dépendances définies dans `package.json` à la racine du projet :
```bash
npm install
```

Démarrer le serveur à partir de la racine du projet :
```bash
npm start
```

## 🎯 Features

- Affichage de la liste des films étant présentement à l'affiche des cinémas canadiens (limitée à la première page des résultats). Cette liste est présentée sous la forme d'une grille des différents posters des films.
- Affichage d'une page détaillant les informations du film sélectionné.
- Navigation du site dans le menu ou dans les différentes pages des films sans recharger le navigateur.

## 🤖 Built With
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) ![Node JS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

## 🌐 Démo vidéo

https://github.com/Michijoe/s4_SPA_REST_API_TMDB/assets/119381526/823e6b3e-c9c0-4cc8-9f89-47073e464de2

