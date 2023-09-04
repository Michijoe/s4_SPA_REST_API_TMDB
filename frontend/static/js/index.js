import Accueil from "./views/Accueil.js";
import Films from "./views/Films.js";
import Contact from "./views/Contact.js";
import FilmView from "./views/FilmView.js";

// récupération de l'id du film dans l'url
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

// création de l'historique et appel du router
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

/**
 * Fonction qui compare l'url avec les routes possibles et affiche la vue correspondante
 */
const router = async () => {
    // création d'un tableau routes avec les routes possibles
    const routes = [
        { path: "/", view: Accueil },
        { path: "/films", view: Films },
        { path: "/film-view/:id", view: FilmView },
        { path: "/contact", view: Contact },
    ]

    // création d'un tableau potential Matches avec les routes et les résultats de la comparaison avec l'url
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    // création d'un objet match avec la route et le résultat de la comparaison
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    // création de la vue avec les paramètres de l'url
    const view = new match.route.view(getParams(match));

    // affichage de la vue
    document.querySelector("#app").innerHTML = await view.getHtml();
}


// permet le retour dans l'historique
window.addEventListener("popstate", () => {
    router();
});

// permet la navigation dans l'app sans recharger la page
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
            setActive();
        }
        else if (e.target.parentElement.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.parentElement.href);
            setActive();
        }
    })
    router();
    setActive();
});

/**
 * Fonction qui ajoute la classe active et l'attribut aria-current="page" au lien de la page courante
 */
function setActive() {
    const navItems = document.querySelectorAll(".nav-link");
    navItems.forEach(item => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
        if (item.href === location.href) {
            item.classList.add("active");
            item.setAttribute("aria-current", "page");
        }
    })
}