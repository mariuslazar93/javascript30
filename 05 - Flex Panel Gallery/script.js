var flexPanelsComponent = function() {

    var panels;

    function handleOnClick(e) {
        if(this.classList.contains('open')){
            this.classList.remove('open','text-in');
        }
        else{
            panels.forEach(function(elem){
                elem.classList.remove('open','text-in');
            });
            this.classList.add('open');
        }
    }

    function handleTransitionEnd(e){
        if(this.classList.contains('open') && (e.propertyName == "flex" || e.propertyName == "flex-grow")){
            this.classList.add('text-in');
        }
    }

    function bindEvents() {
        panels.forEach(function(element){
            element.addEventListener('click', handleOnClick);
            element.addEventListener('transitionend', handleTransitionEnd);
        });
    }

    function init() {
        panels = document.querySelectorAll('.panels .panel');
        if(panels)
            bindEvents();
    }

    return {
        init: init
    }
}();

flexPanelsComponent.init();
