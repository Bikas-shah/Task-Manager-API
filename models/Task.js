const mongoose=require('mongoose'); //defining mongoose


const TaskSchema=new mongoose.Schema({  //defining format
    name:{
        type:String,
        required:[true,'Name field required'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports=mongoose.model('Task',TaskSchema) //storing data in table 'Task' i.e. tasks (auto plural and lowercase)