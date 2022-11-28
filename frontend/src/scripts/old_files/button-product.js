export default class ButtonProduct extends HTMLElement {
    #state = {
        counter: 1,
    };

    constructor() {
        super();
        this.render();
    }

    render() {
        const html = /*html*/
            `<button id="btn2" type="button">
                <img alt="-" src="http://localhost:3000/images/minus.png" class="buttonMinus"/>
            </button>
                <input class="quantity" type="text" value="${this.#state.counter}">
            <button id="btn1" type="button">
                <img alt="+" src="http://localhost:3000/images/plus.png" class="buttonPlus"/>
            </button>`;

        this.innerHTML = html;

        this.querySelector("#btn1")
            .addEventListener("click", this.increment.bind(this));

        this.querySelector("#btn2")
            .addEventListener("click", this.decrement.bind(this));
    }

    increment() {
        if (this.#state.counter < 20) {
            this.state = {
                ...this.#state,
                counter: this.#state.counter + 1,
            };
        }
    }

    decrement() {
        if (this.#state.counter > 1) {
            this.state = {
                ...this.#state,
                counter: this.#state.counter - 1,
            };
        }
    }

    set state(newState) {
        this.#state = newState;
        this.render();
        console.log(this.id);
    }
}

customElements.define("button-product", ButtonProduct);
