import { Component } from "./Component.js";
export class StarRating extends Component {
    constructor(selector, score, onSetScore) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.score = score;
        this.onSetScore = onSetScore;
        this.render();
    }
    render() {
        super.render();
        document
            .querySelectorAll(this.selector + " li")
            .forEach((element, index) => {
            element.addEventListener("click", () => this.onSetScore(index + 1));
        });
    }
    createTemplate() {
        let html = '<ul class="score">';
        for (let i = 0; i < 5; i++) {
            html += `
       <li class="score__star" role="button">
          <i class="icon--score ${this.score < i + 1 ? "far" : "fas"} fa-star" title="${i + 1}/5"></i>
        </li>`;
        }
        html += "</ul>";
        return html;
    }
}
