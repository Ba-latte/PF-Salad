
console.log("로딩완료");

// 요소 높이값 구하기
const content_height = (ele) => ele.outerHeight();

// ~~~~~ 메인페이지 - 신메뉴 섹션 ~~~~~
if($('.newMenu').length){
  console.log("신메뉴 섹션 있음");

  // 메인-신메뉴 섹션의 높이값 부여 : absolute 때문에 콘텐츠 크기 만큼의 높이값 강제 부여 위함
  $('.leftBox').css({
    height: content_height($(`div.active[role='tabpanel']`))
  });

  // 탭버튼 클릭시 탭 패널에 active 클래스 추가하여 보이기
  const tab__button = $("button[role='tab']");
  const tab__panel = $("div[role='tabpanel']");
  tab__button.click(function(){
    console.log("탭 버튼 클릭함");
    
    // 클릭된 자신의 형제 탭버튼 "aria-selected" 속성 false로 바꾸기
    $(this).siblings().attr("aria-selected", "false");
    // 모든 패널에서 active 클래스 지우기
    $(tab__panel).removeClass("active");
    // 클릭된 자신의 "aria-selected" 속성 ture로 바꾸기
    $(this).attr("aria-selected", "true");
    // 클릭된 자신의 "aria-controls" 속성과 일치하는 id를 가진 탭 패널에 active 클래스 추가하기
    let tab__panelID = $(this).attr("aria-controls");
    $(`#${tab__panelID}`).addClass("active");
  });
}

