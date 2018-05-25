require ('bulma');

var $addItem = document.querySelector('.add-item');
var $writeItem = document.querySelector('.write-item');

$addItem.addEventListener('click', function() {
  var value = $writeItem.value;
  if (value) addItemTodo(value);
  // console.log("Test");
});

function addItemTodo(inputText) {

  // var item = document.createElement('a');
  // item.classList.add('panel-block');
  //
  //   var span = document.createElement('span');
  //   item.classList.add('panel-block')




    item.innerText = inputText;



}
