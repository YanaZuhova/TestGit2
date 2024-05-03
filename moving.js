let article1 = document.getElementById("whyJs");
let article2 = document.getElementById("tekhno");

document.querySelectorAll("h3")[
   document.querySelectorAll("h3").lengh - 1 
];

console.log(article1);
console.log(article2);

article1.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
});

article2.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
});


let goTopBtn = document.getElementById("GoTop");

goTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});