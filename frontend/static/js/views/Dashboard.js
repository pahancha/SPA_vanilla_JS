import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1> Hello Pahan! </h1>
            <p> This is a single page application that is built with vanilla javascript. </p>
            <p> 
                <a href="/posts" data-link> View recent posts </a>.
            </p>
        `;
    }

}