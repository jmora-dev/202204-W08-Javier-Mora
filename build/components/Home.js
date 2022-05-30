import { series } from "../data/filmsData.js";
import { Film } from "../models/Film.js";
import { Component } from "./Component.js";
import { FilmList } from "./FilmList.js";
export class Home extends Component {
    constructor(selector) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.films = this.getFilms();
        this.render();
    }
    render() {
        super.render();
        new FilmList(".series-pending > div", this.filmsPending());
        new FilmList(".series-watched > div", this.filmsWatched());
    }
    getFilms() {
        return series.map((data) => new Film(data.id, data.name, data.creator, data.year, data.poster, data.watched, data.score, data.emmies));
    }
    filmsPending() {
        return this.films.filter((film) => !film.watched);
    }
    filmsWatched() {
        return this.films.filter((film) => film.watched);
    }
    createTemplate() {
        return `
      <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          ${this.filmsPending().length > 0
            ? `<p class="info">You have ${this.filmsPending().length} series pending to watch</p>`
            : `<p class="info">You don't have any series pending to watch</p>`}
          <div></div>
        </section>
        <section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          ${this.filmsWatched().length > 0
            ? `<p class="info">You have watched ${this.filmsWatched().length} series</p>`
            : `<p class="info">You don't have watched any series</p>`}
          <div></div>
        </section>
      </section>`;
    }
}
