const mongoose = require ("mongoose");

const userSchema= mongoose.Schema({
User: {type:String,required:true}

})

module.exports = mongoose.model("User" , userSchema)