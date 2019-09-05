window.onload = function () {

	document.getElementById('btn-add').onclick = function(){

		var inputTodo = document.getElementById('input-todo');

		var todoList = document.getElementById('todo-list');

		var item = document.createElement('li');

		item.innerHTML  = inputTodo.value;

		item.addEventListener('click', function () {
				
			console.log(this);
			todoList.removeChild(this);	

		});

		todoList.appendChild(item);

		inputTodo.value = '';
	}
}
