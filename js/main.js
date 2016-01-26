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






});