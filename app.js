var express = require("express");
var app = express();

// Habilitamos CORS (Cross-origin resource sharing)
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Establezco el Base Path
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendfile('index.html');
});

app.post("/getData", function(req, res) {
  var profesores = [
    {
      nombre: "Marcos",
      curso: "jQuery"
    },
    {
      nombre: "Borja",
      curso: "Angular JS"
    },
    {
      nombre: "Arturo",
      curso: "Promises"
    },
    {
      nombre: "Matias",
      curso: "Node JS"
    }
  ];

  res.json(profesores);
});

var port = 5001;
app.listen(port, function() {
 console.log("Listening on " + port);
});
