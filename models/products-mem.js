
class ProductModelMem {

    products = [ {
        "image":"img/products/luffy.jpg",    
        "title":"luffy",
        "description":"Pop! one piece luffy",
        "price":"$2.000"
        }, 
        {
        "image":"img/products/Zoro.jpg",    
        "title":"zoro",
        "description":"Pop! one piece zoro",
        "price":"$2.000"
        },
        {
        "image":"img/products/Iron-Man.png",    
        "title":"iron man",
        "description":"Pop! iron man marvel",
        "price":"$2.000"
        },
        {
        "image":"img/products/Spiderman.jpg",    
        "title":"spiderman",
        "description":"Pop! spiderman marvel",
        "price":"$2.000"
        },
        {
        "image":"img/products/Thor.jpg",    
        "title":"Thor",
        "description":"Pop! thor marvel",
        "price":"$2.000"
        },
        {
        "image":"img/products/freezer.jpg",    
        "title":"freezer",
        "description":"Pop! freezer dragon ball",
        "price":"$2.000"
        },
        {
        "image":"img/products/Vegeta.png",    
        "title":"Vegeta",
        "description":"Pop! Vegeta dragon ball",
        "price":"$2.000"
        },
        {
        "image":"img/products/Goku-blue.jpg",    
        "title":"Goku",
        "description":"Pop! Goku dragon ball",
        "price":"$2.000"
        },
        {
        "image":"img/products/GOHAN.jpg",    
        "title":"Gohan",
        "description":"Pop! Gohan dragon ball",
        "price":"$2.000"
        },
        {
        "image":"img/products/Lightsaber-blue.png",    
        "title":"Lightsaber blue",
        "description":"Pop! Lightsaber blue star wars",
        "price":"$2.000"
        },
        {
        "image":"img/products/lightsaber-green.png",    
        "title":"lightsaber green",
        "description":"Pop! lightsaber green star wars",
        "price":"$2.000"
        },
        {
        "image":"img/products/Mandalorian.png",    
        "title":"Mandalorian",
        "description":"Pop! Mandalorian star wars",
        "price":"$2.000"
        },
        {
        "image":"img/products/darth-vader.jpg",    
        "title":"darth vader",
        "description":"Pop! darth vader star wars",
        "price":"$2.000"
        },
        {
        "image":"img/products/Star-Wars-Puzzle.jpg",    
        "title":"rompecabezas star wars",
        "description":"rompecabezas star wars de 18.000 piezas",
        "price":"$2.000"
        },
        {
        "image":"img/products/mario.png",    
        "title":"mario",
        "description":"nintendo super mario bros",
        "price":"$2.000"
        },
        {
        "image":"img/products/Luigi.jpg",    
        "title":"Luigi",
        "description":"nintendo Luigi",
        "price":"$2.000"
        },
        {
        "image":"img/products/Dungeons-Box.jpg",    
        "title":"Dungeons and dragon",
        "description":"juego de mesa Dungeons and dragons",
        "price":"$2.000"
        },
        {
        "image":"img/products/Classic-Jenga.jpg",    
        "title":"Jenga",
        "description":"juego de mesa Jenga hasbro",
        "price":"$2.000"
        },
        {
        "image":"img/products/Hasbro-Risk.jpg",    
        "title":"Risk",
        "description":"juego de mesa risk Hasbro",
        "price":"$2.000"
        },
        {
        "image":"img/products/MONOPOLY.png",    
        "title":"MONOPOLY",
        "description":"juego de mesa MONOPOLY Hasbro",
        "price":"$2.000"
        }];
    lastId = 0;
    getNextId () {
        return (++this.lastId).toString();
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - C: Create                           //
    ////////////////////////////////////////////////////////////////////////////////

    async createProduct (product) {
        product.id = this.getNextId();
        this.products.push(product);
        return product;
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - R: Read                             //
    ////////////////////////////////////////////////////////////////////////////////

    async getProducts () {
        return this.products;
    }

    async getProduct (id) {
        return this.products.find(product => product.id === id) || {};
    };

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - U: Update                           //
    ////////////////////////////////////////////////////////////////////////////////

    async updateProduct (id, product) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return {};
        }
        product.id = id;
        this.products[index] = product;
        return product;
    };

    ////////////////////////////////////////////////////////////////////////////////
    //                                 CRUD - D: Delete                           //
    ////////////////////////////////////////////////////////////////////////////////

    async deleteProduct (id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            return {};
        }
        const removedProduct = this.products.splice(index, 1)[0];
        return removedProduct;
    };

}

export default ProductModelMem;
