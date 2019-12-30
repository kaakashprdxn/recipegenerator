let textInput = document.querySelector(".text");
let tagDiv = document.getElementById("tag");
let tagContent = document.querySelector(".tagcontent");
textInput.addEventListener("keydown", addStyle);
let arrayNumbers = [];
 function addStyle(e) {
    if (e.keyCode == 32) {
        let innerText = document.createTextNode(textInput.value);
        let inside = document.createElement("span");
        inside.className = "selected";
        inside.appendChild(innerText);
        let cross = document.createElement("span");
        cross.innerHTML = " x";
        cross.className = "cross"
        tagContent.appendChild(inside);
        inside.appendChild(cross)
        textInput.value = "";
        let allSpans = document.querySelectorAll(".selected");
        for (let i = 0; i <= allSpans.length; i++) {
            arrayNumbers.push(allSpans.item(i).innerHTML);
        }}
    }
tagContent.addEventListener('click', function(e) {
    if (e.target.matches('.cross')) {
        tagContent.removeChild(e.target.parentNode);
    }
});

class Recipes {
    constructor(title, ingrediants) {
        this.title = title;
        this.ingrediants = ingrediants;
    }
}
class UI {
    static addRecipiesToList(recipe) {
        const list = document.querySelector('#recipe-list');
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="title">${recipe.title}</td>
          <td id="tag" class="recipe-id-row">
            <span class="all-mail tagcontent">${arrayNumbers}
            </span>
            <input type="text" id="ingrediants" placeholder="Ingredients Required..." class="enter-mail-id text">
          </td>
          <td><a href="#" class="delete">X</a></td>
        `;
      textInput.addEventListener("keydown", addStyle);
        arrayNumbers.length = 0
        list.appendChild(row);
    }
    static deleteRecipies(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#recipes-form');
        container.insertBefore(div, form);
        setTimeout(()=>document.querySelector('.alert').remove(), 3000);
    }
}
document.querySelector('#recipes-form').addEventListener('submit', e=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const ingrediants = document.querySelector('#ingrediants').value;
    if (title === '' || ingrediants === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        const recipes = new Recipes(title,ingrediants);
        UI.addRecipiesToList(recipes);
    }
}
);
document.querySelector('#recipe-list').addEventListener('click',  e => { UI.deleteRecipies(e.target); }
);
