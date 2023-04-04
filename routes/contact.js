const express= require('express');

const router = express.Router();

const contactController = require('../controllers/contact')

router.get('/contact',contactController.getContact);

router.post('/contact',contactController.postContact)
router.post('/success', contactController.success);
module.exports = router;
