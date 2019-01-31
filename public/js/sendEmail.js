$(document).ready(function(){
  $("#btnsendemail").click(function() {        
      var email = $("#txtemail").val();

      $("#message").text("Sending Email please wait ...");  
      $.post("/send-email", { email: email}, function(data) {  
        if( data === "sent") {  
            $("#message").html("Email has been send successfully.");  
        }  
      });  

      $("#txtemail").val('');
  });  
});  