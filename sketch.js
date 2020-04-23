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

    changeScene('space.html');
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
        " get help from Mission Control immediately.";
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

function dockISS(){
    var iss = document.getElementById("viewObject");


    setTimeout(function() {
        iss.src = "images/iss.png";
        var size = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (size === 300) {
                clearInterval(id);
            } else {
                size++;
                iss.style.width = size + 'px';
            }
        }
    },
    20000);
}

function makeControls(){
    var button1 = document.getElementById("input1");
    var button2 = document.getElementById("input3");

    button1.value = "Thrust Forward";
    button2.value = "Thrust Backward";

    button1.onclick = function () {
        window.location = 'dockExp.html';
    }
}

function explainDock(){
    var s = "Oh no! The ISS passed right under you! Orbital mechanics plagued early attempts at docking spacecraft, " +
        "most notably in the failed rendezvous of Gemini IV. James McDivitt also thought to thrust forward in order " +
        "" +
        "to rendezvous with the Gemini booster, sending it away and underneath his spacecraft.\n" +
        "\n" +
        "Because you are in orbit around the Earth, when you fire your thrusters, you are increasing your velocity, " +
        "sending you into a higher phasing orbit. A phasing orbit is a kind of Hohmann Transfer Orbit, adjusting " +
        "the orbital altitude of a spacecraft.\n" +
        "\n" +
        "In this higher orbit, the true anomaly of the spacecraft changes much more slowly due to the Conservation " +
        "of Angular Momentum. This causes the linear distance between you and the target to increase, since its " +
        "true anomaly is changing much faster than yours.\n" +
        "\n" +
        "In order to catch up with the ISS, you actually need to slow down! This puts you on a lower phasing orbit," +
        " speeding up the rate of change of your true anomaly relative to the target. Eventually, you and the " +
        "target will have roughly the same true anomaly, so you can fire your thrusters to move back to the " +
        "higher orbit and rendezvous with the ISS.\n";

    var text = document.getElementById("dockText");
    text.innerHTML = s;
}