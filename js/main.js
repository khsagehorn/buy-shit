$("document").ready(function (){

  $( "#submit" ).click(function() {
    event.preventDefault();
    alert( "Email taken" );
});


//start Tommy's JS

function wood() {

}
function digital() {
//     $("button").click(function(){
//     $("#digital").toggle();
// });
}
function metal() {
//     $("button").click(function(){
//     $("#metal").toggle();

// });
  }

function analog() {
//     $("button").click(function(){
//     $("#analog").toggle();
// });
}

    $(".woodBtn").click(function(){
      $(".metal").hide();
      // $("#wood").show();
      console.log("test");
});
     
     $(".metalBtn").click(function(){
      $(".wood").hide();
      console.log("test");
}); 

     $(".analogBtn").click(function(){
      $(".digital").hide();
      console.log("test");
}); 

$(".digitalBtn").click(function(){
      $(".analog").hide();
      console.log("test");
});
//end Tommy's JS
