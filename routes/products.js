const express=require('express');
const router=express.Router();
const products=[{
    id:1,name:"Laptop",price:1000
},{
    id:2,name:"Smartphone",price:500
}];
router.get('/',(req,res)=>{
   
    res.send(`All products are: ${products.map(p=>p.name).join(',')}`);
});
router.get('/:id',(req,res)=>{
    const productId=parseInt(req.params.id);
    const product=products.find(p=>p.id===productId);
    if(!product){
        return res.status(404).send("Product not found");
    }
    res.send(product);
});
router.post('/',(req,res)=>{
    const newProduct={
        id:products.length+1,   
        name:req.body.name,
        price:req.body.price
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
module.exports=router;
