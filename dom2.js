let newLi = document.createElement("li");
newLi.className = "li";
newLi.innerText = "Новая Статья";

let container = document.querySelector(".list");

container.append(newLi);
// container.prepend(newLi);
// container.before(newLi);
// container.after(newLi);
// container.replaceWith(newLi);

container.insertAdjacentHTML("beforeend", "<div class = 'allarticles'>Статья в конце</div>");
container.insertAdjacentHTML("afterbegin", "<div class = 'allarticles'>Статья в начале</div>");
container.insertAdjacentHTML("beforebegin", "<div class = 'allarticles'>Статья в самом начале</div>");
container.insertAdjacentHTML("afterend", "<div class = 'allarticles'>Статья в самом конце</div>");

let firstLi = container.firstElementChild;
firstLi.remove();

newLi.classList.add("warning");
// newLi.classList.remove("li");

newLi.innerText = "Новая Статья!!!";

document.getElementById("contacts").dataset.mydata = "222";
document.getElementById("contacts").setAttribute("myattribute", "555");


// ДЗ:
document.getElementsByTagName("input")[0].value = "Все статьи (666)";