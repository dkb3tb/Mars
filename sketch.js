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