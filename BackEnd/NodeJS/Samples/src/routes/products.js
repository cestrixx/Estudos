let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var controller = require('../controllers/products');

router.route('/products')
    .get(controller.getAll)
    .post(controller.add);

router.route('/products/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;