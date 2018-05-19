require ('bulma');

var $addItem = document.querySelector('.add-item');
var $writeItem = document.querySelector('.write-item');

$addItem.addEventListener('click', function() {
  var value = $writeItem.value;
  if (value) addItemTodo(value);
  // console.log("Test");
});

function addItemTodo(whatEver) {
  console.log(whatEver);
}
