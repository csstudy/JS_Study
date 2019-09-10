
$(document).ready(function () {
   
    //입력 칸에 커서 기본 설정
    document.getElementById('inputText').focus();

    // 추가 버튼 
    var btnNew = document.getElementById('btnAdd');
    
    // 추가 버튼 클릭 시
    btnNew.onclick = function () {
        addToDolist();
    };

    //done 버튼 클릭 시, 원래 리스트에서 제거????
    $("input[type=button]").click(function () { 
       $(this).parent().remove();
    })


    // 할일 추가 함수
    function addToDolist() {
        //입력한 할 일 텍스트
        var inputText = document.getElementById('inputText').value;
        addNewItem(document.getElementById('todolist'), inputText);

        document.getElementById('inputText').value = '';
    }

    // 리스트에 추가 해주는 함수
    function addNewItem(list, inputText) {
        // li 객체 생성 후 입력 받은 할 일 텍스트 넣어줌.
        var listItem = document.createElement('li');
        listItem.innerText = inputText;

        //delete 버튼 추가
        var deleteBtn = document.createElement( 'button' );
        var deleteBtnText = document.createTextNode( 'delete' );
        deleteBtn.appendChild(deleteBtnText);

        deleteBtn.onclick = function () {
            listItem.remove();
        };

        listItem.appendChild(deleteBtn);


        //done 버튼 추가
        var doneBtn = document.createElement( 'button' );
        var doneBtnText = document.createTextNode( 'Done' );
        doneBtn.appendChild( doneBtnText );

        doneBtn.onclick = function () {
            addDoneItem(listItem);
            //listItem.remove();
        };
        listItem.appendChild(doneBtn);

        //alarm 버튼 추가
        var alarmBtn = document.createElement( 'button' );
        var alarmBtnText = document.createTextNode( 'alarm' );
        alarmBtn.appendChild( alarmBtnText );

        alarmBtn.onclick = function () {
            setTimeout(function() {
                alert(inputText + ' 하세요!');}, 1000);
        };

        listItem.appendChild( alarmBtn );
        
        // ul의 자식으로 생성한 li객체 추가
        list.appendChild(listItem);

    }

    // done 리스트에 추가 해주는 함수
    function addDoneItem(listItem) {
        var doneli = document.getElementById('donelist');
        // ul의 자식으로 생성한 li객체 추가
        listItem.className = "checked";
        doneli.appendChild(listItem);
    }

})

