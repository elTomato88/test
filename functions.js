	var carouselPosition=1;
	function carousel(direction){
		if(direction==="right"&&carouselPosition<=6)
		{carouselPosition++;
		document.getElementById("carousel").style.cssText='--position: '+carouselPosition+'';
		}
		if(direction==="left"&&carouselPosition>1)
		{carouselPosition--;
		document.getElementById("carousel").style.cssText='--position: '+carouselPosition+'';
		}
		
	}
$('.form_radio_btn').click(function(){
	let idClick=$(this).attr('id');
	switch(idClick){
		case "divradio_1":
		$('#pic_change').attr('src', 'img/forest01.png');
		break;
		case "divradio_2":
		$('#pic_change').attr('src', 'img/forest02.png');
		break;
		case "divradio_3":
		$('#pic_change').attr('src', 'img/forest03.png');
		break;
	};
});

$('.button_x').click(function(){
		let idClick=$(this).attr('id');
		if ($(this).attr('src')==="img/button_+_hover.png"){
			$(this).attr('src', 'img/button_x_hover.png');
			switch(idClick){
				case "button_x_1":
				$('#menu_list_1').css('height', '55%');
				$('#menu_list_1').children().last().children().last().css('display', 'inline-block');
				break;
				case "button_x_2":
				$('#menu_list_2').css('height', '55%');
				$('#menu_list_2').children().last().children().last().css('display', 'inline-block');
				break;
				case "button_x_3":
				$('#menu_list_3').css('height', '55%');
				$('#menu_list_3').children().last().children().last().css('display', 'inline-block');
				break;
				case "button_x_4":
				$('#menu_list_4').css('height', '55%');
				$('#menu_list_4').children().last().children().last().css('display', 'inline-block');
				break;
			}
			
		}
		else{
			$(this).attr('src', 'img/button_+_hover.png');
			switch(idClick){
				case "button_x_1":
				$('#menu_list_1').css('height', '25%');
				$('#menu_list_1').children().last().children().last().css('display', 'none');
				break;
				case "button_x_2":
				$('#menu_list_2').css('height', '25%');
				$('#menu_list_2').children().last().children().last().css('display', 'none');
				break;
				case "button_x_3":
				$('#menu_list_3').css('height', '25%');
				$('#menu_list_3').children().last().children().last().css('display', 'none');
				break;
				case "button_x_4":
				$('#menu_list_4').css('height', '25%');
				$('#menu_list_4').children().last().children().last().css('display', 'none');
				break;
			}
		}
		
});

$('.button_x').mouseenter(function(){
	if ($(this).attr('src')==="img/button_+.png"){
		$(this).attr('src', 'img/button_+_hover.png');
	}
	else{
		$(this).attr('src', 'img/button_x_hover.png');
	}
});
$('.button_x').mouseleave(function(){
	if ($(this).attr('src')==="img/button_+_hover.png"){
		$(this).attr('src', 'img/button_+.png');
	}
	else{
		$(this).attr('src', 'img/button_x.png');
	}
});



$('#menu_form_button, #to_form_button').mousedown(function(){
	$(this).css('background', '#11A6A6');	
});
$('#menu_form_button, #to_form_button').mouseup(function(){
	$(this).css('background', '#17E6E6');	
});