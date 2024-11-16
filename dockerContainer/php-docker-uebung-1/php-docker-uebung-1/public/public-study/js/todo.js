//Eingabefelder abrufen
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo');

//Ausgabeliste Abrufen
const todoList = document.getElementById('todo-list');

//überwacht submitbutton
todoForm.addEventListener('submit', function(event) {
  // Standard-Submit-Verhalten verhindern
  event.preventDefault();

  // Eingabe auslesen
  const newTodoText = todoInput.value;

  if (newTodoText !== '') {
    // Neues Listen-Element erstellen
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = newTodoText;

    // Das neue Element <li>Eingabe<li> wird der Liste hinzugefügt
    todoList.appendChild(newTodoItem);

    // Eingabefeld leeren
    todoInput.value = '';
  }
});