$(document).ready(()=>{

	$('#btn-add').click(()=>{

		var item = document.createElement('li');



		var v = $('#input-todo').val();
		var item = $('<li>' + v + '</li>');

		item.addEventListener('click', function () {
				
			// console.log(this);
			$('#todo-list').remove(this);	

		});

		$('#todo-list').append(item);

		$('#input-todo').val('');

	})



});


/*

window.onload = function () {


	document.getElementById('btn-add').onclick = function(){

		var inputTodo = document.getElementById('input-todo');

		var todoList = document.getElementById('todo-list');

		var item = document.createElement('li');

		item.innerHTML  = inputTodo.value;

		item.addEventListener('click', function () {
				
			// console.log(this);
			todoList.removeChild(this);	

		});

		todoList.appendChild(item);

		inputTodo.value = '';
	}
}

*/