const User = require("../model/User");

const getUser=async(req,res)=>{
    try {
        const user =await User.find();
        res.json(user);
        
    } catch (error) {
        console.log(error)
        
    }

};

const createUsers=async(req,res)=>{
    try { const users=await User.create(req.body);
        res.json(users)
        
    } catch (error) {
        console.log(error)
        
    }
};

const updatedUser=async(req,res)=>{
    try { const newUser=await User.findByIdAndDelete(req.params.id,req.body)
        res.json(newUser)
    } catch (error) 
    {console.log(error)
        
    }
};


const deletedUser=async(req,res)=>{
try { const deleted=await User.findByIdAndDelete(req.params.id)
    res.json(deleted)
    
} catch (error) {
    console.log(error)
    
}
}

module.exports={getUser,createUsers,updatedUser,deletedUser}