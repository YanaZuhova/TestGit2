// import { arts, dataArt } from "./articleCreation.js";

import data from "./articlesService.json" with { type: "json" };

let articles = document.getElementById("allArticles");
articles.innerText = "Все статьи (3)";

let sectionArt = document.getElementById("withArticles");
let contacts = document.getElementById("contacts");
let sectionCont = document.getElementById("withContacts");

let goTopBtn = document.getElementById("GoTop");

goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth" });
}

articles.addEventListener("click", () => {
    scrollToElement(sectionArt);
});

contacts.addEventListener("click", () => {
    scrollToElement(sectionCont);
});

let dynamicDiv = document.getElementById("dynamic");

console.log(dataArt);

dynamicDiv.append(...dataArt);

console.log(...dataArt);
