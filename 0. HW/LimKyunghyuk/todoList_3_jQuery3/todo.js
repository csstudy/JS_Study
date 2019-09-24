
$(document).ready(()=>{

	// 위 아래 이동 가능하도록 moveDown, moveUp 핸들러 생성
	var moveDown = function(){

		//$(this).unbind('click');

		// down 이벤트가 발생하면 up 이벤트로 교체 해준다.			
		$(this).click(moveUp);
		$(this).appendTo('#delete-list');

		//$(this).remove();			
	}

	var moveUp = function(){
		
		//$(this).unbind('click');

		// up 이벤트가 발생하면 down 이벤트로 교체 해준다.
		$(this).click(moveDown);
		$(this).appendTo('#todo-list');
	}

	$('#btn-add').click(function(){

		var todoTitle = $('#input-todo').val();
		var timeTitle = $('#input-time').val();

		if(todoTitle == ''){
			alert('내용을 입력해주세요');
			return;
		}

		if(timeTitle == ''){
			alert('시간을 입력해주세요');
			return;
		}


		var title = $('<div></div>').attr('class', 'todoTitle').html(todoTitle);
		var time = $('<div></div>').attr('class', 'timeTitle').html('[' + timeTitle + ']');
		var item = $('<div></div>').append(title).append(time);
		var list = $('<li></li>').html(item).click(moveDown);

		$('#todo-list').append(list);
		$('#input-todo').val('');
		$('#input-time').val('');
	});


	$('#btn-search').click(()=>{
		
		var todo = $('#input-search').val();

		$('#todo-list li').each(function(){
			
			// li 내용 중 .todoTitle 만 가져옴
			var listValue = $(this).find('.todoTitle').html();

			console.log(listValue);
			$(this).show();

			if(listValue.indexOf(todo) == -1){
				$(this).hide();
			}
		});

/* 		// 다르게 동작함
		$('#todo-list li').each(()=>{
			console.log( $(this).attr('id') );
		});
*/

	});


	

	setInterval(()=>{
		var date = new Date();

		var h = '' + date.getHours();
		var m = '' + date.getMinutes();
		var s = '' + date.getSeconds();

		// 한자리 시간 정보는 앞에 0을 붙여서 2자리로 맞춰 준다.
		if(2 > h.length) h = '0' + h;
		if(2 > m.length) m = '0' + m;
		if(2 > s.length) s = '0' + s;

		var timeString = h + ":" + m + ":" + s;

		$('.todo-clock').html(timeString);


		$('#todo-list li').each(function(){

			// 시간 정보만 가져와서 			
			var listValue = $(this).find('.timeTitle').html();

			// 일치하면 todoTitle을 보여준다.
			if(listValue == ('['+timeString + ']')){
				alert($(this).find('div .todoTitle').html());
			}
		});

	}, 1000);
});
