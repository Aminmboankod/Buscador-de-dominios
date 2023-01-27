

function consulta() {
    let dominio = document.getElementById("dominio").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.responseText.length>0){  
            let data = JSON.parse(this.responseText);
            document.getElementById("resultado").innerHTML = "El dominio " +data.ldhName + " está registrado.";
            document.getElementById("fecha-expiracion").innerHTML = "La fecha de expiración es: " + data.events[1].eventDate;
            document.getElementById("año-registrado").innerHTML = "El año de registro es: "+ data.events[0].eventDate;
        } else { document.getElementById("resultado").innerHTML = "El dominio " + dominio + " está libre.";
        }
    }

    xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/"+dominio);
    xhttp.send();
}
