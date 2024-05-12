export
let arts = [
    { title: "Why JS", text: "Lorem ipsum dolor sit! Inventore?", file: "JS.html", linkText: "Читать статью о JS"},
    { title: "Tехнологии", text: "Статья про технологии", file: "Tekhnolog.html", linkText: "Читать статью о Tekhno"},
];

export
  let dataArt = arts.map((art) => {
  let { title, text, file, linkText } = art;

  // console.log(title);
  // console.log(text);
  // console.log(file);

  let artCard = document.createElement("article");
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
