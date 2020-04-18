var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/yelp_camp", {
  useNewUrlParser: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  desc: String,
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill",
//     image:
//       "https://media.istockphoto.com/photos/army-camp-picture-id468698534?k=6&m=468698534&s=612x612&w=0&h=8XPmv_PzFCIM6K40WQ_KFnCUN4ZejnIW0Hlnh4wdLKI=",
//     description: "Here is the description of etc etc",
//   },
//   function (err, camp) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Add new campground");
//       console.log(camp);
//     }
//   }
// );

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  Campground.find(function (err, camps) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { campgrounds: camps });
    }
  });
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  Campground.create(
    {
      name: name,
      image: image,
      description: desc,
    },
    function (err, camp) {
      if (err) {
        console.log(err);
      } else {
        console.log("Add new campground");
        console.log(camp);
      }
    }
  );
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
  res.render("new");
});

app.get("/campgrounds/:id", function (req, res) {
  res.render("show");
});

app.listen(1234, function () {
  console.log("Yelpcamp has started");
});
