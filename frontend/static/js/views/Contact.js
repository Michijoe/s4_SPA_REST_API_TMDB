import AbstractView from "./AbstractView.js";

/**
 * Vue qui affiche la page de contact
 */
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Contact');
    }

    /**
     * Construit la vue de la page contact
     * @returns {Promise<string>} html de la vue
     */
    async getHtml() {
        return `
            <div class="container col-xxl-6 px-4 py-5">
            <h1 class="text-center">Contactez-nous</h1>
            <form class="d-flex flex-column gap-4">
            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" placeholder="Votre nom complet" required>
            </div>
            <div class="form-group">
                <label for="email">Courriel</label>
                <input type="email" class="form-control" id="email" placeholder="nom@exemple.com" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="6" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary disabled">Envoyer</button>
            </form>
            </div>
        `
    }
}