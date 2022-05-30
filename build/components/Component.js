export class Component {
    constructor(selector, callback) {
        this.selector = selector;
        this.callback = callback;
    }
    render() {
        const element = document.querySelector(this.selector);
        if (element) {
            element.innerHTML = this.callback();
        }
    }
    outRender() {
        const element = document.querySelector(this.selector);
        if (element) {
            element.outerHTML = this.callback();
        }
    }
    addRender() {
        const element = document.querySelector(this.selector);
        if (element) {
            element.innerHTML += this.callback();
        }
    }
}
