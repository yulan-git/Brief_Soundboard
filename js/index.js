import {_addClass, _removeClass} from '/js/functions.js'; 

(function pressPlayAudio() {
    let idFileAudio;
    let idButton;
    let touches = ["a", "z", "e", "r", "t", "y", "u", "i", "o"];
    
    document.addEventListener('keydown', playAudio);
    
    let playButtons = document.querySelectorAll('.btn-container');
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', playAudio);
    }
    
    function playAudio(e) {
        let key = e.key;
        let target = e.target;
        let id = target.getAttribute("id");

        if (touches.includes(key)) {
            idFileAudio = document.getElementById(key).nextElementSibling;
            idFileAudio.load();
            idFileAudio.play();

            idButton = idFileAudio.previousElementSibling;
            _addClass(idButton, "sound-active");
            
            idFileAudio.addEventListener('ended', () =>_removeClass(idButton, "sound-active"));
        } else if (touches.includes(id)){
            idFileAudio = document.getElementById(id).nextElementSibling;
            idFileAudio.load();
            idFileAudio.play();

            idButton = idFileAudio.previousElementSibling;
            _addClass(idButton, "sound-active");
            
            idFileAudio.addEventListener('ended', () =>_removeClass(idButton, "sound-active"));
        }
    }
    
    /*function playAudio(e) {
        let key = e.key;
        if (touches.includes(key)) {
            idFileAudio = document.getElementById(key).nextElementSibling;
            console.log(idFileAudio);
            idFileAudio.load();
            idFileAudio.play();

            idButton = idFileAudio.previousElementSibling;
            _addClass(idButton, "sound-active");
            
            idFileAudio.addEventListener('ended', () =>_removeClass(idButton, "sound-active"));
        }
    }

    function playAudioOnClick(e) {
        let target = e.target;
        let id = target.getAttribute("id");
        console.log(id);
        if (touches.includes(id)) {
            idFileAudio = document.getElementById(id).nextElementSibling;
            idFileAudio.load();
            idFileAudio.play();

            idButton = idFileAudio.previousElementSibling;
            _addClass(idButton, "sound-active");
            
            idFileAudio.addEventListener('ended', () =>_removeClass(idButton, "sound-active"));
        }
    }*/

})();  
