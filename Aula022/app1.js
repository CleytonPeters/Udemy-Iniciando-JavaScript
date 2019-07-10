function getInfo() {
    let nome = document.getElementById("nome").value;    
    document.getElementById("novaLista").innerHTML = document.write(Util.lista([nome]));       
}

class Util {
    static lista(lista) {
        let html = ''
        for (let item of lista) {
            html += `
                <li>${item}</li>
            `
        }
        return html;
        return ;
    }
}

