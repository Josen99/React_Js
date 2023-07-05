const express=require('express');
const jwt =require('jsonwebtoken');

const cors=require('cors');
const app=express();
const PORT=process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
const dummyUser = {
    username: 'user',
    password: 'password',
    name: 'John Doe'
};

const SECRET_KEY='MySecretKey';

app.post('/api/autenticate',(req,res)=>{
    const{username,password}= req.body;

    if(username===dummyUser.username&&password===dummyUser.password){
        const token =jwt.sign({name:dummyUser.name},SECRET_KEY,{expiresIn:'1h',});
        res.json({token});
    }else{
        res.status(401).json({message: 'inalid'})
    }
});

app.listen(PORT,()=>{
    console.log(`server in ascolto sulla porta ${PORT}`);
})
