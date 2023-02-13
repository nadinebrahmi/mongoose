const express = require('express')
const app = express()
const port = 5000
const connectDb = require('./config/connect')
const User=require("./models/User")
require("dotenv").config({path:"./config/.env"});


const create=async()=>{
  try {
    const user1=  await User.insertMany([{name:"John",age:50, favoritesfood:["burritos"]},{name:"Mary",age:12,favoritesfood:["burritos","pizza"]},{name:"Mary",age:15,favoritesfood:[""]}])
    console.log(user1) 
  
    console.log("user create success");
} catch (error) {
    console.log(error)
}}



//method find
const find=async()=>{
  try {
    const user1=  await User.find()
    console.log(user1) 
  
    console.log("user find succes");
} catch (error) {
    console.log(error)
}}


//method findOne
const findOne=async()=>{
  try {
    const user1=  await User.findOne({name:"John"})
    console.log(user1) 
  
    console.log("user find succes");
} catch (error) {
    console.log(error)
}}

//method findOne
const findbyid=async(id)=>{
  try {
    const user1=  await User.findById(id)
    console.log(user1) 
  
    console.log("user findOne succes");
} catch (error) {
    console.log(error)
}}


//method update
const edit=async(id)=> {
  try {
      const user2=  await User.findById(id)
          user2.favoritesfood.push(pizza)
          user2.save()
      console.log("update succes");
  } catch (error) {
      console.log(error)
  }}
//method find andupdate
const update=async(id)=> {
  try {
      const user2=  await User.findByIdAndUpdate({_id:id},{age:54})
          user2.save()
      console.log("update succes");
  } catch (error) {
      console.log(error)
  }}
//method find anddelete
const findanddelete=async(id)=> {
  try {
      const user2=  await User.findByIdAndRemove(id,{age:54})
          
      console.log("update succes");
  } catch (error) {
      console.log(error)
  }}
//method delete many
const deletemany=async(id)=> {
  try {
      const user2=  await User.deleteMany({name:"Mary"})
          
      console.log("update succes");
  } catch (error) {
      console.log(error)
  }}
//Chain Search Query Helpers
var queryChain = async () => {
  try {
    const user2 = await User.find({ favoriteFoods: 'burritos' })
      .sort({ name: 1 })
      .limit(2)
      .select('-age')
      .exec((err, user2) => {
        if (err) return handleError(err);
        console.log(user2);
      });
  } catch (error) {
    console.log(error);
  }
};
connectDb()

/*
create()
find()
findOne()
findbyid()
edit()
update()
findanddelete()
deletemany()
queryChain() 
*/
app.listen(port, () => 
console.log(`app listening on port ${port}!`))