import { Component } from "./Component.js";
import { StarRating } from "./StarRating.js";
export class SeriesCard extends Component {
    constructor(selector, series, onDelete, setScoreSeries) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.series = series;
        this.onDelete = onDelete;
        this.setScoreSeries = setScoreSeries;
        this.render();
    }
    render() {
        var _a;
        super.render();
        new StarRating(this.selector + ` [data-role='score']`, this.series.score, this.setScore.bind(this));
        (_a = document
            .querySelector(this.selector + " .icon--delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.onDelete(this.series.id));
    }
    createTemplate() {
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
    setScore(score) {
        this.setScoreSeries(this.series.id, score);
    }
}
