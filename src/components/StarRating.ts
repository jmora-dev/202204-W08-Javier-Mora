import { iComponent } from "../interfaces/iComponent.js";
import { Component } from "./Component.js";

export class StarRating extends Component implements iComponent {
  constructor(
    public selector: string,
    public score: number,
    public onSetScore: (score: number) => void
  ) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  render(): void {
    super.render();
    document
      .querySelectorAll(this.selector + " li")
      .forEach((element, index) => {
        element.addEventListener("click", () => this.onSetScore(index + 1));
      });
  }

  createTemplate(): string {
    let html = '<ul class="score">';
    for (let i = 0; i < 5; i++) {
      html += `
       <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < i + 1 ? "far" : "fas"
          } fa-star" title="${i + 1}/5"></i>
        </li>`;
    }
    html += "</ul>";
    return html;
  }
}
