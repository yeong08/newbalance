
//메뉴버튼 누르면 나오고, 엑스버튼 누르면 들어가는 효과
$(document).ready(function(){
    //menu btn
    $('.menu_btn').click(function(){
        $('header nav').animate({'right':0});
        // ㄱ. 내비게이션 누르면 전체 스크롤 사라지게 하는거
        $('html,body').css('overflow-y','hidden');
    });
    //close
    $('.close_btn').click(function(){
        $('header nav').animate({'right':'-100vw'});
        // ㄱ. 내비게이션 누르면 전체 스크롤 사라지게 하는거
        $('html,body').css('overflow-y','visible');
    });
    //서브메뉴 누르면 나오게 하는거
    //header nav ul 메뉴
    $('header nav > ul > li > a').click(function(){
        // 내가선택한      클래스에       액티브가 없으면
        if($(this).attr('class') != 'active'){
            $('header nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('header nav .sub').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });

    //메인 슬라이드!! 스와이퍼 홈페이지에서 가져온거
    var swiper = new Swiper(".mySwiper", {
        //fade하게 하는것
        effect:'fade',
        //  1,2,3,1,2,3...이렇게 반복되게 하는거
        loop:true,
        // 스와이퍼에서 가져온 자동 오토플레이
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".mySwiper .swiper-pagination",
        //   (추가) 동그라미 클릭 가능하게 해주는거
          clickable:true
        },
      });
      //탭메뉴(tab) 
      //아이콘 세개 (자동으로 탭메뉴 움직이게 하는거)

      //일단 모든 탭메뉴 안보이고 첫번째 먼저 보이게 하는거

      //모든 .tab_list안보임
      $('.tab_list').hide();
      //첫번째 tab_list만 보임
      $('.tab_list').eq(0).fadeIn();
      //idx 변수 선언
      var idx=0;

      $('.tab_title ul li').click(function(){
        //클릭한 li의 인덱스 번호를 idx 변수에 저장
        idx=$(this).index();
        //모든li에서 active제거
        $('.tab_title ul li').removeClass('active');
        //클릭한 li만 active 설정
        $(this).addClass('active');
        //모든 .tab_list안보임
        $('.tab_list').hide();
        //idx 변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
        $('.tab_list').eq(idx).fadeIn();
        // 클릭할때마다 위로 올라가는거 막기
        return false;
      });

      //자동으로 움직이게 하는거 자동탭메뉴
      var auto=setInterval(autoTab, 4000);
      //autoTap 함수선언
      function autoTab(){
          //idx 변수의 값을 1씩 증가시킴
          idx++;
          //만약 idx값이 2보다 크면 0으로 초기화
          if(idx>2){idx=0;}
          //모든li에서 active제거
        $('.tab_title ul li').removeClass('active');
        //클릭한 li만 active 설정
        $('.tab_title ul li').eq(idx).addClass('active');
        //모든 .tab_list안보임
        $('.tab_list').hide();
        //idx 변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
        $('.tab_list').eq(idx).fadeIn();
      }
      //s3 세번째 슬라이드
    var swiper2 = new Swiper(".mySwiper2", {
        // 스와이퍼에서 가져온 자동 오토플레이
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // 양옆 버튼
        navigation: {
          nextEl: ".mySwiper2 .swiper-button-next",
          prevEl: ".mySwiper2 .swiper-button-prev",
        },
    });
    // section.s4
    var swiper3 = new Swiper(".mySwiper3", {
      loop:true,
      // 보이는 슬ㅏ이드
      slidesPerView: 1.3,
      // 슬라이드간의 간격
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".mySwiper3 .swiper-pagination",
        clickable: true
      },
    });

    // 한번에 맨 위로 이동하는 버튼 
    $('.top').click(function(){
      $('html,body').animate({'scrollTop':0});
      return false;
    });

    //window의 높이값을 winH변수에 저장
    var winH=$(window).height();
    // window에 scroll이벤트 설정 (화면 내리면 흰색으로 변함)
    $(window).scroll(function(){
      //window의 scrollTop값을 win 변수에 저장
      var win=$(this).scrollTop();
      //만약 win 값이 0보다 커지면 header에 active추가
      if(win>0){
        $('header').addClass('active');
      }else{
        $('header').removeClass('active');
      }

      // 만약 win값이 window의 높이값보다 크면 top버튼 나타나고,
      //window의 높이값보다 작으면 top 버튼 사라짐
      if(win > winH) {
        $('.top').addClass('active');
      }else{
        $('.top').removeClass('active');
      }
    });

});