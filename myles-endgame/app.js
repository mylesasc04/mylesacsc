$('.carousel').carousel();

function doBoxes(){
    $(".box2").hide();

    $("#lgButton").click(function(){
        $("#TopBox").hide();
        $(".box2").show();
    });
};

// $(".button").click(function(){
   
//     $(".box2").click(function () {
//         $(".box1").show();
//         $(".box2").hide();

$(doBoxes);