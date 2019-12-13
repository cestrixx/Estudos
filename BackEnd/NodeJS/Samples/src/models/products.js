const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function add(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function get(id) {
    return produtos[id] || {}
}

function getAll() {
    return Object.values(produtos)
}

function update(id, produto) {
    const produto = produtos[id]
    return produto
}

function remove(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { add, get, getAll, remove }