$("#ponctuation").html(sessionStorage.getItem('time'))


function saveScore(){
    let nickname = $("#nick").val()
    if(nickname != ''){
        $("#ask-score").html("Ranked!")
        $("#nick").prop("disabled", "true")
        $("#btn-save").prop("disabled", "true")
        $("#btn-save").html("Saved!")

        addScore(nickname, sessionStorage.getItem('time'))
    }
}


function addScore(nickname, score){
    var ranking = localStorage.getItem("ranking")

    if(ranking == undefined)
        ranking = []
    else
        ranking = JSON.parse(ranking)



    ranking.push({"nick": nickname, "score": score})

    ranking.sort(function(a,b){
        if(parseInt(a.score) > parseInt(b.score)){
            return 1
        }
        else if(parseInt(a.score) < parseInt(b.score)){
            return -1
        }

        if(a.nick > b.nick){
            return 1
        }
        else if(a.nick < b.nick)
            return -1
        
        return 0
    })

    localStorage.setItem("ranking", JSON.stringify(ranking))
}