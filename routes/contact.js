const express= require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
});

router.post('/contact',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/success');
})
router.use('/success', (req, res, next) =>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'));
});
module.exports = router;
