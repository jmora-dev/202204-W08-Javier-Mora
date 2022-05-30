import { iComponent } from "../interfaces/iComponent.js";
import { Component } from "./Component.js";
import { Header } from "./Header.js";
import { Home } from "./Home.js";

export class App extends Component implements iComponent {
  constructor() {
    super("body", () => this.createTemplate());
    this.render();
    new Header(".main-header");
    this.navigateTo();
  }

  createTemplate(): string {
    return "<div class='container'><header class='main-header'></header><main class='main'></main></div>";
  }

  navigateTo(): void {
    const path = location.pathname.split("/");
    const selector = ".main";
    switch (path[path.length - 1]) {
      default:
        new Home(selector);
        break;
    }
  }
}
