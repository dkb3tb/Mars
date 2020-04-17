function toLaunch(URL) {
    window.location = URL;
}

function playMusic(id) {

    var myMusic= document.getElementById(id);
    //myMusic.play();

}

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
}

function changeScene(URL){
    setTimeout( function() { window.location = URL }, 6000 );
}

function narrateLaunch(){

    var s1 = "Welcome Commander! You'll be flying on one of Elon Musk's new Starship rockets!";
    var s2 = "As the mission commander of the first manned mission to Mars, you have to be ready for anything.";
    var s3 = "I'm sure that after a semester of learning space flight mechanics, you're ready for this.";
    var s4 = "Blast off whenever you're ready!";

    var text = document.getElementById("text");
    text.innerHTML = s1;
    setTimeout(function(){text.innerHTML = s2}, 6000);
    setTimeout(function(){text.innerHTML = s3}, 12000);
    setTimeout(function(){text.innerHTML = s4}, 18000);
}

function narrateDock(){

    var s1 = "OK Commander, we can hear you fine now, but keep in mind that as you get farther from Earth, you can't" +
        "get help from Mission Control immediately.";
    var s2 = "Now that you've made it into Earth's orbit, you should rendezvous with the ISS " +
        "to pick up extra fuel and supplies";
    var s3 = "Say something intelligent about mass ratio or something here.";
    var s4 = "When you see the ISS come into view, use the controls to fire your boosters.";

    var text = document.getElementById("text");
    text.innerHTML = s1;
    setTimeout(function(){text.innerHTML = s2}, 6000);
    setTimeout(function(){text.innerHTML = s3}, 12000);
    setTimeout(function(){text.innerHTML = s4}, 18000);
}