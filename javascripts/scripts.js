$(document).ready(function(){
  
  $('.registration-form').submit(function (e) {
    e.preventDefault();

    $.ajax({
        url: '//prud.us9.list-manage.com/subscribe/post?u=39ef96cac4b6f34b25ebb0ed0&amp;id=fd630d7a55',
        type: 'GET',
        data: $('#your-form').serialize(),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
           if (data['result'] != "success") {
                //ERROR
                console.log(data['msg']);
           } else {
              $("input, button").attr("disabled", "disabled");
              $("button").html('<span class="glyphicon glyphicon-ok success" aria-hidden="true"></span>');
           }
        }
    });
  });
  
});
