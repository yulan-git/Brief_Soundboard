function _addClass(element, className) {
    element.classList.add(className);
}

function _removeClass(element, className) {
    element.classList.remove(className);
};

function _OnPlayAudio(element) {
    element.load();
    element.play();
}

export {_addClass, _removeClass, _OnPlayAudio} ;

