// 1. 선언적 함수
function 함수(){ }
function 함수(){ }
함수();

// 2. 익명 함수
var 함수 = function (){ }
var 함수 = function (){ }
함수();


// 3. 선언적 함수와 익명 함수 차이
var 함수 = function(){ alert('함수 A') }
function 함수(){ alert('함수 A') }

함수();										// 함수 A를 출력

// 4. setTimeout() & setInterval()



// 5. var 변수의 문제점
<script>
	for(var i = 0 ; i < 3 ; i++){
		setTimeout(function (){alert("A");}, 0);
	}
</script>

// 6. 클로저

<script>
	function test(name){

		var output = 'Hello ' + name +'...!' ;

		return function(){
				alert(output);
		}
	}

	test('JavaScript');

</script>



// 과제


