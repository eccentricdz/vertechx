$(document).ready(function(){
var trumpCount = 0;

$('label').click(function(event){
	//console.log($(this).siblings('input').is(':checked'));
	if($(this).siblings('input').is(':checked')==true)
		return;
	trumpCount = $('input[type=checkbox]:checked').length;
	if(trumpCount>4)
	{
		event.preventDefault();
		 $('.notif').html('You can select a maximum of 5 trump events!').addClass('error');
                    $('html, body').animate({
                        scrollTop: $(".notif").offset().top-100
                    }, 500);
                    $(this).siblings('input').trigger('change');
                    return false;
	}
});
});