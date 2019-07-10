var getInfo = function() {
    let nome = document.getElementById("nome").value;
    document.getElementById("nomeInput").innerHTML = nome;
}

//var BtnValida = document.getElementById("BtnValida");
//BtnValida.onclick = getInfo

//BtnValida.addEventListener('click', getInfo)

document.getElementById("nome").addEventListener('keyup', getInfo)