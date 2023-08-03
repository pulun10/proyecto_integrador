import mongoose from 'mongoose';
import DBMongoDB from './DB/MongoDB.js';

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    brand: String,
    category: String,
    shortDescription: String,
    longDescription: String,
    freeShipping: Boolean,
    ageFrom: Number,
    ageUpTo: Number,
    ageUnit: String,
    mainPhoto: String,
});

// Modelo del documento almacenado en la colección
const ProductsModel = mongoose.model('products', productSchema);

class ProductModelMongoDB {

    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - C: Create                              //
    ////////////////////////////////////////////////////////////////////////////////`

    async createProduct (product) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }
        try {
            const newProduct = new ProductsModel(product);
            await newProduct.save();
            return newProduct;
        } catch (error) {
            console.error('Error al intentar dar de alta el producto:', error.message);
            return {};
        }

    }


    ////////////////////////////////////////////////////////////////////////////////
    //                               CRUD - R: Read                               //
    ////////////////////////////////////////////////////////////////////////////////

    async getProducts () {
        if (!await DBMongoDB.connectDB()) {
            return [];
        }
        try {
            const products = await ProductsModel.find({});
            return products;
        } catch (error) {
            console.error('Error al intentar leer los productos:', error.message);
            return [];
        }
        
    }

    async getProduct (id) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }
        try {
            // const products = await ProductsModel.find({_id: id});
            // if (!products.length) {
            //     return {};
            // }
            // return products[0];
            // const product = await ProductsModel.findOne({_id: id}) || {};
            // return product;
            const product = await ProductsModel.findById(id) || {};
            return product;
        } catch (error) {
            console.error(`Error al intentar leer el producto #:${id}`, error.message);
        }
        return {};
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - U: Update                              //
    ////////////////////////////////////////////////////////////////////////////////`

    async updateProduct (id, product) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }
        try {
            // const updatedProduct = await ProductsModel.updateOne({_id: id}, {$set: product});
            // console.log('updatedProduct:', updatedProduct);
            
            // const updatedProduct = await ProductsModel.findOneAndUpdate({_id: id}, {$set: product});
            // const updatedProduct = await ProductsModel.findOneAndUpdate({_id: id}, {$set: product}, {
            //     returnDocument: 'after'
            // });
            const updatedProduct = await ProductsModel.findByIdAndUpdate(id, {$set: product}, {
                returnDocument: 'after'
            });
            return updatedProduct || {};
        } catch (error) {
            console.error(`Error al intentar actualizar el producto #:${id}`, error.message);
            return {};
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - D: Delete                              //
    ////////////////////////////////////////////////////////////////////////////////

    async deleteProduct (id) {
        if (!await DBMongoDB.connectDB()) {
            return {};
        }
        try {
            // await ProductsModel.deleteOne({_id: id});
            const deletedProduct = await ProductsModel.findByIdAndDelete(id) || {};
            return deletedProduct;
        } catch (error) {
            console.error(`Error al intentar eliminar el producto #:${id}`, error.message);
            return {};
        }
    };

}

export default ProductModelMongoDB;
