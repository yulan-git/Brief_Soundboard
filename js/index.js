import {_addClass, _removeClass, _OnPlayAudio, _playSound} from '/js/functions.js'; 

(function pressPlayAudio() {

    let touches = ["a", "z", "e", "r", "t", "y", "u", "i", "o"];
    
    document.addEventListener('keydown', playAudio);
    
    let buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', playAudioOnClick);
    }

    function playAudio(e) {
        let key = e.key;
        if (touches.includes(key)) {
            let audio = document.getElementById(key);
            let button = audio.previousElementSibling;
            _playSound(audio, button);
        } else {
            e.preventDefault();
        }   
    }

    function playAudioOnClick(e) {
        let button = e.target
        let audio = e.target.nextElementSibling;
        _playSound(audio, button);
    }

})();  
