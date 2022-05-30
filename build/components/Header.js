import { Component } from "./Component.js";
export class Header extends Component {
    constructor(selector) {
        super(selector, () => this.createTemplate());
        this.render();
    }
    createTemplate() {
        return "<h1>My Series</h1>";
    }
}
