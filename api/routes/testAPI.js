var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API tester 11");
});

module.exports = router;