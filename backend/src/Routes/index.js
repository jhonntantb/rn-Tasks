const { Router } =require("express")
const tasks=require("./task")
const router=Router()

router.use("/tasks",tasks);
module.exports=router;

