$(document).ready(function (){



$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    }
}); 
    $("div.second").replaceWith("<h2>New heading</h2>");

    
})

