const express=require('express');
const { getUser, createUsers, updatedUser, deletedUser ,} = require('../Controllers/userControllers');


const router=express.Router()

router.get("/users",getUser)

router.post("/users",createUsers)

router.put("/users/:id",updatedUser)

router.delete('/users/:id',deletedUser)

module.exports=router;