$("document").ready(function (e){

  $( ".form-horizontal" ).on("submit", function(e) {
    alert("Email Accepted, Spam Coming from Cwatch");

  });


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



$('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails
  height: '250',
  pagination: false,
  thumbnails: false
    });

});