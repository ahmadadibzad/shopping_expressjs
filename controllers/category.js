const Category = require("../models/category");
const Product = require("../models/product");

exports.getCategory = (req, res, next) => {
    const catId = req.params.id;
    let foundCategory;

    const page = +req.query.page || 1;
    const offset = (page - 1) * parseInt(process.env.PAGINATION_LIMIT);
    let allProductsCount;

    Category.findByPk(catId)
        .then(category => {
            if (!category) {
                return [];
            }

            foundCategory = category;

            return Product.count({ where: { categoryId: catId } })
                .then(count => {
                    allProductsCount = count;

                    return Product.findAll({
                        where: { categoryId: catId },
                        limit: parseInt(process.env.PAGINATION_LIMIT),
                        offset: offset
                    });
                })
        })
        .then(products => {
            res.render('category', {
                category: foundCategory,
                products: products,
                count: allProductsCount,
                currentPage: page,
                limit: parseInt(process.env.PAGINATION_LIMIT),
                path: `/category/${catId}`
            });
        })
        .catch(err => { console.error(err); });
}