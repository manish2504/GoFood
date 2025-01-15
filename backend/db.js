const mongoose = require("mongoose");
const mongoDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/GoFoodMern")
    .then(async () => {
      console.log("MongoDB Connected");
      const food_data = await mongoose.connection.db.collection("Food_Items");
      food_data.find({}).toArray(async function(err, data){
        if(err)console.log(err);
        else console.log(data);
      });
      console.log(food_data.find({}))
    })
    .catch((err) => console.log("Mongo Error"));
};
module.exports = mongoDB;
