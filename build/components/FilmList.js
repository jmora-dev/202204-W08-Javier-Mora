import { CardFilm } from "./CardFilm.js";
import { Component } from "./Component.js";
export class FilmList extends Component {
    constructor(selector, films) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.films = films;
        this.render();
    }
    render() {
        super.render();
        this.films.forEach((film) => new CardFilm(this.selector + ` .serie[data-id="${film.id}"]`, film));
    }
    createTemplate() {
        let html = "<ul class='series-list series-list--watched'>";
        html += this.films
            .map((film) => `<li data-id="${film.id}" class="serie"></li>`)
            .join("");
        html += "</ul>";
        return html;
    }
}
