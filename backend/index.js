const express = require('express')
const mongoDB = require('./db');
const { default: mongoose } = require('mongoose');
const app = express()
const port = process.env.PORT || 5000
mongoDB();
// const UserSchema = mongoose.Schema({
//   name:{
//     type:String,
//   },
// })
// const User = mongoose.model('user',UserSchema);
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin",process.env.ALLOWED_ORIGIN);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-Width, Content-Type, Accept"
//   );
//   next();
// })
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api',require("./routes/createUser"));
app.use('/api',require("./routes/DisplayData"));
app.use('/api',require("./routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})