// require express and path
const express = require('express');
const path = require('path');

const app = express();

// defining port
const PORT = process.env.PORT || 3000;

//syncwith database
const db = require('./models');


//seting up server to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server setup the public directory for static assets usage
app.use(express.static(path.join(__dirname, './public')));

// Routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

//Syncs the db
db.sequelize.sync().then(function () {

})

//Starting server on the predefined Port
app.listen(PORT, function () {
    console.log(`App is now listening on PORT ${PORT}`)
});


/* var request = require("request"),
    csv = require("csv");

module.exports = function(app) {
    // accepts the POST form submit of the CSV file
    app.post("/api/black_List", function(req, res) {
        // the name under "files" must correspond to the name of the
        // file input field in the submitted form (here: "csvdata")
        csv().from.path(req.files.csvdata.path, {
            delimiter: ",",
            escape: '"'
        })
        // when a record is found in the CSV file (a row)
        .on("record", function(row, index) {
            var firstName, lastName;
            var time, sso, action, device_Id, count, message;

            // skip the header row
            if (index === 0) {
                return;
            }

            // read in the data from the row
            //firstName = row[0].trim();
            //lastName = row[1].trim();
            time = row[0].trim();
            sso = row[1].trim();
            action = row[2].trim();
            device_Id = row[3].trim();
            count = row[4].trim();
            message = row[5].trim();

            // perform some operation with the data
            // ...
        })
        // when the end of the CSV document is reached
        .on("end", function() {
            // redirect back to the root
            res.redirect("/");
        })
        // if any errors occur
        .on("error", function(error) {
            console.log(error.message);
        });
    });
}; */





