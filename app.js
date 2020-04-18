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
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Mountain",
//     image:
//       "https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg",
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
      res.render("campgrounds", { campgrounds: camps });
    }
  });
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  // var newCampground = { name: name, image: image };
  // campgrounds.push(newCampground);
  Campground.create(
    {
      name: name,
      image: image,
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

app.listen(1234, function () {
  console.log("Yelpcamp has started");
});
