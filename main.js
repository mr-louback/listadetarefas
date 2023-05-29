// function adicionaTarefa() {
//     var input = document.getElementById("input").value
//     var list = document.getElementById("lista")
//     var li = document.createElement("li")
//     li.className = "item"

//     let text = document.createTextNode(input)
//     li.appendChild(text)
//     list.appendChild(li)


//     if(input == 0){
//         alert("Digite uma tarefa!")
//         return
//     }
//     // console.log(input)
// }
let btn = document.getElementById("button")
addEventListener('click', () => {
    let textodigitado = document.getElementById("input").value
    if (textodigitado.value == "") {
        alert("Digite uma tarefa")
        return;
    }
    let lista = document.getElementById("lista")
    let text = document.createTextNode(textodigitado)
    let li = document.createElement('li')
    li.appendChild(text)
    li.className = "item"
    lista.appendChild(li)
    textodigitado.value = ""
})


