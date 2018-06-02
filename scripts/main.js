require ('bulma');

const $addItem = document.querySelector('.add-item');
const $writeItem = document.querySelector('.write-item');
const $taskList = document.querySelector('.task-list');


$addItem.addEventListener('click', function() {
  var value = $writeItem.value;
  if (value) addItemTodo(value);
});

function removeItem(e) {
  console.log(e);
}

function addItemTodo(inputText) {

// const itemTemplate = `
//   <li class="panel-block">
//       <div class="container is-fluid">
//           ${inputText}
//       </div>
//   </li>
// `;

var list = document.getElementById("task-list");


var newItem = document.createElement('li');
newItem.classList.add('panel-block');

var textBlock = document.createElement('div');
textBlock.classList.add('container', 'is-fluid');
textBlock.innerText = inputText;

var control = document.createElement('p');
control.classList.add('control');

var buttons = document.createElement('div');
buttons.classList.add('field', 'is-grouped');

var done = document.createElement('button');
done.classList.add('button', 'is-small', 'is-success', 'is-outlined');
done.innerText = "Done";

var remove = document.createElement('button');
remove.classList.add('delete', 'remove-btn');
remove.innerText = "Done";



buttons.appendChild(control);
control.appendChild(done);
control.appendChild(remove);
newItem.appendChild(textBlock);
newItem.appendChild(buttons);



list.insertBefore(newItem, list.childNodes[0]);

}
