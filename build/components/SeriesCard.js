import { Component } from "./Component.js";
import { StarRating } from "./StarRating.js";
export class SeriesCard extends Component {
    constructor(selector, film) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.film = film;
        this.render();
    }
    render() {
        super.render();
        new StarRating(`.serie[data-id='${this.film.id}'] [data-role='score']`, this.film.score, () => { });
    }
    createTemplate() {
        return `
      <img
          class="serie__poster"
          src="${this.film.poster}"
          alt="${this.film.name}"
      />
      <h4 class="serie__title">${this.film.name}</h4>
      <p class="serie__info">${this.film.creator} (${this.film.year})</p>
      <div data-role="score"></div>
      <i class="fas fa-times-circle icon--delete"></i>`;
    }
}
