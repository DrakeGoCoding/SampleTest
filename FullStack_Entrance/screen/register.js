export class RegisterScreen extends HTMLElement{
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

customElements.define('register-screen', RegisterScreen);

const STYLE = `
    <style>

    </style>
`