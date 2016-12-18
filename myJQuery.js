
$(document).ready(function($){
  	$("body").append('<div id="shadow" style="width:100%;height:100%;background:black;opacity:0.9;filter:alpha(opacity=90);z-index:100;position:fixed;top:0;left:0;display:none;"></div>');
  	var button = "<a class='topButton' href='#top' id='but' style='display:none;position:fixed; bottom:80px; right:100px;font-size:40px;z-index:200;color:white;background:black;border-radius:10px;padding:2px 8px;'><b>Top⇡</b></a>";
  	var style = "<style> a {text-decoration: none;}a:hover {text-decoration: none;}a:visited {text-decoration: none;}a:active {text-decoration: none;}a:link {text-decoration: none;}</style>";
  	var button2 = "<button id='closeBtn' style='display:;font-size:14px;background-color:black;color:white;position:absolute;z-index:200;right:30px;bottom:50px;border-radius:10px;padding:2px 8px;cursor:pointer;'>Close Sub-video</button>";
  	var up = "<button id='upBtn' style='display:;font-size:14px;background-color:black;color:white;position:absolute;z-index:200;right:182px;bottom:128px;border-radius:10px;padding:2px 6px;cursor:pointer;'><b>↑</b></button>";
  	var down = "<button id='downBtn' style='display:;font-size:14px;background-color:black;color:white;position:absolute;z-index:200;right:182px;bottom:90px;border-radius:10px;padding:2px 6px;cursor:pointer;'><b>↓</b></button>";
  	var left = "<button id='leftBtn' style='display:;font-size:14px;background-color:black;color:white;position:absolute;z-index:200;right:202px;bottom:110px;border-radius:10px;padding:0px 3px;cursor:pointer;'><b>←</b></button>";
  	var right = "<button id='rightBtn' style='display:;font-size:14px;background-color:black;color:white;position:absolute;z-index:200;right:162px;bottom:110px;border-radius:10px;padding:0px 3px;cursor:pointer;'><b>→</b></button>";
  	var plus = "<button id='plusBtn' style='display:;font-size:14px;background-color:black;color:white;position:absolute;z-index:200;right:200px;bottom:52px;border-radius:15px;padding:2px 6px;cursor:pointer;'><b>+</b></button>";
  	var minus = "<button id='minusBtn' style='display:;font-size:14px;background-color:black;color:white;position:absolute;z-index:200;right:163px;bottom:52px;border-radius:15px;padding:2px 7px;cursor:pointer;font-size:15px;'><b>-</b></button>";
  	var adds ="<div id='adds' style='display:none;background-color:lightgrey;height:190px;width:260px;position:fixed;z-index:200;bottom:-170px;right:60px;border-radius:20px 20px 0px 0px;float:left;border-style:solid;border-color:black;border-width: 3px;'></div>"

  	$("head").append(style);
  	$("body").append(adds);
  	$("body").append(button);
  	$("#adds").append(button2);
  	$("#adds").append(up);
  	$("#adds").append(down);
  	$("#adds").append(left);
  	$("#adds").append(right);
  	$("#adds").append(plus);
  	$("#adds").append(minus);

  	var signal = 0;
  	var moveSig = 0;
  	var sizeSig = 0;

	  $(window).on('scroll', function() {
	    var y_scroll_pos = window.pageYOffset;
	    var scroll_pos_test = 300;
	    $(".html5-main-video").css("z-index","200");
	    $(".html5-video-player").css("z-index","200");

	    if(y_scroll_pos > scroll_pos_test ){
	    	var videolink = $('link[itemprop="embedURL"]').attr("href");
	    	$(".topButton").show();
	    	if(videolink != null && signal == 0 && moveSig == 0 && sizeSig == 0){
	    		$("#adds").show();
	    		$("#adds").unbind().hover(function(){
					$("#adds").animate({bottom: '-20px'},100);
				},function(){
					$("#adds").animate({bottom: '-170px'},100);
				});

		    	if ($(window).width() > 1294){
					$(".html5-main-video").css({"height":"330px","width":"450px","position":"fixed","top":"0","left":"0"});
					$(".html5-video-player").css({"height":"330px","width":"450px","position":"fixed","top":"50%","left":"62%"});
					$(".ytp-chrome-bottom").css({"width":"440px","position":"fixed","left":"0"});
					$(".player-width").css({"width":"450px"});
					$(".player-height").css({"height":"330px"});
					$(".ytp-fullscreen-button").css({"display":"none"});
					$(".ytp-size-button").css({"display":"none"});
					$(".ytp-progress-bar-container").css({"display":"none"});

					$("#closeBtn").click(function(){
						$(".html5-main-video").css({"height":"480px","width":"854px","position":"relative","top":"0px","left":"0px"});
						$(".html5-video-player").css({"height":"480px","width":"854px","position":"relative","top":"0px","left":"0px"});
						$(".ytp-chrome-bottom").css({"width":"832px","position":"fixed","left":"11px"});
						$(".player-width").css({"width":"854px"});
						$(".player-height").css({"height":"480px"});
						$(".ytp-fullscreen-button").css({"display":"inline"});
						$(".ytp-size-button").css({"display":"inline"});
						$(".ytp-progress-bar-container").css({"display":"inline"});
						$("#adds").hide();
						signal = 1;
					});
				} else if (($(window).width() < 1294) && ($(window).width() > 657)){
					$(".html5-main-video").css({"height":"270px","width":"370px","position":"fixed","top":"0","left":"0"});
					$(".html5-video-player").css({"height":"270px","width":"370px","position":"fixed","top":"50%","left":"57%"});
					$(".ytp-chrome-bottom").css({"width":"365px","position":"fixed","left":"0"});
					$(".player-width").css({"width":"370px"});
					$(".player-height").css({"height":"270px"});
					$(".ytp-fullscreen-button").css({"display":"none"});
					$(".ytp-size-button").css({"display":"none"});
					$(".ytp-progress-bar-container").css({"display":"none"});

					$("#closeBtn").click(function(){
						$(".html5-main-video").css({"height":"360px","width":"640px","position":"relative","top":"0px","left":"0px"});
						$(".html5-video-player").css({"height":"360px","width":"640px","position":"relative","top":"0px","left":"0px"});
						$(".ytp-chrome-bottom").css({"width":"622px","position":"fixed","left":"9px"});
						$(".player-width").css({"width":"640px"});
						$(".player-height").css({"height":"360px"});
						$(".ytp-fullscreen-button").css({"display":"inline"});
						$(".ytp-size-button").css({"display":"inline"});
						$(".ytp-progress-bar-container").css({"display":"inline"});
						$("#adds").hide();
						signal = 1;
					});
				} else if ($(window).width() < 657){
					$(".html5-main-video").css({"height":"200px","width":"300px","position":"fixed","top":"0","left":"0"});
					$(".html5-video-player").css({"height":"200px","width":"300px","position":"fixed","top":"50%","left":"30%"});
					$(".ytp-chrome-bottom").css({"width":"300px","position":"fixed","left":"0"});
					$(".player-width").css({"width":"300px"});
					$(".player-height").css({"height":"200px"});
					$(".ytp-fullscreen-button").css({"display":"none"});
					$(".ytp-size-button").css({"display":"none"});
					$(".ytp-progress-bar-container").css({"display":"none"});

					$("#closeBtn").click(function(){
						$(".html5-main-video").css({"height":"240px","width":"426px","position":"relative","top":"0px","left":"0px"});
						$(".html5-video-player").css({"height":"240px","width":"426px","position":"relative","top":"0px","left":"0px"});
						$(".ytp-chrome-bottom").css({"width":"418px","position":"fixed","left":"0"});
						$(".player-width").css({"width":"426px"});
						$(".player-height").css({"height":"240px"});
						$(".ytp-fullscreen-button").css({"display":"inline"});
						$(".ytp-size-button").css({"display":"inline"});
						$(".ytp-progress-bar-container").css({"display":"inline"});
						$("#adds").hide();
						signal = 1;
					});
				}

				$("#upBtn").unbind().click(function(){
					moveSig = 1;
					var temp = $(".html5-video-player").css("top");
					var tempNum = parseInt(temp.substring(0,temp.length-2)) - 20;
					if(tempNum > window.screenTop){
						$(".html5-video-player").css({"top": tempNum + "px"});
					}
				});
				$("#downBtn").unbind().click(function(){
					moveSig = 1;
					var temp = $(".html5-video-player").css("top");
					var tempNum = parseInt(temp.substring(0,temp.length-2)) + 20;
					var temp1 = $(".html5-video-player").css("height");
					var tempNum1 = parseInt(temp1.substring(0,temp.length-2));
					if(tempNum < (window.screenTop + window.innerHeight - tempNum1)){
						$(".html5-video-player").css({"top": tempNum + "px"});
					}
				});
				$("#leftBtn").unbind().click(function(){
					moveSig = 1;
					var temp = $(".html5-video-player").css("left");
					var tempNum = parseInt(temp.substring(0,temp.length-2)) - 20;
					if(tempNum > 0){
						$(".html5-video-player").css({"left": tempNum + "px"});
					}
				});
				$("#rightBtn").unbind().click(function(){
					moveSig = 1;
					var temp = $(".html5-video-player").css("left");
					var tempNum = parseInt(temp.substring(0,temp.length-2)) + 20;
					var temp1 = $(".html5-video-player").css("width");
					var tempNum1 = parseInt(temp1.substring(0,temp.length-2));
					if(tempNum < (window.innerWidth - tempNum1)){
						$(".html5-video-player").css({"left": tempNum + "px"});
					}
				});

				$("#plusBtn").unbind().click(function(){
					sizeSig = 1;
					var temp = $(".html5-video-player").css("height");
					var tempNum = parseInt(temp.substring(0,temp.length-2)) + 20;
					var temp1 = $(".html5-video-player").css("width");
					var tempNum1 = parseInt(temp1.substring(0,temp.length-2)) + 20;
					if(tempNum1 < (window.innerWidth - 200) && tempNum1 < 800){
						$(".html5-video-player").css({"height": tempNum + "px","width": tempNum1 + "px"});
						$(".html5-main-video").css({"height": tempNum + "px","width": tempNum1 + "px"});
						$(".ytp-chrome-bottom").css({"width": tempNum1 + "px"});
					}
				});

				$("#minusBtn").unbind().click(function(){
					sizeSig = 1;
					var temp = $(".html5-video-player").css("height");
					var tempNum = parseInt(temp.substring(0,temp.length-2)) - 20;
					var temp1 = $(".html5-video-player").css("width");
					var tempNum1 = parseInt(temp1.substring(0,temp.length-2)) - 20;
					if(tempNum > 140 && tempNum1 > 140){
						$(".html5-video-player").css({"height": tempNum + "px","width": tempNum1 + "px"});
						$(".html5-main-video").css({"height": tempNum + "px","width": tempNum1 + "px"});
						$(".ytp-chrome-bottom").css({"width": tempNum1 + "px"});
					}
				});
			}
	    } else if (y_scroll_pos < scroll_pos_test){
	    	$(".topButton").hide();
	    	$("#adds").hide();
	    	signal = 0;
	    	moveSig = 0;
	    	sizeSig = 0;
	    	if ($(window).width() > 1294){
				$(".html5-main-video").css({"height":"480px","width":"854px","position":"relative","top":"0px","left":"0px"});
				$(".html5-video-player").css({"height":"480px","width":"854px","position":"relative","top":"0px","left":"0px"});
				$(".ytp-chrome-bottom").css({"width":"832px","position":"fixed","left":"11px"});
				$(".player-width").css({"width":"854px"});
				$(".player-height").css({"height":"480px"});
				$(".ytp-fullscreen-button").css({"display":"inline"});
				$(".ytp-size-button").css({"display":"inline"});
				$(".ytp-progress-bar-container").css({"display":"inline"});
				
				$(".ytp-size-button").click(function(){
					$(".html5-main-video").css({"height":"720px","width":"100%","position":"fixed","top":"0","left":"0"});
					$(".html5-video-player").css({"height":"720px","width":"100%","position":"fixed","top":"0","left":"0"});
					$(".ytp-chrome-bottom").css({"width":"100%"+"px","position":"fixed","left":"0"});
					$(".player-width").css({"width":"100%"+"px"});
					$(".player-height").css({"height":"720px"+"px"});
				});
			} else if (($(window).width() < 1294) && ($(window).width() > 657)){
				$(".html5-main-video").css({"height":"360px","width":"640px","position":"relative","top":"0px","left":"0px"});
				$(".html5-video-player").css({"height":"360px","width":"640px","position":"relative","top":"0px","left":"0px"});
				$(".ytp-chrome-bottom").css({"width":"622px","position":"fixed","left":"9px"});
				$(".player-width").css({"width":"640px"});
				$(".player-height").css({"height":"360px"});
				$(".ytp-fullscreen-button").css({"display":"inline"});
				$(".ytp-size-button").css({"display":"inline"});
				$(".ytp-progress-bar-container").css({"display":"inline"});

				$(".ytp-size-button").click(function(){
					$(".html5-main-video").css({"height":"480px","width":"100%","position":"fixed","top":"0","left":"0"});
					$(".html5-video-player").css({"height":"480px","width":"100%","position":"fixed","top":"0","left":"0"});
					$(".ytp-chrome-bottom").css({"width":"100%"+"px","position":"fixed","left":"0"});
					$(".player-width").css({"width":"100%"+"px"});
					$(".player-height").css({"height":"480px"+"px"});
				});
			} else if ($(window).width() < 657){
				$(".html5-main-video").css({"height":"240px","width":"426px","position":"relative","top":"0px","left":"0px"});
				$(".html5-video-player").css({"height":"240px","width":"426px","position":"relative","top":"0px","left":"0px"});
				$(".ytp-chrome-bottom").css({"width":"418px","position":"fixed","left":"0"});
				$(".player-width").css({"width":"426px"});
				$(".player-height").css({"height":"240px"});
				$(".ytp-fullscreen-button").css({"display":"inline"});
				$(".ytp-size-button").css({"display":"inline"});
				$(".ytp-progress-bar-container").css({"display":"inline"});

				$(".ytp-size-button").click(function(){
					$(".html5-main-video").css({"height":"240px","width":"100%","position":"fixed","top":"0","left":"0"});
					$(".html5-video-player").css({"height":"240px","width":"100%","position":"fixed","top":"0","left":"0"});
					$(".ytp-chrome-bottom").css({"width":"100%"+"px","position":"fixed","left":"0"});
					$(".player-width").css({"width":"100%"+"px"});
					$(".player-height").css({"height":"240px"+"px"});
				});
			} 
	    }
	    $(".ytp-fullscreen-button").click(function(){
			$(".html5-main-video").css({"height":"100%","width":"100%","position":"fixed","top":"0","left":"0"});
			$(".html5-video-player").css({"height":"100%","width":"100%","position":"fixed","top":"0","left":"0"});
			$(".ytp-progress-bar-container").css({"width":"100%","position":"fixed","left":"0"});
			$(".player-width").css({"width":"100%"+"px"});
			$(".player-height").css({"height":"100%"+"px"});
		});

		});
});
