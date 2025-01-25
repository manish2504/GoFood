const express = require("express");
const router = express.Router();
 router.post("/foodData",(req,res)=>{
    try {
        // console.log(global.foodItems)
        // console.log(global.foodCategory)
        res.send([global.foodItems,global.foodCategory])
    } catch (error) {
        console.log(error.message);
        res.send("Server Error");
    }
 })

 module.exports = router;