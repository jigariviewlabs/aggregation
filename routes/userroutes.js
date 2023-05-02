const express = require('express');
const router = express.Router();
const ItemController = require('../controller/aggregation');

router.get('/', async (req,res) => {
    res.send({"msg":"Hello World"})
})
router.post('/addItem',ItemController.itemdetails)
router.post('/addUnivercity', ItemController.univercitydetails)
router.post('/addCourse', ItemController.coursedetails)

module.exports = router;

