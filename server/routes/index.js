var express = require('express');
var router = express.Router();

router.post("/domain/User/:id/:method", function(req, res, next) {
    let [name, captcha] = req.body;
    if(captcha && captcha === req.session.captcha){
      next();
    }else{
      res.send({error:{ captcha : "captcha error!" }});
    }
  });

router.get('/topics', function(req,res){
  // .Topic is from Action Topic.js, will gengrate the db data automatically
  req.dbs.Topic.find({}, function(err, topics){
    res.send(topics);
  });
});
module.exports = router;
