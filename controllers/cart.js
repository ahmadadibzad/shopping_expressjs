const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getCart = (req, res, next) => {
    const userId = req.session.user?.id || 0;


    Cart.findAll({ where: { userId: userId }, include: Product })
        .then(cart => {
            const products = cart.map(c => { return c.product });
            const prices = products.map(p => p.price);
            let totalPrice = 0;
            if (prices.length > 0) {
                totalPrice = prices.reduce((x, y) => x + y);
            }
            
            res.render('cart', {
                path: '/cart',
                cart: cart[0],
                products: products,
                totalPrice: totalPrice,
                message: null
            });
        })
        .catch(err => { console.error(err); });
}

exports.postAddToCart = (req, res, next) => {
    const user = req.session.user;
    const productId = req.body.productId;

    if (!user || !productId) {
        return res.redirect('/');
    }

    Cart.findOne({ where: { userId: user.id, productId: productId } })
        .then(cart => {
            if (!cart) {
                return Cart.create({ userId: req.session.user.id, productId: req.body.productId });
            }

            return cart;
        })
        .then(result => {
            res.redirect('/cart');
        })
        .catch(err => { console.error(err); });
}

exports.postRemoveFromCart = (req, res, next) => {
    const user = req.session.user;
    const productId = req.body.productId;

    if (!user || !productId) {
        return res.redirect('/');
    }

    Cart.destroy({ where: { userId: user.id, productId: productId } })
        .then(result => {
            res.redirect('/cart');
        })
        .catch(err => { console.error(err); });
}