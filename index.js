const dotenv = require('dotenv').config({ path: './variables.env' });
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const sequelize = require('./helpers/database');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false })); 1
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false, store: new SequelizeStore({ db: sequelize }) }));

app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn;
  next();
});

const Product = require('./models/product');
const Category = require('./models/category');
const User = require('./models/user');
const Cart = require('./models/cart');
const Order = require('./models/order');

//
// Define relations
//
Category.hasMany(Product);
Product.belongsTo(Category);
Product.hasMany(Cart);
Cart.belongsTo(Product);
User.hasMany(Cart);
Cart.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);

app.use(productRouter);
app.use(authRouter);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found', path: '' });
});

sequelize
  //.sync({ force: true })
  .sync()
  .then(result => {
    app.listen(process.env.PORT);
  }).catch((err) => {
    console.error(err);
  });