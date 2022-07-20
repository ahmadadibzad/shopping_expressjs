const transporter = require("../helpers/email");
const Cart = require("../models/cart");
const Order = require("../models/order");
const Product = require("../models/product");

exports.getOrders = (req, res, next) => {
    const userId = req.session.user?.id || 0;

    return Order.findAll({ where: { userId: userId }, order: [['id', 'DESC']] })
        .then(orders => {
            return res.render('orders', { path: '/orders', orders: orders });
        })
        .catch((err) => console.error(err));
}

exports.postOrder = (req, res, next) => {
    const userId = req.session.user?.id;
    let totalPrice = 0;

    if (!userId) {
        return res.redirect('/');
    }

    Cart.findAll({ where: { userId: userId }, include: Product })
        .then(cart => {
            const products = cart.map(c => { return c.product });
            const prices = products.map(p => p.price);

            if (prices.length > 0) {
                totalPrice = prices.reduce((x, y) => x + y);

                return Order.create({ userId: userId, totalPrice: totalPrice });
            } else {
                return null;
            }
        })
        .then(order => {
            if (!order) {
                return res.render('cart', {
                    path: '/cart',
                    message: {
                        type: 'danger',
                        text: 'Order failed'
                    }
                });
            }

            //
            // ارسال رسید خرید به ایمیل کاربر
            //
            return transporter.sendMail({
                to: req.session.user.email,
                from: process.env.SENDER_EMAIL,
                subject: 'Order Succeed!',
                html: `
                    <p>You successfully ordered $${totalPrice}</p>
                    `
            });
        })
        .then(emailResult => {
            return Cart.destroy({ where: { userId: userId } })
        })
        .then(result => {
            return res.redirect('/orders');
        })
        .catch((err) => console.error(err));
}