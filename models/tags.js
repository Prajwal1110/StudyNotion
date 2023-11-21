const mongoose=required("mongoose");

const tagsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    descriton:{
        typr:String,
    },
    course:{
        type:mongoose.Schema.Type.ObectId,
        ref:"Course",

    },
});

module.exports =mongoose.model("Tag",tagsSchema);
