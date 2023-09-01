import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Contact');
    }

    async getHtml() {
        return `
            <div class="container">
            <h1>Contact</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit doloribus molestias obcaecati? Tenetur corporis fugiat, deleniti dolor iusto pariatur ducimus alias sapiente facere quae nemo in doloribus, quasi rerum!</p>
            </div>
        `
    }
}