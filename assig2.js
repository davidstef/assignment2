const express = require('express')
const app = express()
const mustacheExpress = require("mustache-express")
const PORT = 8080



const fs = require('fs')
const data = fs.readFileSync("posts.csv", { encoding: "utf8" });
const details = data.split("\r\n");
const info = details[0].split(",");
var users = [];
var i = 0;

console.log(info)

for (i = 1; i < details.length; i++) {
    var aux = details[i].split(",");
    var user = {};

    for (var j = 0; j < info.length; j++) {
        user[info[j]] = aux[j];
    }
    users.push(user);
}

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.get('/blog', (req, res) => {
    res.render('users', { users: users })
})

app.listen(PORT, (req, res) => {
    console.log("Server is running on..." + PORT)
})

