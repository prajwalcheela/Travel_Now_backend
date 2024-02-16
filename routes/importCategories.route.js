const categories = require("../db_data/category_info")
const Category = require("../models/category.model")

module.exports=(app)=>{
    app.post('/api/vi/categorydata',async (req,res)=>{
        try{
            await Category.deleteMany({})
            const category =await  Category.insertMany(categories.data)
            res.send(category)
        }catch(err){
            res.send({message:err.message})
            console.log(err)
        }
    })
}