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
    return `
      <ul class="score">
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 1 ? "far" : "fas"
          } fa-star" title="1/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 2 ? "far" : "fas"
          } fa-star" title="2/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 3 ? "far" : "fas"
          } fa-star" title="3/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 4 ? "far" : "fas"
          } fa-star" title="4/5"></i>
        </li>
        <li class="score__star" role="button">
          <i class="icon--score ${
            this.score < 5 ? "far" : "fas"
          } fa-star" title="5/5"></i>
        </li>
      </ul>`;
  }
}
