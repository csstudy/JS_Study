window.onload = function () {
	
}


		// document.getElementById(아이디).onclick = function(){ 실행할 코드 }
function addTodo(){
	

	var inputTodo = document.getElementById('input-todo');

	var todoList = document.getElementById('todo-list');

	var item = document.createElement('li');

	item.innerHTML  = inputTodo.value;

	var list = todoList.childNodes;

	console.log('>>' + list.length);






/*
	item.addEventListener('click', function (index) {
		//console.log(this.innerHTML + index);
		console.log(index);
	});

*/

	todoList.appendChild(item);
/*
	for (var i = 0; i < list.length; i++) {
		((i)=>{
			list[i].addEventListener('click', ()=>{
				alert(i);
			})
		})(i);
	}
*/
	inputTodo.value = '';

}

function handler(){
	console.log(">>" + event);

}