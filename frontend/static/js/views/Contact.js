import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Contact');
    }

    async getHtml() {
        return `
            <div class="container col-xxl-6 px-4 py-5">
            <h1 class="text-center">Contactez-nous</h1>
            <form class="d-flex flex-column gap-4">
            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" placeholder="Votre nom">
            </div>
            <div class="form-group">
                <label for="email">Courriel</label>
                <input type="email" class="form-control" id="email" placeholder="nom@exemple.com">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="6"></textarea>
            </div>
            <button type="submit" class="btn btn-primary disabled">Envoyer</button>
            </form>
            </div>
        `
    }
}