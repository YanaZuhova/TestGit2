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

  articles.addEventListener("click", () => {
    scrollToElement(sectionArt);
  });

  contacts.addEventListener("click", () => {
    scrollToElement(sectionCont);
  });

  let dynamicDiv = document.getElementById("dynamic");

  arts = [
    { title: "Why JS", text: "Lorem ipsum dolor sit! Inventore?" , file: "JS.html"},
    { title: "Tехнологии", text: "Статья про технологии" , file: "Tekhnolog.html"},
];

let dataArt = arts.map((art) => {
  let { title, text, file } = art;

  // console.log(title);
  // console.log(text);
  // console.log(file);

  let artCard = document.createElement("div");
    artCard.className = "articard";
    artCard.innerText = `${title} ${text} ${file}`;

    const titleElement = document.createElement("h3");
    titleElement.innerText = title;
    artCard.append(titleElement);

    const textElement = document.createElement("p");
    titleElement.innerText = text;
    artCard.append(textElement);

    const fileElement = document.createElement("a");
    titleElement.innerText = file;
    artCard.append(fileElement);

    return artCard;
});

console.log(dataArt);

dynamicDiv.append(...dataArt);

console.log(...dataArt);