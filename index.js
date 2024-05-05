let articles = document.getElementById("allArticles");
articles.innerText = "Все статьи (3)";

let sectionArt = document.getElementById("withArticles");
let contacts = document.getElementById("contacts");
let sectionCont = document.getElementById("withContacts");

let goTopBtn = document.getElementById("GoTop");

goTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

function scrollToElement(element) {
    element.scrollIntoView({ behavior: "smooth"});
  };

  allArticles.addEventListener("click", () => {
    scrollToElement(sectionArt);
  });

  contacts.addEventListener("click", () => {
    scrollToElement(sectionCont);
  });

  let dynamicDiv = document.getElementById("dynamic");

  arts = [
    { title: "Почему я выбрал JS", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime cumque accusamus voluptatem vitae tempore saepe eaque similique esse provident alias. Excepturi ab eveniet repudiandae perspiciatis sequi, distinctio debitis saepe! Inventore?" , file: "JS.html"},
    { title: "Примекняемые технологии", text: "В этой статье я рассказываю про свои технологии" , file: "Tekhnolog.html"},
];

let dataArt = arts.map((art) => {
  let { title, text, file } = art;

  // console.log(title);
  // console.log(text);
  // console.log(file);

  let artCard = document.createElement("div");
    artCard.className = "articard";
    artCard.innerText = `${title} ${text} ${file}`;
    return artCard;
});

console.log(dataArt);

dynamicDiv.append(...dataArt);

console.log(...dataArt);