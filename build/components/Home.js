import { series } from "../data/seriesData.js";
import { Component } from "./Component.js";
import { SeriesList } from "./SeriesList.js";
export class Home extends Component {
    constructor(selector) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.seriesArray = series;
        this.render();
    }
    render() {
        super.render();
        new SeriesList(".series-pending > div", this.seriesPending(), this.onDeleteSeries.bind(this), this.setScoreSeries.bind(this));
        new SeriesList(".series-watched > div", this.seriesWatched(), this.onDeleteSeries.bind(this), this.setScoreSeries.bind(this));
    }
    seriesPending() {
        return this.seriesArray.filter((film) => !film.watched);
    }
    seriesWatched() {
        return this.seriesArray.filter((film) => film.watched);
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
    onDeleteSeries(id) {
        this.seriesArray = this.seriesArray.filter((series) => series.id !== id);
        this.render();
    }
    setScoreSeries(id, score) {
        this.seriesArray = this.seriesArray.map((series) => {
            console.log(series);
            const current = Object.assign({}, series);
            if (series.id === id) {
                current.watched = true;
                current.score = score;
            }
            return current;
        });
        this.render();
    }
}
