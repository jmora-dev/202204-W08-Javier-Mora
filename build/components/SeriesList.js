import { SeriesCard } from "./SeriesCard.js";
import { Component } from "./Component.js";
export class SeriesList extends Component {
    constructor(selector, seriesArray, onDeleteSeries, setScoreSeries) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.seriesArray = seriesArray;
        this.onDeleteSeries = onDeleteSeries;
        this.setScoreSeries = setScoreSeries;
        this.render();
    }
    render() {
        super.render();
        this.seriesArray.forEach((film) => new SeriesCard(this.selector + ` .serie[data-id="${film.id}"]`, film, this.onDeleteSeries.bind(this), this.setScoreSeries.bind(this)));
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
