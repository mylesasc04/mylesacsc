function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("#pfp").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("#pfp").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}