import Accueil from "./views/Accueil.js";
import Films from "./views/Films.js";
import Contact from "./views/Contact.js";
import FilmView from "./views/FilmView.js";

// récupérer l'id du film dans l'url
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

//
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

// router
const router = async () => {
    const routes = [
        { path: "/", view: Accueil },
        { path: "/films", view: Films },
        { path: "/film-view/:id", view: FilmView },
        { path: "/contact", view: Contact },
    ]

    // match function
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });
    // console.log(potentialMatches)

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }
    // console.log(match);

    // 
    const view = new match.route.view(getParams(match));
    // console.log(view);
    document.querySelector("#app").innerHTML = await view.getHtml();
}



// permet le retour dans l'historique
window.addEventListener("popstate", router);


//5
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
        else if (e.target.parentElement.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.parentElement.href)
        }
    })
    router();
});







//-----------------------------
// Ajout classe active et aria-current attribut selon naviagation dans le menu
const navItems = document.querySelectorAll(".nav-link");
function setActive(e) {
    navItems.forEach(item => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
        e.target.classList.add("active");
        e.target.setAttribute("aria-current", "page");
    })
}
navItems.forEach(listItem => {
    listItem.addEventListener("click", setActive)
})