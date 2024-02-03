"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Eric",
    age: 24,
    hobbies: ["Movies", "Cooking"],
    role: Role.ADMIN,
};
let favouriteActivities;
favouriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
