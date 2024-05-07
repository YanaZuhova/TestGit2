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

  let arts = [
    { title: "Why JS", text: "Lorem ipsum dolor sit! Inventore?", file: "JS.html", linkText: "Читать статью о JS"},
    { title: "Tехнологии", text: "Статья про технологии", file: "Tekhnolog.html", linkText: "Читать статью о Tekhno"},
];

  let dataArt = arts.map((art) => {
  let { title, text, file, linkText } = art;

  // console.log(title);
  // console.log(text);
  // console.log(file);

  let artCard = document.createElement("div");
    artCard.className = "element";

    const titleElement = document.createElement("h3");
    titleElement.innerText = title;
    artCard.append(titleElement);

    const textElement = document.createElement("p");
    textElement.innerText = text;
    artCard.append(textElement);

    // const fileElement = document.createElement("a");
    // fileElement.href = file;
    // artCard.append(fileElement);

    const linkTextElement = document.createElement("a");
    linkTextElement.href = file;
    linkTextElement.innerText = linkText;
    artCard.append(linkTextElement);

    return artCard;
});

console.log(dataArt);

dynamicDiv.append(...dataArt);

console.log(...dataArt);