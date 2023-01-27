

function consulta() {
    let dominio = document.getElementById("dominio").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.responseText.length>0){  
            let data = JSON.parse(this.responseText);
            let expiration = data.events[1];
            document.getElementById("resultado").innerHTML = 
            document.getElementById("resultado").innerHTML = "El dominio " +data.ldhName + " está registrado.";
            document.getElementById("fecha-expiracion").innerHTML = "La fecha de expiración es: " + expiration;
        } else { document.getElementById("resultado").innerHTML = "El dominio " + dominio + " está libre.";
        }
    }

    xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/"+dominio);
    xhttp.send();
}


// function query() {
//         let form = document.querySelector('form');
//     let results = document.querySelector('.results');
//     let fechaRegistro = document.querySelector('#fecha-registro');
//     let fechaExpiracion = document.querySelector('#fecha-expiracion');
//     let anyoRegistrado = document.querySelector('#anyo-registrado');

//     form.addEventListener('submit', e => {
//         e.preventDefault();
//         let dominio = document.getElementById('search').value;

//         // llamada a la api aqui

//         results.style.display = 'block';
//         fechaRegistro.innerHTML = `Fecha de registro: ${fechaRegistro}`;
//         fechaExpiracion.innerHTML = `Fecha de expiración: ${fechaExpiracion}`;
//         anyoRegistrado.innerHTML = `Año registrado: ${anyoRegistrado}`;
//     });
// }