import AbstractView from "./AbstractView.js";

/**
 * Vue qui affiche les détails d'un film en prenant en compte l'id du film envoyé en paramètre
 */
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Détails du film');
    }

    /**
     * Construit la vue à partir des données récupérées dans l'API pour un film
     * @returns {Promise<string>} html de la vue
     */
    async getHtml() {
        const nu = Number(this.params.id);
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdhY2NlNDRlNjkzOGM0NzFiNmFmOGMxYjQ0NDliNCIsInN1YiI6IjY0ZTRmODExYzNjODkxMDBhZWQ3ODBlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71womqwvA4SJ1KVF64WabIdgMUOcR6_Jkq68_rEb43Y'
            }
        };
        async function getData() {
            const url = `https://api.themoviedb.org/3/movie/${nu}?language=fr-FR`;
            const response = await fetch(url, options);
            return response.json();
        }
        async function getVideo() {
            const url = `https://api.themoviedb.org/3/movie/${nu}/videos?language=en-US`;
            const response = await fetch(url, options);
            return response.json();
        }
        const film = await getData().catch(error => console.log(error));
        const trailer = await getVideo().catch(error => console.log(error));
        const keyYoutube = trailer.results.find(item => item.type === 'Teaser' && item.site === 'YouTube').key;

        // construction du html
        let html = `
        <div class="container col-xxl-8 px-4 py-5 d-flex gap-4 flex-column flex-sm-row">
        <div class="col-4 justify-content-center">
            <img class="rounded img-fluid" alt="poster film${film.title}" src="https://image.tmdb.org/t/p/w500${film.poster_path}">
        </div>
        <div class="col-8">
            <h1 class="display-3">${film.title}</h1>
            <div class="mb-2">
            <span>Sortie le ${film.release_date} &#8226 </span>
            <span>Durée ${film.runtime} min</span>
            </div>
            <div class="mb-4">
            `;

        // boucle sur les genres du film
        film.genres.forEach(genre => {
            html += `<span class="btn btn-sm btn-outline-primary me-2 disabled">${genre.name}</span>`;
        });

        html +=
            `</div>
            <div>
                <p><em class="fw-light">${film.tagline}</em></p>
                <h4>Synopsis</h4>
                <p>${film.overview}</p>
            </div>
            <div class="mb-4"><strong>Vote des spectateurs</strong><span class="badge text-bg-warning rounded-pill ms-2"> ${Math.round(film.vote_average * 10)}%</span></div>
            <div class="embed-responsive">
            <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/${keyYoutube}" allowfullscreen></iframe>
            </div>
            </div >
            </div >
            `;

        return html;
    }
}