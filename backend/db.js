const mongoose = require("mongoose");
const mongoDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/GoFoodMern")
    .then(async () => {
      console.log("MongoDB Connected");
      const foodItemsCollection = mongoose.connection.db.collection("Food_Items");
      const foodItems = await foodItemsCollection.find({}).toArray()
      //console.log(foodItems)
      //console.log(food_data.find({}))
    })
    .catch((err) => console.log("Mongo Error"));
};
module.exports = mongoDB;
