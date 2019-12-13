const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

exports.add = (product) => {
    return new Promise((resolve, reject) => {
        if (product.id) {
            reject();
        }
        product.id = sequence.id
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
    if (products[id] === undefined) {
        console.log("Undefined");
        console.log(products[id]);
    } else {
        console.log("Not Undefined");
        console.log(products[id]);
    }

    return new Promise((resolve, reject) => {
        if (products[id] === undefined) {
            reject();
        } else {
            resolve(produtos[id]);
        }
    })
};

exports.remove = (id) => {
    console.log(products[id]);
    const newLocal = products[id];
    return new Promise((resolve, reject) => {
        if (newLocal === undefined)
            reject();
        else {
            delete newLocal;
            resolve();
        }
    })
};