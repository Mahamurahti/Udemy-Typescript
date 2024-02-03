enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Eric",
  age: 24,
  hobbies: ["Movies", "Cooking"],
  role: Role.ADMIN,
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
