/*
function getAdvice() {
    let conteudo
    fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data => {
        console.log(data)
        let conteudo = ["" + data.slip.id, data.slip.advice]
        console.log(conteudo)

    }
    )
    return conteudo
}
*/


function mudarMensagem() {
    let numero = document.getElementById("num");
    let mensagem = document.getElementById("msg");
    let conteudo
    fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data => {    
        numero.innerHTML = "ADVICE #" + data.slip.id;
        mensagem.innerHTML = data.slip.advice;
    }
    )
}

