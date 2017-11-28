var x = 5;
var world = require("./ru.json")
function User(name) {
    this.name = name
}

User.prototype.hello = function (who) {
    console.log(world.Hello + " " +who.name);
};

console.log("User is required");
exports.User = User;// експорт отдельного модуля