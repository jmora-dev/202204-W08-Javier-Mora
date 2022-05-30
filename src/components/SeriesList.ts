import { iComponent } from "../interfaces/iComponent.js";
import { Series } from "../models/Series.js";
import { SeriesCard } from "./SeriesCard.js";
import { Component } from "./Component.js";

export class SeriesList extends Component implements iComponent {
  constructor(public selector: string, public seriesArray: Array<Series>) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  render(): void {
    super.render();
    this.seriesArray.forEach(
      (film) =>
        new SeriesCard(this.selector + ` .serie[data-id="${film.id}"]`, film)
    );
  }

  createTemplate(): string {
    let html = "<ul class='series-list series-list--watched'>";
    html += this.seriesArray
      .map((film) => `<li data-id="${film.id}" class="serie"></li>`)
      .join("");
    html += "</ul>";
    return html;
  }
}
