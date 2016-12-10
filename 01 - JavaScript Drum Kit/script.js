var drumKitComponent = function(){
    var keys;

    function playSound(e){
        var pressedKey = e.keyCode;
        var keyElement = document.querySelector('.drum-kit__key[data-key="'+ pressedKey + '"]');
        var audioElement = document.querySelector('audio[data-key="'+ pressedKey + '"]');
        if(keyElement && audioElement){
            audioElement.currentTime = 0;
            audioElement.play();
            keyElement.classList.add('playing');
        }
    }

    function removeTransition(e){
        if(e.propertyName == 'transform'){
            this.classList.remove('playing');
        }
    }

    function bindEvents(){
        document.addEventListener('keydown', playSound);
        for(var i=0, n=keys.length; i<n; i++){
            keys[i].addEventListener('transitionend', removeTransition);
        }
    }
    function init(){
        keys = document.querySelectorAll('.drum-kit__key');
        if(keys)
            bindEvents();
    }

    return {
        init: init
    }
}();

drumKitComponent.init();
