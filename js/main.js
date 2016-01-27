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
      $(".metal").hide();
      $(".wood").show();
      
});
     
     $(".metalBtn").click(function(){
      $(".wood").hide();
      $(".metal").show();
      
}); 

     $(".analogBtn").click(function(){
      $(".digital").hide();
      $(".analog").show();
      
}); 

$(".digitalBtn").click(function(){
      $(".analog").hide();
      $(".digital").show();
      
});

$(".allBtn").click(function(){
      $(".analog").show();
      $(".digital").show();
      $(".metal").show();
      $(".wood").show();
      
});



 
 

//end Tommy's JS


    $('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails

        height: '250',
        pagination: false,
        thumbnails: false
    });



});