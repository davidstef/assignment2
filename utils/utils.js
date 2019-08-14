const fs = require('fs')

function retUsers(usersPath) {
    const data = fs.readFileSync(usersPath, { encoding: "utf8" });
    const details = data.split("\r\n");
    const info = details[0].split(",");
    var users = [];
    var i = 0;
    for (i = 1; i < details.length; i++) {
        var aux = details[i].split(",");
        var user = {};
        for (var j = 0; j < info.length; j++) {
            user[info[j]] = aux[j];
        }
        users.push(user);
    }
    return users
}

module.exports = retUsers