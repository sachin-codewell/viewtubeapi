const express = require('express');
const router = express.Router();
const { SearchVideo, Popular, Category} = require('../controller/controller');




router.get('/search',SearchVideo);
router.get('/mostpopular',Popular);
router.get('/category',Category);



module.exports = router;