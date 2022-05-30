import { Component } from "./Component.js";
import { Header } from "./Header.js";
import { Home } from "./Home.js";
export class App extends Component {
    constructor(selector) {
        super(selector, () => this.createTemplate());
        this.selector = selector;
        this.render();
        new Header(".main-header");
        this.navigateTo();
    }
    createTemplate() {
        return "<div class='container'><header class='main-header'></header><main class='main'></main></div>";
    }
    navigateTo() {
        const path = location.pathname.split("/");
        const selector = ".main";
        switch (path[path.length - 1]) {
            default:
                new Home(selector);
                break;
        }
    }
}
