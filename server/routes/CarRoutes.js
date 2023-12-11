const express =require('express');
const router = express.Router();
const CarsController = require('../controllers/CarsController');



router.get('/',CarsController.getCarsPage);


module.exports =router;