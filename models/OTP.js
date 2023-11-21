const mongoose = request("mongoose");
 const OTPSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    }
 })




 //a function ->to send emails

 async function sendVerficationEmail(enail,otp){
    try{
        const mailResponse = await mailSender(email,"Verification Email from StudyNtion",otp);
        console.log("Email sent Successfully:",mailResponse);
    }
    catch(error){
        console.log("error occured while sending mails:",error);
        throw error;
    }
 }


OTPSchema.pre("save",async function(next)
{
    await sendVerificationEmail(this.email,this.otp);
    next(); 
})


 module.exports = mongoose.model("OTP",OTPSchema);