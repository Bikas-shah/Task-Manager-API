const Task=require('../models/Task'); //import module

//defining routes
const getAllTasks=async(req,res)=>{ 
    try{
        const tasks=await Task.find({}); //find() used to carry all the data
        res.status(201).json({tasks});
    }catch(err){
        res.status(500).json({msg:err});  //msg{}: display error inside msg{...}
    }
}

const createTask=async(req,res)=>{
    //either call .save function() to store
    try{
            // const user=new Task(req.body);
            // const task=await user.save();

    //or call create() to store
        const task=await Task.create(req.body)  //create() used to create new user-data
        res.status(200).json({msg:'User Created..',task}); 
    }catch(err){
        res.status(500).json({msg:err});  //msg{}: display error inside msg{...}
    } 
}

const getTask=async(req,res)=>{
    try{
        const {id:taskID}=req.params //getting id value
        const task=await Task.findOne({_id:taskID}); //findOne() used to find by given id
        if(!task){
            return res.status(404).json({msg:`Invalid ID: ${taskID}`}) //checking Id
        }
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const deleteTask=async(req,res)=>{
    try{
        const {id:taskID}=req.params 
        const task=await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`Invalid ID: ${taskID}`})
        }
        res.status(200).json({msg:'Id Deleted..',task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

const updateTask=async(req,res)=>{
    try{
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,  // to display a new updated value
            runValidators:true,  // field validation
        });
        if(!task){
            return res.status(404).json({msg:`Invalid ID: ${taskID}`})
        }
        res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err});
    }
}

module.exports={
    getAllTasks, createTask, getTask, updateTask, deleteTask
}