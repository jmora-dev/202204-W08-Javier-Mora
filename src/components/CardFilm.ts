import { iComponent } from "../interfaces/iComponent";
import { Film } from "../models/Film.js";
import { Component } from "./Component.js";
import { StarRating } from "./StarRating.js";

export class CardFilm extends Component implements iComponent {
  constructor(public selector: string, public film: Film) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  render(): void {
    super.render();
    new StarRating(
      `.serie[data-id='${this.film.id}'] [data-role='score']`,
      this.film.score,
      () => {}
    );
  }

  createTemplate(): string {
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
