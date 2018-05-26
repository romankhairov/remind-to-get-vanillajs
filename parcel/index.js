require ('bulma');

const $addItem = document.querySelector('.add-item');
const $writeItem = document.querySelector('.write-item');
const $taskList = document.querySelector('.task-list');

$addItem.addEventListener('click', function() {
  var value = $writeItem.value;
  if (value) addItemTodo(value);
});

function addItemTodo(inputText) {

const itemTemlate = `
  <li class="panel-block">
      <div class="container is-fluid">
          ${inputText}
      </div>
  </li>
`;

$taskList.innerHTML += itemTemlate;

}
