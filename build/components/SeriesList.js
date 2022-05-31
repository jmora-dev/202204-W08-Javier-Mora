import { SeriesCard } from "./SeriesCard.js";
import { Component } from "./Component.js";
export var LIST_TYPE;
(function (LIST_TYPE) {
    LIST_TYPE[LIST_TYPE["WATCHED"] = 0] = "WATCHED";
    LIST_TYPE[LIST_TYPE["PENDING"] = 1] = "PENDING";
})(LIST_TYPE || (LIST_TYPE = {}));
export class SeriesList extends Component {
    constructor(selector, listType, seriesArray, onDeleteSeries, setScoreSeries) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.listType = listType;
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
        let html = `<ul class='series-list ${this.listType === LIST_TYPE.WATCHED ? "series-list--watched" : ""}'>`;
        html += this.seriesArray
            .map((film) => `<li data-id="${film.id}" class="serie"></li>`)
            .join("");
        html += "</ul>";
        return html;
    }
}
