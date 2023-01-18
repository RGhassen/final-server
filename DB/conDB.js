const mongoose = require('mongoose') ;
require('dotenv').config()



// function to connect DB
const DBconnect = async ()=>{
    try {
        
        await mongoose.connect(process.env.MONGO_URI,
            {useNewUrlParser : true,
            useUnifiedTopology : true},()=>console.log("DB connected")) ;
        }
    catch (error) {
        console.log(error)
                  }
}

module.exports = DBconnect