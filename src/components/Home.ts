import { series } from "../data/seriesData.js";
import { iComponent } from "../interfaces/iComponent.js";
import { iSeries } from "../interfaces/iSeries.js";
import { Component } from "./Component.js";
import { LIST_TYPE, SeriesList } from "./SeriesList.js";

export class Home extends Component implements iComponent {
  seriesArray: Array<iSeries>;

  constructor(public selector: string) {
    super(selector, () => this.createTemplate());
    this.seriesArray = series;
    this.render();
  }

  render(): void {
    super.render();
    new SeriesList(
      ".series-pending > div",
      LIST_TYPE.PENDING,
      this.seriesPending(),
      this.onDeleteSeries.bind(this),
      this.setScoreSeries.bind(this)
    );
    new SeriesList(
      ".series-watched > div",
      LIST_TYPE.WATCHED,
      this.seriesWatched(),
      this.onDeleteSeries.bind(this),
      this.setScoreSeries.bind(this)
    );
  }

  seriesPending(): Array<iSeries> {
    return this.seriesArray.filter((film) => !film.watched);
  }

  seriesWatched(): Array<iSeries> {
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

  onDeleteSeries(id: number): void {
    this.seriesArray = this.seriesArray.filter((series) => series.id !== id);
    this.render();
  }

  setScoreSeries(id: number, score: number): void {
    this.seriesArray = this.seriesArray.map((series) => {
      console.log(series);
      const current = <iSeries>{ ...series };
      if (series.id === id) {
        current.watched = true;
        current.score = score;
      }
      return current;
    });
    this.render();
  }
}
