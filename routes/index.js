var express = require('express');
var reportController = require('../controllers/reportController');
var router = express.Router();

/* post home page. */
router.post('/create', function(req, res, next) {
  reportController.create(req, res);
});

router.post('/get', function(req, res, next) {
  reportController.get(req, res);
});

router.get('/getall', function(req, res, next) {
  reportController.getall(req, res);
});
module.exports = router;
