require("dotenv").config();
const mongoose = require("mongoose");
const mongoDB = async () => {
  const dburi = process.env.MONGO_URI;
  await mongoose
    .connect(dburi)
    .then(async () => {
      console.log("MongoDB Connected");
      const foodItemsCollection = await mongoose.connection.db.collection("Food_Items");
      global.foodItems = await foodItemsCollection.find({}).toArray()
      const foodCategoryCollection = await mongoose.connection.db.collection("Food_Category");
      global.foodCategory = await foodCategoryCollection.find({}).toArray()
      //  console.log(foodItems)
      //console.log(food_data.find({}))
    })
    .catch((err) => console.log("Mongo Error"));
};
module.exports = mongoDB;
