let express = require("express");
let app = express();
let db = [];

app.get("/", function (req, res) {
  res.send("http://localhost:8080/addNo/90  to add 90 to the database");
});
app.get("/addNo/:newNo", function (req, res) {
  db.push(parseInt(req.params.newNo));
  res.send(
    "Thank you!!!... Your new number " + req.params.newNo + " has been added"
  );
});
app.get("/deleteNo/:no", function (req, res) {
  removeElement(db, parseInt(req.params.no));
  res.send(
    "Thank you!!!... Your number " + req.params.no + " has been deleted"
  );
});

app.get("/getSum", function (req, res) {
  console.log(db.length);

  let sum = findSum(db);

  res.send("The sum of your numbers is " + sum);
});

app.get("/getAll", function (req, res) {
  res.send(toString(db));
});
app.listen(8080);

function removeElement(array, elem) {
  var index = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
  }
}

function findSum(ar) {
  let sum = 0;
  ar.forEach(element => {
    sum += element;
    console.log(element);
  });

  return sum;
}

function toString(ar) {
  let st = "";
  ar.forEach(function (elem, index) {
    st += index + "-" + elem + "<br>";
  });

  return st;
}