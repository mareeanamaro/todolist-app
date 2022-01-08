function newItem () {

  // create the list from the id list
  let list = $('#list');

  // create list item
  let li = $('<li></li>');

  //get the input value
  let inputValue = $('#input').val();

  // append the list item to the list if the
  if (inputValue === '') {
    alert('Enter a to-do');
  } else {
    list.append(li);
    li.append(inputValue);
    $('#input').val('');
  }


//create cross Out function
  function crossOut() {
    li.toggleClass('strike');
  }

  //add event listener for a double click
  li.on('dblclick', crossOut);

  //adding the delete button
  let deleteButton = $ ('<deleteButton></deleteButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  //create delete function
  function deleteItem() {
    li.addClass('delete');
  }
  //add event listener for a click in the delete button
  deleteButton.on('click', deleteItem);

  //make the list sortable
}

  $('#button').on('click', newItem);

  $('#list').sortable();
