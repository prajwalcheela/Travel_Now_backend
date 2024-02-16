// const categories = require("../db_data/category_info")
const getAllCategories = require("../controllers/categories/category.controller")
const Category = require("../models/category.model")

module.exports=(app)=>{
    app.get('/api/v1/categories',getAllCategories)
}