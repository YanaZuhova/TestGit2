let dynamicDiv = document.getElementById("dynamic");

let users = [
    { name: "Yana", age:26 },
    { name: "Oli", age:35 },
];

// let result = [];
// for (const user of users) {
//     result.push()
// }

let userElements = users.map((user) => {
    let { name, age } = user;

    let userCard = document.createElement("div");
    userCard.className = "card";
    userCard.innerText = `${name} ${age}`;
    return userCard;
});

console.log(userElements);

// dynamicDiv.append(userElements[0], userElements[1]);

// dynamicDiv.append.apply(dynamicDiv, userElements);

dynamicDiv.append(...userElements);

console.log(...userElements);