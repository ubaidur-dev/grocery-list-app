var inputField = document.getElementById('groceryInput');
var listArea = document.getElementById('groceryList');

function addItem() {
    var itemText = inputField.value;

    if (itemText.trim() == "") {
        alert("Please enter any item!");
        return;
    }

    var li = document.createElement('li');
    li.className = "list-group-item list-item p-3";
    
    li.innerHTML = `
        <span class="fw-bold">${itemText}</span>
        <i class="fas fa-trash-alt remove-btn" onclick="this.parentElement.remove()"></i>
    `;

    listArea.appendChild(li);
    inputField.value = "";
}

inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});