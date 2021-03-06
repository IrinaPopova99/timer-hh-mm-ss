'use strict';

function TimerHHMMSS(idBlock, deadline){
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor(((t/1000) / 60) % 60),
            hours = Math.floor(t/(1000*60*60));
    
        return {
            'total': t,
            'hours': hours,
            'mintes': minutes,
            'seconds': seconds
        };
    }
    
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
            function AddZero(num) {
                if (num < 10) {
                    return '0' + num;
                }
                else {
                    return num;
                }
            }
            hours.textContent = AddZero(t.hours);
            minutes.textContent = AddZero(t.mintes);
            seconds.textContent = AddZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    
    setClock(idBlock, deadline);
}
