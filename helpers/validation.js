const { body } = require("express-validator");
const User = require("../models/user");

exports.signup = () => {
    return [
        body('name', 'Enter your name')
            .not()
            .isEmpty(),

        body('email', 'Invalid email')
            .isEmail()
            .normalizeEmail()
            .custom((value) => {
                return User.findOne({ where: { email: value } })
                    .then(user => {
                        if (user) {
                            return Promise.reject('Email already exists.');
                        }
                    })

            }),

        body('password', 'Password must be numbers and text and at least 3 characters')
            .isLength({ min: 3 })
            .isAlphanumeric()
            .trim()
    ]
}

exports.login = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .normalizeEmail(),

        body('password', 'Enter password')
            .not()
            .isEmpty()
            .trim()
    ];
}

exports.forget = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .normalizeEmail()
    ];
}

exports.reset = () => {
    return [
        body('password', 'Password must be numbers and text and at least 3 characters')
            .isLength({ min: 3 })
            .isAlphanumeric()
            .trim()
    ];
}