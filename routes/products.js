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
router.get('/:id', (req,res,next)=>{
  
  const product = null; // simulate error

  if(!product){
    const error = new Error("Product not found");
    error.status = 404;
    return next(error);
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
