import { SeriesCard } from "./SeriesCard.js";
import { Component } from "./Component.js";
export class SeriesList extends Component {
    constructor(selector, seriesArray) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.seriesArray = seriesArray;
        this.render();
    }
    render() {
        super.render();
        this.seriesArray.forEach((film) => new SeriesCard(this.selector + ` .serie[data-id="${film.id}"]`, film));
    }
    createTemplate() {
        let html = "<ul class='series-list series-list--watched'>";
        html += this.seriesArray
            .map((film) => `<li data-id="${film.id}" class="serie"></li>`)
            .join("");
        html += "</ul>";
        return html;
    }
}
