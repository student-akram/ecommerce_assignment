const express=require('express');
const router=express.Router();

//Get all users
const users=[{
    id:1,name:"Akram",email:"akramshaik2004@gmail.com",
},{
    id:2,name:"John Doe",email:"saleemshaiks1432@gmail.com"
}
]
router.get('/',(req,resp)=>{
    const names=users.map(user=>user.name).join(',');
    
    resp.send(`Users: ${names}`);
})
router.get('/:id',(req,resp)=>{
    const userId=parseInt(req.params.id);
    const user=users.find(u=>u.id===userId);
    if(!user){
        return resp.status(404).send("User not found");
    }       
});
router.post('/',(req,resp)=>{
    const newUser={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(newUser);
    resp.status(201).send(newUser);
});

module.exports=router;