const mongoose=require("mongoose");

require("dotenv").config({ path: 'ENV_FILENAME' });

const connectDb=(DATABASE_URL)=>{
    return mongoose.connect(DATABASE_URL).then((success)=>{
        console.log("Database connected Successfully");
    }).catch((error)=>{
        console.log("Database not connected");
        console.log(error);
    })
}

module.exports=connectDb;