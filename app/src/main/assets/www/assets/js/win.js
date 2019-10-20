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
    let ranking = localStorage.getItem("ranking") || []

    if(ranking != [])
        ranking = JSON.parse(ranking)

    console.log(ranking)

    ranking.push({"nick": nickname, "score": score})

    ranking.sort(function(a,b){
        if(a.score > b.score){
            return 1
        }
        else if(a.score < b.score){
            return -1
        }

        if(a.nick > b.nick){
            return 1
        }
        else if(a.nick < b.nick)
            return -1
        
        return 0
    })

    console.log(ranking)

    localStorage.setItem("ranking", JSON.stringify(ranking))
}