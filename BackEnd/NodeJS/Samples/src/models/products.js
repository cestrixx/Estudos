const sequence = {
    _id: 1,
    get nextId() { return this._id++ }
}

const products = {}

exports.add = (product) => {
    return new Promise((resolve, reject) => {
        if (product.id) {
            reject();
        }
        product.id = sequence.nextId
        products[product.id] = product    
        resolve(product);
    })
};

exports.getAll = () => {
    return new Promise((resolve, reject) => {
         if (Object.entries(products).length === 0)
             reject();
        resolve(products);
    })
};

exports.get = (id) => {
    const product = products[id];
    return new Promise((resolve, reject) => {
       if (product === undefined)
            reject();
       resolve(product);
   })    
};

exports.update = (id, newProduct) => {
    console.log(id);
    console.log(newProduct)
    const product = products[id];
    return new Promise((resolve, reject) => {
        if (product === undefined)
            reject();
        newProduct.id = id;
        products[id] = newProduct;
        resolve(newProduct);
   })    
};

exports.remove = (id) => {
    const product = products[id];
    return new Promise((resolve, reject) => {
        if (product === undefined)
            reject();
        delete products[id];
        resolve(product);
   })    
};