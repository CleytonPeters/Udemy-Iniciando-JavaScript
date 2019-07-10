var getInfo = function() {
    let nome = document.getElementById("nome").value;
    //document.getElementById("nomeInput").innerHTML = nome;
    this.style.display = "initial";
    document.getElementById("BtnValida").style.display = "none";
    document.getElementById("BtnValida1").style.display = "initial";

    setTimeout(function () {
        document.getElementById("nomeInput").innerHTML = nome;
        document.getElementById("BtnValida1").style.display = "none";
        document.getElementById("BtnValida").style.display = "initial";
        alert("Enviado.");
    }, 2000);

}

BtnValida.addEventListener('click', getInfo)
