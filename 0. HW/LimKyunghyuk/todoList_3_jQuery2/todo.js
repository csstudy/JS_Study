
$(document).ready(()=>{

	$('#btn-add').click(()=>{

		var todo = $('#input-todo').val();
		var idx = 0;

		$('#todo-list li').each(function(){ 
			
			if(idx < $(this).attr('id')){
				idx = $(this).attr('id');
			}

		});

		var item = $('<li></li>').attr('id', ++idx).html(todo);

	    item.bind('click', function() {
		        
	    	var id = $(this).attr('id');
			console.log('delete id :' + id);

			//$('#' + id).remove();

	        $('#' + id).appendTo('#delete-list')
	    }); 


		$('#todo-list').append(item);

		$('#input-todo').val('');

	});

	$('#btn-search').click(()=>{
		
		var todo = $('#input-search').val();

		$('#todo-list li').each(function(){
			
			var listValue = $(this).html();


			if(listValue.indexOf(todo) == -1){
				$(this).remove();			
			}
		});

/* 		// 다르게 동작함
		$('#todo-list li').each(()=>{
			console.log( $(this).attr('id') );
		});
*/

	});
});
