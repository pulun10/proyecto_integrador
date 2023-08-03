import productController from '../controllers/product.js';

console.warn('🆗: Módulo PageInicio cargado.');

class PageInicio {

    static async renderTemplateCards(products) {
        const textoToRender = await fetch('/templates/cards.hbs').then(r => r.text());
        const template = Handlebars.compile(textoToRender);
        const html = template({ products });
        document.querySelector('.products-container').innerHTML = html;
    }

    static async init () {
        console.log('PageInicio.init()');

        const products = await productController.getProducts();
        PageInicio.renderTemplateCards(products);
    
        console.log(`Se encontraron ${products.length} productos.`);

    }
}

export default PageInicio;
