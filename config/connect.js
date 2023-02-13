const mongoose=require("mongoose")
const connectDb=async()=>{
    try {
      mongoose.set('strictQuery', true)
      await mongoose.connect("mongodb://127.0.0.1:27017/myapp")
      console.log("db connect")
    } catch (error) {
      console.log(error)
    }
  }
module.exports=connectDb