const express = require('express')
const mongoDB = require('./db');
const { default: mongoose } = require('mongoose');
const router = require('./Routes/createUser');
const app = express()
const port = 5000
mongoDB();
// const UserSchema = mongoose.Schema({
//   name:{
//     type:String,
//   },
// })
// const User = mongoose.model('user',UserSchema);
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',router);
app.use('/api',require("./routes/DisplayData"));
app.use('/api',require("./routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})