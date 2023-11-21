const mongoose= reuire("mongoose");
reuire("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        usedNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB connected Succesfully"))
    .catch( (error)=>{
        console.log("DB Connceted Failed");
        console.error(error);
        process.exit(1);
    })
};