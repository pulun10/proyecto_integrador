
class Main {

    async ajax(url, method = 'get') {
        return await fetch(url, { method: method }).then(r => r.text());
    }

    getIdFromHash() {
        let id = location.hash.slice(1);
        if (id[0] === '/') {
            id = id.slice(1);
        }
        return id || 'home';
    }

    getViewUrlFromId(id) {
        return `views/${id}.html`;
    }

    getModuleUrlFromId(id) {
        return `./modules/${id}.js`;
    }

    setActiveLink(id) {
        const links = document.querySelectorAll('.main-nav__link');
        links.forEach(link => {
            if (link.getAttribute('href') === `#/${id}`) {
                link.classList.add('main-nav__link--active');
                link.ariaCurrent = 'page';
            } else {
                link.classList.remove('main-nav__link--active');
                link.removeAttribute('aria-current');
            }
        });
    }

    async initJS(id) {
        const moduleUrl = this.getModuleUrlFromId(id);
        try {
            const {default: module} = await import(moduleUrl);
            if (typeof module.init !== 'function') {
                console.error(`El módulo ${id} no posee un método init().`);
                return;
            }
            module.init();
        } catch (error) {
            console.error(`No se pudo importar el módulo ${moduleUrl}.`);
        }
    }

    async loadTemplate() {
        const id = this.getIdFromHash();
        
        const viewUrl = this.getViewUrlFromId(id);
        const viewContent = await this.ajax(viewUrl);
        document.querySelector('main').innerHTML = viewContent;

        this.setActiveLink(id);

        this.initJS(id);
    }

    async loadTemplates() {
        this.loadTemplate();
        window.addEventListener('hashchange', () => this.loadTemplate());
    }

    async start() {
        await this.loadTemplates();
    }
}

// nav toggle
const btnNav = document.querySelector('.btn-nav');
const nav = document.querySelector('nav');
btnNav.addEventListener('click', () => {
    if(!nav.classList.contains('nav-active')){
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
})

//cart
const btnCart = document.querySelector('.btn-cart');
const modalContainer = document.querySelector('.cart-modal-container');
// console.log(btnCart);

let modalVisible = false;
btnCart.addEventListener('click',function(){
    if (modalVisible){
        console.log('Cerrar carrito');
        closeModal();
    } else {
        console.log('Abrir carrito');
        btnCart.classList.add('btn-cart-active');
        modalContainer.classList.add('cart-modal-container-active');
        modalVisible = true;
    }
});

const closeModal = () => {
    btnCart.classList.remove('btn-cart-active');
    modalContainer.classList.remove('cart-modal-container-active');
    modalVisible = false;
}

const closeModalClick = () => window.addEventListener('click', e => {
    if (!e.target.closest('.cart-modal-container') && !e.target.closest('.btn-cart') && modalVisible == true){
        closeModal();
        return;
    } 
})
closeModalClick();

window.addEventListener('keydown', function (e){
    // console.log(e);
    console.log(e.key);
    if (e.key === 'Escape'){
        closeModal();
        console.log('Cerrar modal');
    }
});

modalContainer.addEventListener('click', e => {
    if (e.target.classList.contains('btn-clear-product')){
        console.log(e.target);
        console.log('Botón de eliminar presionado');
        return;
    }
    if (e.target.classList.contains('btn-close-modal')){
        closeModal();
        return;
    }
})

//title change
const title = document.getElementsByTagName('title')[0];
title.textContent = title.textContent +' - '+'Manuel Alejandro Rodríguez Guerra'+' - '+'Proyecto Integrador: Juguetería Cósmica';



const main = new Main();
main.start();
