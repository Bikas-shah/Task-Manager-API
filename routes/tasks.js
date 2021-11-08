const express=require("express");
const router=express.Router() //To seperate the routes from the main file & to create new route object

const {getAllTasks, createTask, getTask, updateTask, deleteTask}=require('../controllers/tasks'); //import controller

// router.route('/').get((req,res)=>{  //defining home page route 
//     res.send('all items');
// })
router.route('/').get(getAllTasks).post(createTask) //defining home page route 
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)  //defining home page route that contain id

module.exports=router //Routes will go here