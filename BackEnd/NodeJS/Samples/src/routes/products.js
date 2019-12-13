let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var productsController = require('../controllers/products');

router.route('/products')
    .get(productsController.getAll)
    .post(productsController.add);

router.route('/products/:id')
    .get(productsController.get)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;