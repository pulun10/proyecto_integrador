import config from '../config.js';
// import Model from '../models/products-mem.js';
// import Model from '../models/products-fs.js';
// import Model from '../models/products-mongodb.js';
import Model from '../models/products.js';

// const model = new Model();
// const model = Model.get('MEMORY');
// const model = Model.get('FILE SYSTEM');
// const model = Model.get('MONGODB');
const model = Model.get(config.PERSISTENCE_TYPE);
// creates PARA TESTING:
await model.createProduct({
    "image":"img/products/luffy.jpg",    
    "title":"luffy",
    "description":"Pop! one piece luffy",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Zoro.jpg",    
    "title":"zoro",
    "description":"Pop! one piece zoro",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Iron-Man.png",    
    "title":"iron man",
    "description":"Pop! iron man marvel",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Spiderman.jpg",    
    "title":"spiderman",
    "description":"Pop! spiderman marvel",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Thor.jpg",    
    "title":"Thor",
    "description":"Pop! thor marvel",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/freezer.jpg",    
    "title":"freezer",
    "description":"Pop! freezer dragon ball",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Vegeta.png",    
    "title":"Vegeta",
    "description":"Pop! Vegeta dragon ball",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Goku-blue.jpg",    
    "title":"Goku",
    "description":"Pop! Goku dragon ball",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/GOHAN.jpg",    
    "title":"Gohan",
    "description":"Pop! Gohan dragon ball",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Lightsaber-blue.png",    
    "title":"Lightsaber blue",
    "description":"Pop! Lightsaber blue star wars",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/lightsaber-green.png",    
    "title":"lightsaber green",
    "description":"Pop! lightsaber green star wars",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Mandalorian.png",    
    "title":"Mandalorian",
    "description":"Pop! Mandalorian star wars",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/darth-vader.jpg",    
    "title":"darth vader",
    "description":"Pop! darth vader star wars",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Star-Wars-Puzzle.jpg",    
    "title":"rompecabezas star wars",
    "description":"rompecabezas star wars de 18.000 piezas",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/mario.png",    
    "title":"mario",
    "description":"nintendo super mario bros",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Luigi.jpg",    
    "title":"Luigi",
    "description":"nintendo Luigi",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Dungeons-Box.jpg",    
    "title":"Dungeons and dragon",
    "description":"juego de mesa Dungeons and dragons",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Classic-Jenga.jpg",    
    "title":"Jenga",
    "description":"juego de mesa Jenga hasbro",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/Hasbro-Risk.jpg",    
    "title":"Risk",
    "description":"juego de mesa risk Hasbro",
    "price":"$2.000"
    });
await model.createProduct({
    "image":"img/products/MONOPOLY.png",    
    "title":"MONOPOLY",
    "description":"juego de mesa MONOPOLY Hasbro",
    "price":"$2.000"
    });
    
////////////////////////////////////////////////////////////////////////////////
//                                 API Get All                                //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async () => {
    const products = await model.getProducts();
    return products;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API Get One                                //
////////////////////////////////////////////////////////////////////////////////

const getProduct = async id => {
    const product = await model.getProduct(id);
    return product;
}

////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createProduct = async product => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Update                                //
////////////////////////////////////////////////////////////////////////////////

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Delete                                //
////////////////////////////////////////////////////////////////////////////////

const deleteProduct = async id => {
    const deletedProduct = await model.deleteProduct(id);
    return deletedProduct;
};


export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};