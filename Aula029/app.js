function executarFormulario() {

    if (validacao() ) {
        return;
    }

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;

    let exibeDados = document.getElementById('exibeDados');
    exibeDados.innerHTML += `<p>Nome: ${nome}</p>`;
    exibeDados.innerHTML += `<p>Sobrenome: ${sobrenome}</p>`;
    exibeDados.innerHTML += `<p>Estado: ${estado}</p>`;
    exibeDados.innerHTML += `<p>Cidade: ${cidade}</p>`;
}

function escolheEstado() {

    let lista = [
        {
            "estado": "RS",
            "cidades": [
                { "nome": "Porto Alegre", "valor": "portoalegre" },
                { "nome": "Caxias do Sul", "valor": "caxiasdosul" },
            ]
        },
        {
            "estado": "SC",
            "cidades": [
                { "nome": "Joinville", "valor": "joinville" },
                { "nome": "Florianopolis", "valor": "florianopolis" },
            ]
        },
        {
            "estado": "PR",
            "cidades": [
                { "nome": "Foz do Iguacu", "valor": "fozdoiguacu" },
                { "nome": "Londrina", "valor": "londrina" },
            ]
        },
    ];
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade');
    let existeEstado = false;

    for (let item of lista) {
        if (item.estado == estado) {
            existeEstado = true;
            let option = "";
            for (let item2 of item.cidades) {
                option += `<option value="${item2.valor}">${item2.nome}</option>`;
            }
            cidade.style.display = "initial";
            cidade.innerHTML = option;

        }
    }

    if (!existeEstado) {
        cidade.style.display = "none";
    }
}


function validacao() {
    let temErro = false;

    let nome = document.getElementById('nome').value;

    let elementoNome = document.getElementById('nome')
    let nodePai = elementoNome.parentNode;
    if (!document.getElementById('nomeErro')) {
        nodePai.innerHTML += `<span id="nomeErro" style="display:none"></span>`;
        document.getElementById('nome').value = nome;
    }

    let nomeErro = document.getElementById('nomeErro');
    

    if (nome == "") {
        nomeErro.innerHTML = "Preencha um nome válido";
        nomeErro.style.display = "initial";
        temErro = true;
    } else {
        nomeErro.style.display = "none";
    }
    return temErro;
}