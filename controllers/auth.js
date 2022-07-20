const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const { validationResult } = require("express-validator");
const transporter = require("../helpers/email");

const User = require("../models/user");

/**
 * صفحه لاگین
 */
exports.getLogin = (req, res, next) => {
    res.render('login', { path: '/login', message: null });
}

/**
 * عملیات لاگین
 */
exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const pass = req.body.password;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('login', {
            path: '/login',
            message: {
                type: 'danger',
                text: errors.array()[0].msg
            }
        });
    }

    User.findOne({ where: { email: email } })
        .then(user => {
            if (!user) {
                return res.status(422).render('login', {
                    path: '/login',
                    message: {
                        type: 'danger',
                        text: 'Invalid email or password.'
                    }
                })
            }

            //
            // هش کردن رمزعبور کاربر
            //
            bcrypt.compare(pass, user.password)
                .then(result => {
                    if (result) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            console.error(err);
                            res.redirect('/');
                        });
                    }

                    return res.status(422).render('login', {
                        path: '/login',
                        message: {
                            type: 'danger',
                            text: 'Invalid email or password.'
                        }
                    });
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
}

/**
 * صفحه ثبت نام
 */
exports.getSignup = (req, res, next) => {
    res.render('signup', { path: '/signup', message: null });
}

/**
 * عملیات ثبت نام
 */
exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const pass = req.body.password;
    const name = req.body.name;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('signup', {
            path: '/signup',
            message: {
                type: 'danger',
                text: errors.array()[0].msg
            }
        });
    }

    //
    // هش کردن رمزعبور کاربر
    //
    bcrypt.hash(pass, 12)
        .then(hashedPassword => {
            return User.create({ email: email, password: hashedPassword, fullName: name });
        })
        .then(newUser => {
            if (!newUser) {
                return res.status(500).render('signup', {
                    path: '/signup',
                    message: {
                        type: 'danger',
                        text: 'Failed to sign up. please try again.'
                    }
                });
            }

            //
            // ارسال ایمیل نتیجه ثبت نام
            //
            transporter.sendMail({
                to: email,
                from: process.env.SENDER_EMAIL,
                subject: 'Signup Succeed!',
                html: '<h1>You successfully signed up to shopping website!</h1>'
            });

            res.redirect('/login');
        })
        .catch(err => console.error(err));
}

/**
 * صفحه فراموشی رمزعبور
 */
exports.getForgetPassword = (req, res, next) => {
    res.render('forget-password', { path: '/forget-password', message: null });
}

/**
 * عملیات ارسال ایمیل برای فراموشی رمزعبور
 */
exports.postForgetPassword = (req, res, next) => {
    const email = req.body.email;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('forget-password', {
            path: '/forget-password',
            message: {
                type: 'danger',
                text: errors.array()[0].msg
            }
        });
    }

    //
    // تولید توکن برای فراموشی رمزعبور
    //
    return crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err);
            return res.status(500).render('forget-password', {
                message: {
                    type: 'danger',
                    text: 'Something was wrong. please try again'
                },
                path: '/forget-password'
            });
        }

        // تولید توکن با کتابخانه خود نود جی اس
        const token = buffer.toString('hex');

        return User.findOne({ where: { email: email } })
            .then(user => {
                if (!user) {
                    res.status(422).render('forget-password', {
                        path: '/forget-password',
                        message: {
                            type: 'danger',
                            text: 'This user is not exist.'
                        }
                    });

                    return null;
                }

                user.resetToken = token;
                return user.save()
                    .then(result => {
                        transporter.sendMail({
                            to: email,
                            from: process.env.SENDER_EMAIL,
                            subject: 'Password reset',
                            html: `
                            <p>You requested a password reset</p>
                            <p>Click <a href="${process.env.URL}:${process.env.PORT}/reset-password/${token}">here</a> to set a new password</p>
                            `
                        });

                        return res.render('forget-password', {
                            path: '/forget-password',
                            message: {
                                type: 'success',
                                text: 'Email was sent.'
                            }
                        });
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    });
}

/**
 * صفحه رمز عبور جدید
 */
exports.getResetPassword = (req, res, next) => {
    const resetToken = req.params.token;
    if (!resetToken) {
        return res.redirect('/');
    }

    User.findOne({ where: { resetToken: resetToken } })
        .then(user => {
            if (!user) {
                return res.status(404).render('reset-password', {
                    path: '/reset-password',
                    message: {
                        type: 'danger',
                        text: 'Invalid token'
                    },
                    userId: null,
                    token: null
                });
            }

            return res.render('reset-password', {
                path: '/reset-password',
                message: null,
                userId: user.id,
                token: resetToken
            });
        })
        .catch(err => { console.error(err) });
}

/**
 * عملیات تغییر رمز عبور کاربر
 */
exports.postResetPassword = (req, res, next) => {
    const token = req.body.token;
    const userId = req.body.userId;
    const newPassword = req.body.password;
    let resetUser;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).render('reset-password', {
            path: '/reset-password',
            message: {
                type: 'danger',
                text: errors.array()[0].msg
            },
            userId: userId,
            token: token
        });
    }

    User.findOne({ where: { id: userId, resetToken: token } })
        .then(user => {
            resetUser = user;
            return bcrypt.hash(newPassword, 12);
        })
        .then(hashedPassword => {
            resetUser.password = hashedPassword;
            resetUser.resetToken = null; // ستون توکن را خالی می کنیم که دیگر قابل استفاده نباشد
            return resetUser.save();
        })
        .then(result => {
            res.redirect('/login');
        })
        .catch(err => {
            console.error(err)
        });
}

/**
 * عملیات خروج
 */
exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.error(err);
        res.redirect('/');
    });
}