import dataArt from "./articlesService.json" with { type: "json" };

// console.log(dataArt);

let dynamicDiv = document.getElementById("dynamic");

let dataArticle = dataArt.arts.map((art) => {
    let { title, text, file, linkText } = art;
  
    let artCard = document.createElement("article");
      artCard.className = "element";
  
      const titleElement = document.createElement("h3");
      titleElement.innerText = title;
      artCard.append(titleElement);
  
      const textElement = document.createElement("p");
      textElement.innerText = text;
      artCard.append(textElement);
  
      const linkTextElement = document.createElement("a");
      linkTextElement.href = file;
      linkTextElement.innerText = linkText;
      artCard.append(linkTextElement);
  
      return artCard;
  });

  dynamicDiv. append(...dataArticle);
  