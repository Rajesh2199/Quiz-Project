var c = 45;
var timer = document.getElementById('timer');
var start = document.getElementById('start');


start.addEventListener('click', ticktock) ;

function ticktock(){
    setInterval(function(){
        if (c <= 0 ) {
            clearInterval(c = 0)
        }
            timer.textContent =" Time left" + ":" + c + " seconds";
            c -= 1
            
    }, 1000)
}








