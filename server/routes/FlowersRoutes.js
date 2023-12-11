const express =require('express');
const router = express.Router();
const FlowersController = require('../controllers/FlowersController');



router.get('/',FlowersController.getFlowersPage);


module.exports =router;