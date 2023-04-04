exports.getContact = (req,res,next)=>{
    res.render('contact', {
        pageTitle: 'ContactUs',
        path: '/contact',
        formsCSS: true,
        productCSS: true
      });
};

exports.postContact = (req,res,next)=>{
    res.redirect('/success');
};

exports.success = (req, res, next) =>{
    res.render('success', {
        pageTitle: 'Success',
        path: '/success',
      });    
}