class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const number = this.getAttribute('number') || '';
        const color = this.getAttribute('color') || 'gray';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                .ball {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background-color: ${color};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 2em;
                    color: white;
                    font-weight: bold;
                    margin: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                }
            </style>
            <div class="ball">${number}</div>
        `;
    }

    static get observedAttributes() {
        return ['number', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }
}

customElements.define('lotto-ball', LottoBall);
