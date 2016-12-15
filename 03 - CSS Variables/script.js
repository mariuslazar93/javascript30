var cssVariablesComponent = function() {

    var inputs;

    function handleOnChange(e) {
        var suffix = this.dataset.sizing || '';
        var value = this.value+suffix;
        var name = '--'+this.name;
        document.documentElement.style.setProperty(name,value);
    }

    function bindEvents() {
        inputs.forEach(function(element){
            element.addEventListener('change', handleOnChange);
            element.addEventListener('mousemove', handleOnChange);
        });
    }

    function init() {
        inputs = document.querySelectorAll('.controls input');
        if(inputs)
            bindEvents();
    }

    return {
        init: init
    }
}();

cssVariablesComponent.init();
