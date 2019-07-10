    class Util {
        static lista(array) {
            let html = '<ul>'
            for (let item of array) {
                html += `
                    <li>${item}</li>
                    `
            }
            html += '</ul>';
            return html;
        }
    }

let array = ["Murilo", "Maria", "Jorge", "Marcelo"];
document.getElementById("id01").innerHTML = Util.lista(array)
  