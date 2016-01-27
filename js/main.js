$("document").ready(function (e){

  function validateEmail(email){
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  }

  function validate(){
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    alert("Successfully submitted, spam emails coming now.");
  } else {
    alert("Not an email!");
  }
  return false;
}

$("form").bind("submit", validate);



//start Tommy's JS


$(".woodBtn").click(function(){
        $(".metal").fadeOut("slow");
        $(".wood").show();
      
});
     
$(".metalBtn").click(function(){
        $(".wood").fadeOut("slow");
        $(".metal").show();
      
}); 

$(".analogBtn").click(function(){
        $(".digital").fadeOut("slow");
        $(".analog").show();
      
}); 

$(".digitalBtn").click(function(){
      $(".analog").fadeOut("slow");
      $(".digital").show();
      
});

$(".allBtn").click(function(){
      $(".analog").fadeIn("slow");
      $(".digital").fadeIn("slow");
      $(".metal").fadeIn("slow");
      $(".wood").fadeIn("slow");
      
});



 
 

//end Tommy's JS






});