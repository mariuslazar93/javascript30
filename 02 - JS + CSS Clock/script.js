var clockComponent = function(){

    var hourHand,
        minuteHand,
        secondHand;

    function setHours(hours){
        var rotationDegrees = ((hours/12) * 360) + 90;
        hourHand.style.transform = 'rotate(' + rotationDegrees + 'deg)';
    }

    function setMinutes(minutes){
        var rotationDegrees = ((minutes/60) * 360) + 90;
        minuteHand.style.transform = 'rotate(' + rotationDegrees + 'deg)';
    }

    function setSeconds(seconds){
        var rotationDegrees = ((seconds/60) * 360) + 90;
        secondHand.style.transform = 'rotate(' + rotationDegrees + 'deg)';
    }

    function setDate(){
        var currentDate = new Date();
        var h = currentDate.getHours();
        var m = currentDate.getMinutes();
        var s = currentDate.getSeconds();
        setSeconds(s);
        setMinutes(m);
        setHours(h);
    }

    function init(){
        hourHand = document.querySelector('.hour-hand');
        minuteHand = document.querySelector('.min-hand');
        secondHand = document.querySelector('.sec-hand');

        setInterval(setDate, 1000);
    }

    return {
        init: init
    }
}();

clockComponent.init();
