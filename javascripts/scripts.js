$(document).ready(function(){
  
  $('.registration-form').submit(function (e) {
    e.preventDefault();

    $.ajax({
        url: 'YOUR URL',
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