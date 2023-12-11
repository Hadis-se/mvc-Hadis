const express =require('express');
const router = express.Router();
const TreesController = require('../controllers/TreesController');



router.get('/',TreesController.getTreesPage);


module.exports =router;