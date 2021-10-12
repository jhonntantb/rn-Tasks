const { Router }=require("express")
const { Task }=require("../db")
const router=Router()

router.get("/",async(req,res,next)=>{
    try {
        const tasks= await Task.findAll();
        res.send(tasks)
    } catch (error) {
        next(error)
    }
    
})
router.get("/count",async(req,res,next)=>{
    try {
        const tasks=await Task.findAll();
        const taskCount=tasks.length
        res.send({tasks:taskCount}).status(200)
    } catch (error) {
        next(error)
    }
})
router.get("/:id",async(req,res,next)=>{
    const id=req.params.id
    try {
        const task=await Task.findOne({where:{id:id}})
        res.send(task)
    } catch (error) {
        next(error)
    }
})
router.post("/",async(req,res,next)=>{
    const task=req.body
    try {
        const newtask=await Task.create({
            title:task.title,
            description:task.description
        })
        res.send(newtask.dataValues)
    } catch (error) {
        next(error)
    }
})
router.delete("/",async(req,res,next)=>{
    const id=req.body.id
    try {
        const result=await Task.destroy({where:{id:id}})
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
})
router.put("/",async(req,res,next)=>{
    const id=req.body.id
    const changes=req.body.changes
    try {
        const taskUpdate=await Task.update(changes,{where:{id:id}})
        res.send(taskUpdate)
    } catch (error) {
        
    }
})

module.exports=router