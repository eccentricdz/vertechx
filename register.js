$(document).ready(function(){
    $('#registration').submit(function(e){
        console.log($('#registration #submit'));
        $('#registration #submit').attr('value', 'Working...').attr('disabled', 'disabled');
        $.ajax({
            url: 'api/register.php',
            type: 'POST',
            data: $('#registration').serialize(),
            success: function (data, textStatus, jqXHR) {
                // success callback
                data = JSON.parse(data);
                if(data['ok']){
                    $('.notif').html('Registration Successful, login at <a href="./">vertechx.co.in</a>').addClass('success');
                    $('html, body').animate({
                        scrollTop: $(".notif").offset().top-100
                    }, 500);
                    $('#registration #submit').attr('value', 'Done!');
                    $('#registration').fadeOut();
                }else{
                    $('.notif').html(data['msg']).addClass('error');
                    $('html, body').animate({
                        scrollTop: $(".notif").offset().top-100
                    }, 500);
                    $('#registration #submit').attr('value', 'Submit Query').removeAttr('disabled');
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // error callback
            }
        });
        return false;
    });
});
