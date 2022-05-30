import { iComponent } from "../interfaces/iComponent.js";
import { Component } from "./Component.js";

export class Header extends Component implements iComponent {
  constructor(selector: string) {
    super(selector, () => this.createTemplate());
    this.render();
  }

  createTemplate(): string {
    return "<h1>My Series</h1>";
  }
}

