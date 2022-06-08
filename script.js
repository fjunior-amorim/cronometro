//========= CRONOMETRO =========
let sec = 0;
let min = 0;
let hor = 0;
let interval;
//========= btn iniciar ==========
const btnStart = document.querySelector(".btn-start");
btnStart.addEventListener('click', start);

function start() {
   interval = setInterval(contador, 1000);
}

//======== interaçao com nun ========
function contador(){
    sec++;
    if(sec === 60){
        sec = 0;
        min++;
    if(min === 60){
        min = 0;
        hor++;
    }
   }
   //======= add zero antes do nun =========
   function zero(dig) {
    if(dig < 10) {
        return '0' + dig;
    }else {
        return dig;
    }
    }
    document.querySelector(".nun").innerHTML = zero(hor) + ':' + zero(min) + ':' + zero(sec);
}

//========== botão pausar ==========
const btnPause = document.querySelector(".btn-pause");
btnPause.addEventListener('click', pause);

function pause(){
    clearInterval(interval);
}

//========== botão parar ==========
const btnStop = document.querySelector(".btn-stop");
btnStop.addEventListener('click', stop);

function stop(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    hor = 0;
    document.querySelector(".nun").innerHTML = '00:00:00'
}