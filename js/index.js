import {_addClass, _removeClass, _OnPlayAudio, _playSound} from '/js/functions.js'; 

(function pressPlayAudio() {
    
    document.addEventListener('click', playAudioOnClick);
    document.addEventListener('keydown', playAudio);

    function playAudio(e) {
        let key = e.key;
        let audio = document.getElementById(key);
        let button = audio.previousElementSibling;
        _playSound(audio, button);
        
    }

    function playAudioOnClick(e) {
        let button = e.target
        let audio = e.target.nextElementSibling;
        _playSound(audio, button);
    }

})();  
