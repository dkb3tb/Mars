function toLaunch(URL) {
    window.location = URL;
}

function playMusic(id) {

    var myMusic= document.getElementById(id);
    myMusic.play();

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
function changeScene2(URL){
    window.location = URL;
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
    var s3 = "First, we need to get into position.";
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
        button1.onclick = null;
        button2.onclick = null;
        window.location = 'dockExp.html';
    };

    button2.onclick = function () {
        button1.onclick = null;
        button2.onclick = null;
        document.getElementById("viewObject").src = "images/placeholder.png";
        hohmann();
    };
}

function hohmann() {

    var q0 = "Great job! Everyone knows you need to speed up to slow down...right?";

    var q1 = "Alright, Commander, it's time to leave Earth's orbit. The computer systems will do the hard part of " +
        "calculating the delta-v for the Hohmann transfer, but we'll need to enter a few parameters first. Enter " +
        "the semimajor axis of the transfer orbit's ellipse in AU.";

    var text = document.getElementById("text");
    text.innerHTML = q0;
    setTimeout(function(){text.innerHTML = q1}, 4000);

    var inputho = document.getElementById("input2");

    inputho.addEventListener("keyup", function(event) {
                event.preventDefault();

                if(event.code === "Enter" && isNaN(inputho.value)){
                    text.innerHTML = "Input a value!";
                }
                else if (event.code === "Enter" && (parseFloat(inputho.value) >= 1.76 && parseFloat(inputho.value) <= 1.77)) {
                    inputho.value = "";
                    inputho.parentNode.removeChild(inputho);
                    tcm();
                }
                else if (event.code === "Enter" && (parseFloat(inputho.value) < 1.76 || parseFloat(inputho.value) > 1.77)) {
                    window.location = 'hohmannExp.html';
                }
            }
        )
}

function tcm() {

    var q1 = "Nice Hohmann transfer! I knew you were right for the job.";

    var q2 = "In order to stay on target for Mars, we're going to need to perform a trajectory correction maneuver." +
        " We'll accomplish this with "
    + "a turn. ";
    var q3 = "We'll need to use rotational dynamics in order to find our engine's necessary force to turn. Using " +
    "Newton's second law, if the moment of inertia about the roll axis is 5 and the angular acceleration is 10, find "
    + "The resulting force.";

    var text = document.getElementById("text");
    text.innerHTML = q1;
    setTimeout(function(){text.innerHTML = q3}, 4000);
    setTimeout(function(){text.innerHTML = q3}, 10000);

    var inputtcm = document.getElementById("input4");



    inputtcm
        .addEventListener("keyup", function(event) {
                event.preventDefault();

                if(event.code === "Enter" && isNaN(inputtcm.value)){
                    text.innerHTML = "Input a value!";
                }
                else if (event.code === "Enter" && parseInt(inputtcm.value) === 50) {
                    inputtcm.value = "";
                    inputtcm.parentNode.removeChild(inputtcm);
                    narrateEmergency();
                }
                else if (event.code === "Enter" && parseInt(inputtcm.value) !== 50) {
                    window.location = 'tcmExp.html';
                }
            }
        )
}

function narrateEmergency(){
    var s0 = "You got it! We're only recruiting geniuses at the Murphy's Aeronautics Space Admin...";
    var s1 = "For the love of Pluto! Something has gone wrong! " +
        "None of the crew knows what to do, so you have to ask Mission Control for help!";
    var s2  = "Type the answer into the text area and press 'Enter' when you get it. Ask for help before the timer runs out!";
    var text = document.getElementById("text");

    text.innerHTML = s0;
    setTimeout(function(){text.innerHTML = s1}, 6000);
    setTimeout(function () {text.innerHTML = s2}, 12000);

    setTimeout(function(){makeEmergencyControls()}, 6000);
}

function makeEmergencyControls(){

    var text = document.getElementById("text");

    var button1 = document.getElementById("input1");
    var button2 = document.getElementById("input3");
    var input = document.getElementById("input5");

    var answer = "Houston, we have a problem.";

    input.addEventListener("keypress", function(event) {

            if (event.code === 'Enter'  && input.value === answer) {
                clearInterval(id);
                input.value = "";
                countdown.innerHTML = "";
                input.parentNode.removeChild(input);
                button1.onclick = null;
                button2.onclick = null;
                narrateLanding();
            }
            else if (event.code === 'Enter' && input.value !== "answer") {
                window.location = 'delayExp.html';
            }
        }
    );


    button1.value = "            ";
    button2.value = "Mission Control";

    var react;

    button1.onclick = function () { };

    button2.onclick = function () {
        react = time;
        text.innerHTML = "Waiting for a reply...This could be a while."
        console.log(react);
    };


    var countdown = document.getElementById("countdown");

    var time = 40;
    var delay = 30;
    var id = setInterval(frame, 1000);

    function frame() {

        if (time === 0) {
            window.location = 'delayExp.html';
            clearInterval(id);
        } else {
            setTimeout(function () {
                time--;
                react--;
                delay--;
            }, 1000);
        }
        countdown.innerHTML = time.toString();

        if(delay === 0 && time > 0){
            text.innerHTML = "The answer is: \n" + answer;
        }
    }
}



function enterMars() {
    var mars = document.getElementById("viewObject");
    mars.src = "images/mars.png";
    var size = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (size === 300) {
            clearInterval(id);
        } else {
            size++;
            mars.style.width = size + 'px';
        }
    }
}

function narrateLanding(){

    var s0 = "Phew! That was a close one...";

    setTimeout(function () {enterMars()}, 2000);


    var text = document.getElementById("text");

    var s1 = "Congratulations, Commander! You've arrived at Mars! All that's left is the landing. " +
        "Input your desired angle of entry into the telemetry input bar so that you may enter the Martian " +
        "atmosphere.";
    var s2 = "Be careful not to be too steep or shallow. You're Entering the atmosphere at thousands " +
        "of miles an hour, so if you're too steep, you'll burn up, but if you're too shallow, you skip right off.";

    text.innerHTML = s0;
    setTimeout(function(){text.innerHTML = s1}, 3000);
    setTimeout(function () {text.innerHTML = s2}, 9000);
    makeLandingControls();
}

function makeLandingControls() {

    var text = document.getElementById("text");

    var button1 = document.getElementById("input1");
    var button2 = document.getElementById("input3");
    var input = document.getElementById("input6");

    button1.value = "            ";
    button2.value = "            ";

    var correct;

    input.addEventListener("keypress", function(event) {

            if(isNaN(input.value)){
                text.innerHTML = "Input an integer value!";
            }else{
                if(parseInt(input.value) >= 11 && parseInt(input.value) <= 13){
                    correct = true;
                }else{
                    correct = false;
                }
            }

            if (event.code === 'Enter'  && correct === true) {
                window.location = 'victory.html';
            }
            else if (event.code === 'Enter' && correct === false) {
                window.location = 'landingExp.html';
            }
        }
    )

}