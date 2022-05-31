import { iComponent } from "../interfaces/iComponent.js";
import { SeriesCard } from "./SeriesCard.js";
import { Component } from "./Component.js";
import { iSeries } from "../interfaces/iSeries.js";

export enum LIST_TYPE {
  WATCHED,
  PENDING,
}

export class SeriesList extends Component implements iComponent {
  constructor(
    public selector: string,
    public listType: LIST_TYPE,
    public seriesArray: Array<iSeries>,
    public onDeleteSeries: (id: number) => void,
    public setScoreSeries: (id: number, score: number) => void
  ) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  render(): void {
    super.render();
    this.seriesArray.forEach(
      (film) =>
        new SeriesCard(
          this.selector + ` .serie[data-id="${film.id}"]`,
          film,
          this.onDeleteSeries.bind(this),
          this.setScoreSeries.bind(this)
        )
    );
  }

  createTemplate(): string {
    let html = `<ul class='series-list ${
      this.listType === LIST_TYPE.WATCHED ? "series-list--watched" : ""
    }'>`;
    html += this.seriesArray
      .map((film) => `<li data-id="${film.id}" class="serie"></li>`)
      .join("");
    html += "</ul>";
    return html;
  }
}
