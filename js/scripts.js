$(document).ready(function(){
  $("button").click(function() {



  var flavors = ["chocolat", "vanilla","strawberry", "cherry"];
  flavors.forEach(function(flavor){

    $("ul").append("<li>"+ flavor+"</li>");
   //  $("#1").append(textCombined[0]);
   // $("#2").append(textCombined[1]);
   // $("#3").append(textCombined[2]);


    event.preventDefault();

  });
 });
});
