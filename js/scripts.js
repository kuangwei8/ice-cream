$(document).ready(function(){

 $(".fav").submit(function(event){

   var text1 =
   $ (".form-control1").val();
   var text2 =
   $(".form-control2").val();
   var text3 =
   $(".form-control3").val();

   var textCombined = [];
   textCombined.push(text1,text2,text3);

   $("#list1").show();
   $("#1").append(textCombined[0]);
   $("#2").append(textCombined[1]);
   $("#3").append(textCombined[2]);

    event.preventDefault();
 });
});
