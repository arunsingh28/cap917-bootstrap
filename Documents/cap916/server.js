const express = require('express');
const expressLayouts = require("express-ejs-layouts");;
const app = express();

app.use(expressLayouts);
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        title : 'Home',
    })
})

//about  
app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About',
    })
})

// contact
app.get('/contact',(req,res)=>{
    res.render('contact',{
        title : 'Contact'
    })
})

// menu
app.get('/menu',(req,res)=>{
    res.render('menu',{
        title : 'Menu'
    })
})

// singup
app.get('/singup',(req,res)=>{
    res.render('sing',{
        title : 'SinghUp'
    })
})
// login
app.get('/login',(req,res)=>{
    res.render('login',{
        title : 'Login'
    })
})

// sides
app.get('/sides',(req,res)=>{
    res.render('side',{
        title : 'Sides'
    })
})

// beverages
app.get('/beverages',(req,res)=>{
    res.render('drink',{
        title : 'Beverages'
    })
})

// dessert
app.get('/dessert',(req,res)=>{
    res.render('dessert',{
        title : 'Dessert'
    })
})


app.get('/cart',(req,res)=>{
    res.render('cart',{
        title : 'Cart'
    })
})

app.get('/pizza',(req,res)=>{
    res.render('pizza',{
        title : 'pizza'
    })
})

const PORT = process.env.PORT | 3000;

app.listen(PORT,console.log(`Server running on PORT:${PORT}`))