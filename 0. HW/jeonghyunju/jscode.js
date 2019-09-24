var now = new Date()
var date = ""
var time = ""

// 시간 1초마다 갱신
setInterval(function(){
    now = new Date()
    time_setting(now)

}, 1000)

// 시간 설정
function time_setting(now){
    date = now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate()
    time = addZeros(now.getHours()) + ':' + addZeros(now.getMinutes()) + ':' + addZeros(now.getSeconds())

    $('#date-and-time').text(date + ' ' + time)
}

function addZeros(num){
    num = num.toString()
    if(num.length < 2){
        num = '0' + num
    }
    return num
}


// todo list에 추가
function add_list(){
    var input = $('#input_todo').val()

    if(window.event.keyCode == 13 && input != ""){  // enter키 코드 && input값이 빈 값이 아니면
        var task = $("<div class = 'task'></div>").text(input)
        
        // 삭제 아이콘 선언
        var del = $("<i class='fa fa-trash'/>").click(function(){
            var item = $(this).parent()
            item.remove()
        })

        // 체크 아이콘 추가
        var check = $("<i class = 'fa fa-check'/>").click(function(){
            var item = $(this).parent()
            $('#done_list').append(item)
            $(this).remove() // 체크 아이콘 삭제하기
        })

        // 삭제, 체크 아이콘 추가
        task.append(del, check)

        $('#todo_list').append(task)
        $('#input_todo').val('')
        
    }
}


// 검색 기능
function search(){
    $("#keyword").keyup(function() {
        var keyword = $(this).val();
        $('#todo_list > div').hide()

        var result =  $('#todo_list > div').find(keyword)
        console.log(result)
    })

}


// 초기화
// function refresh(){
//     $('#todo_list').empty()
//     $('input').val('')
// }






