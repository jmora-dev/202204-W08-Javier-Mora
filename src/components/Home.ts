import { series } from "../data/seriesData.js";
import { iComponent } from "../interfaces/iComponent.js";
import { Series } from "../models/Series.js";
import { Component } from "./Component.js";
import { SeriesList } from "./SeriesList.js";

export class Home extends Component implements iComponent {
  seriesArray: Array<Series>;

  constructor(public selector: string) {
    super(selector, () => this.createTemplate());
    this.seriesArray = this.getSeries();
    this.render();
  }

  render(): void {
    super.render();
    new SeriesList(".series-pending > div", this.seriesPending());
    new SeriesList(".series-watched > div", this.seriesWatched());
  }

  getSeries(): Array<Series> {
    return series.map(
      (data) =>
        new Series(
          data.id,
          data.name,
          data.creator,
          data.year,
          data.poster,
          data.watched,
          data.score,
          data.emmies
        )
    );
  }

  seriesPending(): Array<Series> {
    return this.seriesArray.filter((film) => !film.watched);
  }

  seriesWatched(): Array<Series> {
    return this.seriesArray.filter((film) => film.watched);
  }

  createTemplate(): string {
    return `
      <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          ${
            this.seriesPending().length > 0
              ? `<p class="info">You have ${
                  this.seriesPending().length
                } series pending to watch</p>`
              : `<p class="info">You don't have any series pending to watch</p>`
          }
          <div></div>
        </section>
        <section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          ${
            this.seriesWatched().length > 0
              ? `<p class="info">You have watched ${
                  this.seriesWatched().length
                } series</p>`
              : `<p class="info">You don't have watched any series</p>`
          }
          <div></div>
        </section>
      </section>`;
  }
}
