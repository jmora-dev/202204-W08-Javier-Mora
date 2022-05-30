import { iComponent } from "../interfaces/iComponent.js";
import { Film } from "../models/Film.js";
import { CardFilm } from "./CardFilm.js";
import { Component } from "./Component.js";

export class FilmList extends Component implements iComponent {
  constructor(public selector: string, public films: Array<Film>) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  render(): void {
    super.render();
    this.films.forEach(
      (film) =>
        new CardFilm(this.selector + ` .serie[data-id="${film.id}"]`, film)
    );
  }

  createTemplate(): string {
    let html = "<ul class='series-list series-list--watched'>";
    html += this.films
      .map((film) => `<li data-id="${film.id}" class="serie"></li>`)
      .join("");
    html += "</ul>";
    return html;
  }
}
