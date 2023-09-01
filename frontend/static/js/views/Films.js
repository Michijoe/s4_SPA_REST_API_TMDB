import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Films');
    }

    async getHtml() {
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }

        const data = await getData("/static/js/films.json");
        const films = data.results;
        const dates = data.dates;

        let listFilms = `
        <div class="container-fluid">
        <div class="row justify-content-center">
        `;
        for (let i in films) {
            listFilms += `
            <div class="col-xxl-4 col-xl-4 col-md-6 col-sm-6 col-xs-12 mb-4" id="poster">
                <a href="/film-view/${films[i]['id']}" data-link>
                    <img class="rounded img-fluid" alt="poster film${films[i]['title']}" src="https://image.tmdb.org/t/p/w500${films[i]['poster_path']}">
                </a>
            </div>
            `;
        }
        listFilms += '</div></div>';
        return `
        <div class="container col-xxl-8 px-4 py-5 text-center">
        <h1>Les sorties cinéma</h1>
        <p class="text-uppercase text-danger fw-medium">du ${dates.minimum} au ${dates.maximum}</p>
        `+ listFilms + `</div>`;
    }
}