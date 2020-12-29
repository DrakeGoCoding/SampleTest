var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
    .on({
        'login': function () {
            redirect('login')
        },
        'register': function () {
            redirect('register')
        },
        'recipe': function () {
            redirect('recipe')
        },
        '*': function () {
            router.navigate('login')
        }
    })
    .resolve();

function redirect(screenName) {
    if (screenName === 'register') {
        document.getElementById('main-container').innerHTML = `
            <register-screen></register-screen>
        `
    } else if (screenName === 'login') {
        document.getElementById('main-container').innerHTML = `
            <login-screen></login-screen>
        `
    } else if (screenName === 'recipe') {
        document.getElementById('main-container').innerHTML = `
            <recipe-screen></recipe-screen>
        `
    }
}