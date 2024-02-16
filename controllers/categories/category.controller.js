const Category = require("../../models/category.model")

const getAllCategories= async (req,res)=>{
    try{
        const categories = await Category.find({})
        return res.send(categories)
    }catch(err){
        res.status(500).send({message:err.message})
        console.log(err)
    }
}
module.exports=getAllCategories