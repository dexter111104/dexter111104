var Person = {
    firstName: "Tony",
    lastName: "Lee",
    age: 50,
    eyeColor: "Blue"
};

// List all properties
console.log("All properties of Person:");
for (var key in Person) {
    console.log(key + ": " + Person[key]);
}

// Delete age property
delete Person.age;

// Print object after deletion
console.log("\nPerson object after deleting 'age':");
for (var key in Person) {
    console.log(key + ": " + Person[key]);
}
