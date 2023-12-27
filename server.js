const express =require ("express");
const dotenv = require ("dotenv");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/userRouter");
mongoose.set("strictQuery",false)

const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended :true}))
dotenv.config();
const port =process.env.port
mongoose.connect(process.env.db_URL).then(
    console.log('db connected')
)
app.use("/api",UserRouter);

app.listen(port,()=>{
    console.log(`server is runnig on ${port}`)
})
