const express = require('express')
const router = express.Router()


router.get('/', (req, res, next)=>{
    const data={} 
    res.render('home',data)
})

router.get('/blog',(req,res,next) =>{
    const data={}
    res.render('blog',data)
})

router.get('/blog-single',(req,res,next) =>{
    const data={}
    res.render('blog-single',data)
})

router.get('/menu',(req,res,next) =>{
    const data={}
    res.render('menu',data)
})

router.get('/reservation',(req,res,next) =>{
    const data={}
    res.render('reservation',data)
})

module.exports = router