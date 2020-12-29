export class LoginScreen extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowDom.innerHTML = `
            ${STYLE}
            <div class="login-container">
                <form id="login-form">
                    <h1>Cooking Recipe</h1>
                </form>
            </div>
        `
    }
}

customElements.define('login-screen', LoginScreen);

const STYLE = `
    <style>

    </style>
`