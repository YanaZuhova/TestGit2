const navigation = document.getElementById("navigation");
const allArticles = navigation.getElementsByTagName("a")[0].innerText = "Все статьи (3)";

let articles = document.getElementById("allArticles");
let sectionArt = document.getElementById("withArticles");
let contacts = document.getElementById("contacts");
let sectionCont = document.getElementById("withContacts");

document.querySelectorAll("h3")[
   document.querySelectorAll("h3").lengh - 1 
];

// let goTopBtn = document.getElementById("GoTop");

goTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

articles.addEventListener("click", () => {
    withArticles.scrollIntoView({behavior: "smooth"});
});

contacts.addEventListener("click", () => {
    withContacts.scrollIntoView({behavior: "smooth"});
});


function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth" });
  };

  allArticles.addEventListener("click", () => {
    scrollToElement(atriclesSection);
  });