const mongoose=require("mongoose");

const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"PLease add username"]
        },
        email:{
            type:String,
            required:[true,"PLease add user email adress"],
            unique:[true,"Email is already taken"]
        },
        password:{
            type:String,
            required:[true,"PLease add password"],
            
        },

        

        
    },
    {
        timestamps:true,
    }
)

module.exports=mongoose.model("User",userSchema);