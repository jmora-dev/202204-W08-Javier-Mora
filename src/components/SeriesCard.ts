import { iComponent } from "../interfaces/iComponent";
import { Series } from "../models/Series.js";
import { Component } from "./Component.js";
import { StarRating } from "./StarRating.js";

export class SeriesCard extends Component implements iComponent {
  constructor(public selector: string, public series: Series) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  render(): void {
    super.render();
    new StarRating(
      `.serie[data-id='${this.series.id}'] [data-role='score']`,
      this.series.score,
      () => {}
    );
  }

  createTemplate(): string {
    return `
      <img
          class="serie__poster"
          src="${this.series.poster}"
          alt="${this.series.name}"
      />
      <h4 class="serie__title">${this.series.name}</h4>
      <p class="serie__info">${this.series.creator} (${this.series.year})</p>
      <div data-role="score"></div>
      <i class="fas fa-times-circle icon--delete"></i>`;
  }
}
