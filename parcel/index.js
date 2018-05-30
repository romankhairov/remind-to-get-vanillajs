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
      <div class="field is-grouped">
              <p class="control">
                <a class="button is-small is-success is-outlined">Done</a>
              </p>
              <p class="control">
                <a class="delete"></a>
              </p>
      </div>
  </li>
`;

var list = document.getElementById('task-list');

var node = document.createElement('li');
node.innerText = inputText;

var buttons = document.createElement('div');
buttons.classList.add('buttons');



buttons.appendChild

list.insertBefore(item, list.childNodes[0]);


// var node = document.createElement("li");
//     var textnode = document.createTextNode(itemTemlate);
//     node.insertBefore(textnode);
//     document.getElementById("myList").appendChild(node);



// $taskList.innerHTML += itemTemlate;
// itemTemlate.appendChild($taskList);

// var list =


}
