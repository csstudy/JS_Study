
$(document).ready(()=>{

	$('#btn-add').click(()=>{

		var todo = $('#input-todo').val();
		var idx = 0;

		$('#todo-list li').each(function(index, item){ 
			
			if(idx < $(this).attr('id')){
				idx = $(this).attr('id');
			}

		});


		var item = $('<li id = ' + ++idx + '>' + todo + '</li>');

	    item.bind('click', function() {
		        
	    	var id = $(this).attr('id');
			console.log('delete id :' + id);

			$('#' + id).remove();
	        
	    }); 


		$('#todo-list').append(item);

		$('#input-todo').val('');

	})
});
