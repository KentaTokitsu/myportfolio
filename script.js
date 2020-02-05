

$(function() {
 var h = $(window).height();
  $('#loading__wrapper').css('display','none');
  $('#is-loading ,#loading').height(h).css('display','block');
 });

 $(window).load(function () {
  $('#is-loading').delay(900).fadeOut(800);
  $('#loading').delay(700).fadeOut(400);
  $('#loading__wrapper').css('display', 'block');
 });


 $(function(){
  setTimeout('stopload()',10000);
  });

  function stopload(){
   $('#loading__wrapper').css('display','block');
   $('#is-loading').delay(900).fadeOut(800);
   $('#loading').delay(700).fadeOut(400);
 }



$(function(){
	$('input:submit[id="btn_submit"]').click(function(){
		if(!input_check()){
			return false;
		}
	});
		$('.menu').click(function(){
		var $answer=$(this).find(".answer");
		if($answer.hasClass("open"))
		{
		$answer.removeClass("open");
		$answer.slideUp();
		}
		else{
			$answer.addClass("open");
			$answer.slideDown();
		}
		});



	$('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

});

//マーカーアニーメーション
$(window).scroll(function (){
	$(".marker-animation").each(function(){
	  var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  var scroll = $(window).scrollTop(); //スクロールの位置を取得
	  var windowHeight = $(window).height(); //ウインドウの高さを取得
	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
	    $(this).addClass('active'); //クラス「active」を与える
	  }
	});
});

// 入力内容チェックのための関数
function input_check(){
	var result = true;

	// エラー用装飾のためのクラスリセット
	$('#name').removeClass("inp_error");
	$('#mailaddress').removeClass("inp_error");
	$('#tel').removeClass("inp_error");
	$('#remarks').removeClass("inp_error");

	// 入力エラー文をリセット
	$("#name_error").empty();
	$("#mailaddress_error").empty();
	$("#tel_error").empty();
	$("#remarks_error").empty();

	// 入力内容セット
	var name   = $("#name").val();
	var mailaddress  = $("#mailaddress").val();
	var tel  = $("#tel").val().replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,'');
	var remarks  = $("#remarks").val();

	// 入力内容チェック

	// 名前
	if(name == ""){
		$("#name_error").html("名前を入力して下さい");
		$("#name").addClass("inp_error");
		result = false;
	}else if(name.length > 25){
		$("#name_error").html("25字以内で入力して下さい");
		$("#name").addClass("inp_error");
		result = false;
	}
	// メールアドレス
	if(mailaddress == ""){
		$("#mailaddress_error").html("メールアドレスを入力して下さい");
		$("#mailaddress").addClass("inp_error");
		result = false;
	}else if(!mailaddress.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
		$('#mailaddress_error').html("正しい入力ではありません");
		$("#mailaddress").addClass("inp_error");
		result = false;
	}else if(mailaddress.length > 255){
		$('#mailaddress_error').html("正しい入力ではありません");
		$("#mailaddress").addClass("inp_error");
		result = false;
	}
	// 電話番号
	if(tel == ""){
		$("#tel_error").html("電話番号を入力して下さい");
		$("#tel").addClass("inp_error");
	result = false;
	}else if((!tel.match(/^[0-9]+$/)) || (tel.length < 10)){
		$('#tel_error').html("正しい入力ではありません");
		$("#tel").addClass("inp_error");
		result = false;
	}
	// お問い合わせ内容
	if(remarks == ""){
		$("#remarks_error").html("問い合わせ内容を入力して下さい");
		$("#remarks").addClass("inp_error");
		result = false;
	}else if(remarks.match(/[<(.*)>.*<\/\1>]/)){
		$('#remarks_error').html(" HTML and URL is prohibited.");
		$("#remarks").addClass("inp_error");
		result = false;
	}else if(remarks.match(/^[ 　\r\n\t]*$/)){
		$('#remarks_error').html("正しい入力ではありません");
		$("#remarks").addClass("inp_error");
		result = false;
	}
}
　//fadein機能
	$(function(){
	    $(window).scroll(function (){
	        $('.fadein').each(function(){
	            var elemPos = $(this).offset().top;
	            var scroll = $(window).scrollTop();
	            var windowHeight = $(window).height();
	            if (scroll > elemPos - windowHeight+200){
	                $(this).addClass('scrollin');
	            }
	        });
	    });
	});

	$(function(){
      $('.skill_circle').circlesProgress({
        'size':'100', //円のサイズ
        'progress':'80', //進捗の割合
        'borderSize':'0', //円につける線
        'innerColor':'rgb(0,100,255)', //円の色
        'textElementClass':'text', //％につけるclass名
        'enableTextIndicator':true, //％表示をするかどうか
        'diplayPercentSign':true //%をつけるかどうか
      });
});
