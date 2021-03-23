function _addClass(element, className) {
    element.classList.add(className);
}

function _removeClass(element, className) {
    element.classList.remove(className);
};

function _OnPlayAudio(element) {
    element.currentTime = 0;
    element.play();
}

function _playSound(soundToplay, buttonToPress) {
    _OnPlayAudio(soundToplay);
    _addClass(buttonToPress, "sound-active");
    soundToplay.addEventListener('ended', () =>_removeClass(buttonToPress, "sound-active"));
}

export {_addClass, _removeClass, _OnPlayAudio, _playSound} ;

