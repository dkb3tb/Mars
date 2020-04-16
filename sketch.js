function launch() {

    var rocket = document.getElementById("rkt");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos--;
            rocket.style.top = pos + 'px';
        }
    }

    //(changeScene, 6000);
}

function changeScene(URL){
    setTimeout( function() { window.location = URL }, 6000 );
    //document.body.style.backgroundImage = "url(images/cockpit.png)";


}