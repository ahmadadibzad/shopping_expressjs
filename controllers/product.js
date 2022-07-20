const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
    const page = +req.query.page || 1;
    const offset = (page - 1) * parseInt(process.env.PAGINATION_LIMIT);
    let allProductsCount;

    Product.count()
        .then(count => {
            allProductsCount = count;

            return Product.findAll({
                include: ['category'],
                limit: parseInt(process.env.PAGINATION_LIMIT),
                offset: offset
            });
        })
        .then(products => {
            res.render('index', {
                products: products,
                count: allProductsCount,
                currentPage: page,
                limit: parseInt(process.env.PAGINATION_LIMIT),
                path: ''
            });
        })
        .catch(err => { console.error(err); });
}

exports.getProduct = (req, res, next) => {
    const productId = req.params.id;
    const userId = req.session.user?.id || 0;

    Product.findByPk(productId, { include: ['category', 'carts'] })
        .then(product => {
            let isInCart = false;
            if (product && product.carts && product.carts.length > 0 && product.carts.find(c => c.userId == userId)) {
                isInCart = true;
            }

            res.render('product', {
                product: product,
                path: '/product',
                isInCart: isInCart
            });
        })
        .catch(err => { console.error(err); });
}