import AbstractView from "./AbstractView.js";

/**
 * Vue qui affiche la page d'accueil
 */
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Accueil');
  }

  /**
   * Construit la vue de la page d'accueil
   * @returns {Promise<string>} html de la vue
   */
  async getHtml() {
    return `
        <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="/static/img/popcorn.jpg" class="d-block mx-lg-auto img-fluid" alt="Popcorn and tickets cinema, image by macrovector on Freepik" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Bienvenue!</h1>
            <p class="lead">Découvrez les films à l'affiche proche de chez vous et planifiez votre prochaine sortie cinéma !</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/films" data-link class="btn btn-outline-secondary btn-lg px-4">Voir les films</a>
            </div>
          </div>
        </div>
      </div>
        `
  }
}