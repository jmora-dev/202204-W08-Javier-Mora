import { series } from "../data/seriesData.js";
import { Series } from "../models/Series.js";
import { Component } from "./Component.js";
import { SeriesList } from "./SeriesList.js";
export class Home extends Component {
    constructor(selector) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.seriesList = this.getSeries();
        this.render();
    }
    render() {
        super.render();
        new SeriesList(".series-pending > div", this.seriesPending());
        new SeriesList(".series-watched > div", this.seriesWatched());
    }
    getSeries() {
        return series.map((data) => new Series(data.id, data.name, data.creator, data.year, data.poster, data.watched, data.score, data.emmies));
    }
    seriesPending() {
        return this.seriesList.filter((film) => !film.watched);
    }
    seriesWatched() {
        return this.seriesList.filter((film) => film.watched);
    }
    createTemplate() {
        return `
      <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          ${this.seriesPending().length > 0
            ? `<p class="info">You have ${this.seriesPending().length} series pending to watch</p>`
            : `<p class="info">You don't have any series pending to watch</p>`}
          <div></div>
        </section>
        <section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          ${this.seriesWatched().length > 0
            ? `<p class="info">You have watched ${this.seriesWatched().length} series</p>`
            : `<p class="info">You don't have watched any series</p>`}
          <div></div>
        </section>
      </section>`;
    }
}
