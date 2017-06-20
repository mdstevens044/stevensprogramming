var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var FOLDERS_COLLECTION = "folders";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// FOLDERS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/folders"
 *    GET: finds all folders
 *    POST: creates a new folder
 */

app.get("/api/folders", function(req, res) {
  db.collection(FOLDERS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get folders.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/folders", function(req, res) {
  var newFolder = req;
  console.log(req.body);
  db.collection(FOLDERS_COLLECTION).insertOne(newFolder, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new folder.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/folders/:id"
 *    GET: find folders by id
 *    PUT: update folders by id
 *    DELETE: deletes folders by id
 */

app.get("/api/folders/:id", function(req, res) {
  db.collection(FOLDERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get folder");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/folders/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(FOLDERS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update folder");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/folders/:id", function(req, res) {
  db.collection(FOLDERS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete folder");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
