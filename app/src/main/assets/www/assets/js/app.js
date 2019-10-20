Number.prototype.zeroPad = function() {
   return ('0'+this).slice(-2);
};

function attStyle(id, attr, value){
    $("#"+id).css(attr, value)
}

function attProgressBar(value){
    attStyle("pg-bar", "width",value)
    $("#pg-bar").html(value)
}

function generatePercentual(hits){
    if(hits ==6)
        return 100
    else
        return (102/6)*hits
}

var firstMove = true


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function seqGenerate(){
    return shuffle([1,2,3,4,5,6])
}

let seq = seqGenerate()
let hits = 0

console.log(seq)

let seconds = 0, minutes = 0, hours = 0
var timer

function initTime() {
    timer = setInterval(function() {
    seconds++
    if (seconds == 60){
        minutes++
        seconds=0
        if(minutes == 60){
            hours++
            minutes=0
        }
    }

    attTimer()
    }, 1000);
}

function stopTime(){
    clearInterval(timer)
    seconds = minutes = hours = 0
    attTimer()
}

function attTimer(){
    $("#timer").html(hours.zeroPad() + ":" + minutes.zeroPad() + ":" + seconds.zeroPad())
}


function checkMove(numberButton){
    if(firstMove){
        firstMove=false
        initTime()
    }

    if(numberButton == seq[hits]){
        attStyle("btn"+numberButton, "visibility", "hidden")
        setBackgroundColor("btn"+numberButton)
        hits++
        attProgressBar(generatePercentual(hits)+"%")
        $("#timer").css("color", "white")
    }else{
        setBackgroundColor()
        $("#timer").css("color", "black")
        resetButtons()
    }

    if(hits ==6){
        clearInterval(timer)
        sessionStorage.setItem('time', timeCalculate())
        setTimeout(function() {
            window.location.href="win.html"
        }, 1000);
    }
}

function resetButtons(){
    hits=0
    for(i = 1; i <= 6;i++){
        attStyle("btn"+i, "visibility", "visible")
    }
    attProgressBar("0%")
}

function timeCalculate(){
    return seconds + (minutes * 60) + (hours * 3600)
}

function restartGame(){
    stopTime()
    resetButtons()
    seq = seqGenerate()
    console.log(seq)
    firstMove=true
}


function setBackgroundColor(id){
    if(id == undefined)
        $("#main-app").css("background-color", "white")
    else
        $("#main-app").css("background-color", $("#"+id).css('background-color'))
}


