var express = require('express');
var app = express();

app.use(express.static('.'));

app.use((req, res, next) => {
  var startTime = new Date()
  console.log(req.method + " " + req.url)

  res.on("finish", (x) => {
    var endTime = new Date()
    var timeTaken = endTime - startTime
    console.log("done " + timeTaken)
  })
  next()
})


var server = app.listen(3000, err => {
  console.log(err || "listening @ 3000")
});