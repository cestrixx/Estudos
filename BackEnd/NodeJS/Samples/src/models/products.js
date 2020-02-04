const sequence = {
    _id: 1,
    get nextId() { return this._id++ }
}

const products = {}

module.exports = app => {
    const add = (product) => {
        return new Promise((resolve, reject) => {
            if (product.id) {
                reject()
            }
            product.id = sequence.nextId
            products[product.id] = product
            resolve(product)
        })
    }

    const getAll = () => {
        return new Promise((resolve, reject) => {
            if (Object.entries(products).length === 0)
                reject()
            resolve(products)
        })
    }

    const getById = (id) => {
        const product = products[id];
        return new Promise((resolve, reject) => {
            if (product === undefined)
                reject()
            resolve(product)
        })
    }

    const update = (id, newProduct) => {
        const product = products[id]
        return new Promise((resolve, reject) => {
            if (product === undefined)
                reject()
            newProduct.id = id
            products[id] = newProduct
            resolve(newProduct)
        })
    }

    const remove = (id) => {
        const product = products[id];
        return new Promise((resolve, reject) => {
            if (product === undefined)
                reject()
            delete products[id]
            resolve(product)
        })
    }

    return { add, getAll, getById, update, remove }
}