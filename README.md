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

Exploitation des données de l'API de The Movie Data Base dans une Single Page Application à l'aide d'un serveur Node JS.
Les données recherchées sont celles des films présentement à l'affiche dans les cinémas canadiens.

Lien vers le projet : [](https://example.com)

Ce projet exploite les données de l'API de The Movie Data Base à partir d'une Single Page Application et à l'aide d'un serveur Node JS.
L'utilisateur peut accéder à la liste des films étant présentement à l'affiche des cinémas canadiens (limitée à la première page des résultats). Cette liste est présentée sous la forme d'une grille des différents posters des films.
L'utilisateur peut cliquer sur chacun des posters des films pour accéder à une page détaillant les informations du film sélectionné.
La navigation du site dans le menu ou dans les différentes pages des films ne recharche pas le navigateur.

Les données de la liste de tous les films proviennent d'un fichier .json qui est généré après un fetch des données au chargement du serveur. La clé de l'API peut être caché dans un fichier .env et appelé à l'aide de la librairie dotenv.

Les données des pages de détail des films sont récupérées grace à une nouvelle interrogation de l'API avec l'id du film. Cela permet de pouvoir récupérer plus d'informations que dans la fichier .json de départ. Cela permet également de faire des appels à l'API au fur et à mesure de la navigation dans l'app. Cette configuration ne permet plus d'utiliser la librairie dotenv et la clé de l'API n'est plus cachée.


Les librairies utilisées :
express, dotenv et node-fetch (d'après la documentation de l'api)

Les lignes de commandes utilisées pour installer le projet à partir du dépôt github :
```bash
git clone [URL]
npm init -y
npm i express dotenv node-fetch@2
npm start
```

La documentation de l'[API TMDB](https://developer.themoviedb.org/reference/intro/getting-started)

Le lien vers le [dépôt GitHub](https://example.com)


## 🚀 Quickstart

Installation des librairies nécessaires au chargement du site :
```bash
npm init -y
npm i express dotenv node-fetch@2
npm start
```

A TESTER, VOIR CE QUIL FAUT FAIRE QUAND ON CLONE LE DEPOT GIT


## 🎯 Features

- Créer un server node js
- Récupérer les données depuis l'API (REst) et les enregistrer dans un fichier JSON
- Afficher la liste des films sur la page des sorties cinéma
- Afficher le détail d'un film sur une page détaillée
- La navigation du menu s'effectue sans rechargement du site
- La clé de connexion à l'API est enregistrée dans un fichier .env

## 🤖 Built With
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) ![Node JS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)


---

## Logos
🧑🏼‍🏭 Static
📊 Analytics
🤖 Artificial Intelligence
🔗 Blockchain
📝 Blog
👥 Community
📱 Contact
☁ Cloud
💲 Cryptocurrency
⚡ Database
🖍 Design
📚 Education
📦 ETL
🍔 Food
🚀 Frameworks & Library
❤ Funding
🎮 Games
🤜 Group
👩‍💻 IDE
🔌 IDE Plugin
👩‍💻 Languages
🧐 Linters
🎡 Low Code Platforms
📱 Mobile Frameworks
👨‍💻 Office
⚙️ ORM
💻 OS
💡 Prototyping Platforms
🔒 Security Platforms
👨 Social
👩‍💻 Software Metrics & Analytics
🎶 Sound
💻 Spatial software
🛒 Store
🎞 Streaming
💻 Terminal
💻 Virtualization
🌐 Web Browsers
🥅 Work/Jobs
⏱️ Workflow Platforms
💻 Workspace Spec
🔁 Dynamic
📈 Activity Graph
📑 Gist Pin
📄 Gists List Card
💳 Github Profile Summary Card
📟 GitHub Stats
📊 Most Used Language
🎯 Profile Hits Counter
⏱ Streak Stats
🏆 Trophy Stats


## 🌐 Screenshots

![Home page](./screenshot.png)