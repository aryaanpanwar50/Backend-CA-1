const express = require('express')
const app = express()


app.use(express.json())

const users =[
    {username : 'alice',age:25,email:"alice@example.com"},
    {username : 'bob',age:30,email:"bob@example.com"},
    {username : 'charlie',age:28,email:'charlie@example.com'}
];

const findUserByUsername = (username)=>{
    return users.find((d)=>d.username === username)
}



app.get('/get/:username',async(req,res)=>{
    try{
        const username = req.params.username;
        const data = findUserByUsername(username)
        if(!data){
            return res.status(404).json({"message":"User not found"})
        }
          res.status(200).json({"message":"User found","data":{data}})
        

    }catch(error){
        res.status(500).json({"message":"Server error",error:error.message})
    }

})

app.get('/get',async(req,res)=>{
    try{
        res.status(200).send(users)
    }catch(error){
        res.status(500).json({"message":"Server error",error:error.message})
    }
})





app.listen(4000,()=>{
    console.log(`The server is running on http://localhost:4000`)
})