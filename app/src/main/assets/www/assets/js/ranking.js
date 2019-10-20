let ranking = JSON.parse(localStorage.getItem("ranking"))

if(ranking.length > 0){
    for(i = 0; i < ranking.length && i <= 4; i++){
        $("#line"+(i+1)+"-name").html(ranking[i].nick)
        $("#line"+(i+1)+"-time").html(ranking[i].score + "s")
    }
}