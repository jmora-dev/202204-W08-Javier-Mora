import { iComponent } from "../interfaces/iComponent";
import { iSeries } from "../interfaces/iSeries";
import { Component } from "./Component.js";
import { StarRating } from "./StarRating.js";

export class SeriesCard extends Component implements iComponent {
  constructor(
    public selector: string,
    public series: iSeries,
    public onDelete: (id: number) => void,
    public setScoreSeries: (id: number, score: number) => void
  ) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  render(): void {
    super.render();
    new StarRating(
      this.selector + ` [data-role='score']`,
      this.series.score,
      this.setScore.bind(this)
    );
    document
      .querySelector(this.selector + " .icon--delete")
      ?.addEventListener("click", () => this.onDelete(this.series.id));
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
      <i class="fas fa-times-circle icon--delete" role="button"></i>`;
  }

  setScore(score: number) {
    this.setScoreSeries(this.series.id, score);
  }
}
