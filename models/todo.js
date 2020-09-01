var mongoose=require("mongoose");
var todoSchema=new mongoose.Schema(
    {
        text:String
    }
)
module.exports=mongoose.model("Todo",todoSchema);