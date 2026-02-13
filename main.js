const express=require('express');
const app=express();
const userRoutes=require('./routes/users');
const productRoutes=require('./routes/products');
const cartRoutes=require('./routes/cartManagement');
app.get('/',(req,resp)=>{
    resp.send("Welcome to the E-commerce API");
});
app.use(express.json());
app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);

app.use((req,res)=>{
    res.status(404).send("Route not found");
});
app.listen(5000,()=>{
    console.log("Server is running http://localhost:5000");
    
})
