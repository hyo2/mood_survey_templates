// // 경고창 띄우기
// var hw = document.getElementById("hw");
// hw.addEventListener("click", function () {
//   alert("Hello world");
// });

// var searchEmotion = $(".search-emotion").val("");

// input 값 받아오고 php로 보내기(ajax 이용하기)
// function getInputValue() {
//   var input_val = $(".search-bar").val();
//   alert(input_val);

//   $.ajax({
//     method: "POST",
//     url: "survey_search_test.php",
//     data: { search_track: input_val },
//     dataType: "jsonp", // 타도메인 호출시 jsonp
//     success: function (data) {
//       console.log(data);
//     },
//   });
// }

// for (i = 0; i < 10; i++) {
//   const track_name = 아이유;
//   const artist_name = iU;
//   $("h5").html(track_name);
//   $("h6").html(artist_name);
// }

// const search = document.querySelector(".search-bar");

// function getInputValue() {
//   fetch("http://mood-test-mood.kro.kr/webtest/survey_search_test.php", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       search_track: search,
//     }),
//   })
//     .then((response) => console.log("response:", response))
//     .catch((eroor) => console.log("error:", error));
// }

// var test = file_get_contents(
//   "http://mood-test-mood.kro.kr/webtest/survey_search_html.php"
// );
//
// console.log(tset);

// function showHint(str) {
//   if (str.length == 0) {
//     document.getElementById("playlist").innerHTML = "";
//     return;
//   } else {
//     var xmlhttp = new XMLHttpRequest();
//     // 서버 응답이 준비되었을 때 실행할 함수 생성
//     xmlhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("playlist").innerHTML = this.responseText;
//       }
//     };
//     // 서버의 php파일로 요청 보내기
//     // q 매개변수가 url에 추가됨
//     // str은 입력 필드의 내용을 담고 있음
//     xmlhttp.open("GET", "survey_search_test.php?q=" + str, true);
//     xmlhttp.send();
//   }
// }

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const panel = document.querySelector(".search-emotion");
const wrapper = document.querySelector(".wrapper");

function confirmPage() {
  location.href = "survey_confirm.html";
}

function startPage() {
  location.href = "survey_start.html";
}

var count = 0;

nextBtn.addEventListener("click", (e) => {
  count++;
  console.log(count);

  switch (count) {
    case 0:
      panel.innerHTML = "나는 화날 때, 이런 노래를 듣는다";
      break;
    case 1:
      panel.innerHTML = "나는 슬플 때, 이런 노래를 듣는다";
      break;
    case 2:
      panel.innerHTML = "나는 놀랐을 때, 이런 노래를 듣는다";
      break;
    case 3:
      panel.innerHTML = "나는 무난할 때, 이런 노래를 듣는다";
      break;
    case 4:
      panel.innerHTML = "나는 기쁠 때, 이런 노래를 듣는다";
      // nextBtn.confirmPage();
      // 완료 버튼 추가하고 완료 버튼 누르면 설문 확인 및 종료 화면 렌더링
      break;

    case 5:
      // panel.innerHTML = "설문 종료"; // count 고정이 안됨..^^, , ,
      nextBtn.onclick = confirmPage();
      // wrapper.innerHTML =
      //   '<object type="text/html" data="survey_confirm.html"></object>';
      break;
    default:
      nextBtn.innerHTML = "다음";
  }

  // return emotion, answer;

  // if (count == 0) {
  //   panel.innerHTML = "나는 화날 때, 이런 노래를 듣는다";
  // } else if (count == 1) {
  //   panel.innerHTML = "나는 슬플 때, 이런 노래를 듣는다";
  // } else if (count == 2) {
  //   panel.innerHTML = "나는 놀랐을 때, 이런 노래를 듣는다";
  // } else if (count == 3) {
  //   panel.innerHTML = "나는 무난할 때, 이런 노래를 듣는다";
  // } else if (count == 4) {
  //   panel.innerHTML = "나는 기쁠 때, 이런 노래를 듣는다";
  // } else if (count == 5) {
  //   panel.innerHTML = "설문 종료";
  //   // 설문 종료 페이지 렌더링
  // }
});

prevBtn.addEventListener("click", (e) => {
  count--;
  console.log(count);

  switch (count) {
    case -1:
      prevBtn.onclick = startPage();

    case 0:
      panel.innerHTML = "나는 화날 때, 이런 노래를 듣는다";
      break;
    case 1:
      panel.innerHTML = "나는 슬플 때, 이런 노래를 듣는다";
      break;
    case 2:
      panel.innerHTML = "나는 놀랐을 때, 이런 노래를 듣는다";
      break;
    case 3:
      panel.innerHTML = "나는 무난할 때, 이런 노래를 듣는다";
      break;
    case 4:
      panel.innerHTML = "나는 기쁠 때, 이런 노래를 듣는다";
      nextBtn.innerHTML = "제출";
      // 완료 버튼 추가하고 완료 버튼 누르면 설문 확인 및 종료 화면 렌더링
      break;

    case 5:
      // panel.innerHTML = "설문 종료"; // count 고정이 안됨..^^, , ,
      nextBtn.onclick = confirmPage();
      break;
    default:
      nextBtn.innerHTML = "다음";
  }

  // if (count == 0) {
  //   count = 0;
  //   panel.innerHTML = "나는 화날 때, 이런 노래를 듣는다";
  // } else if (count == 1) {
  //   panel.innerHTML = "나는 슬플 때, 이런 노래를 듣는다";
  // } else if (count == 2) {
  //   panel.innerHTML = "나는 놀랐을 때, 이런 노래를 듣는다";
  // } else if (count == 3) {
  //   panel.innerHTML = "나는 무난할 때, 이런 노래를 듣는다";
  // } else if (count == 4) {
  //   panel.innerHTML = "나는 기쁠 때, 이런 노래를 듣는다";
  // } else if (count == 5) {
  //   panel.innerHTML = "설문 종료"; // 설문 종료 페이지 렌더링
  // }
});

// window.onpageshow = function(e){
// 	if(e.persisted){
//     	//뒤로가기 눌렀을때 로직실행
//     	sessionStorage.setItem('isMainBack',JSON.stringify(true));
//       }
//  }
