export class RecipeScreen extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowDom.innerHTML = `
            ${STYLE}
        `
    }
}

customElements.define('recipe-screen', RecipeScreen);

const STYLE = `
    <style>

    </style>
`