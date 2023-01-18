const express = require ('express');
const {getProducts,addProducts,updateProducts,deleteProducts} = require ('../controllers/productController.js')

const productRouter = express.Router();

productRouter.get("/getproducts", getProducts);

productRouter.post("/addproducts", addProducts);

productRouter.put("/updateproducts", updateProducts);

productRouter.post("/deleteproducts", deleteProducts);

module.exports = productRouter ;
