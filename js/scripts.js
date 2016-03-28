$(document).ready(function() {



  var array = [];

  $('form').submit(function(event){

    var info1 = $("#fav1").val();
    var info2 = $("#fav2").val();
    var info3 = $("#fav3").val();
    var info4 = $("#fav4").val();
    var info5 = $("#fav5").val();
    var info6 = $("#fav6").val();

    array.push(info1,info2,info3,info4,info5,info6);
    console.log(array);

    var array2 = []

    array2.push(array[2], array[4], array[1]);

    $("#first").text(array2[0]);
    $("#second").text(array2[1]);
    $("#third").text(array2[2]);
    
    console.log(array2);
    event.preventDefault();
  });
});
