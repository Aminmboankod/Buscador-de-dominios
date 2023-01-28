

function consulta() {
    let dominio = document.getElementById("dominio").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.responseText.length>0){

            let data = JSON.parse(this.responseText);
            let name = data.ldhName
            let expire = data.events[1].eventDate;
            let register = data.events[0].eventDate;

            document.getElementById("resultado").innerHTML = name.toLowerCase() + " not available";
            document.getElementById("fecha-expiracion").innerHTML = "Expires on: " + expire.slice(0, 9);
            document.getElementById("año-registrado").innerHTML = "Registered on: "+ register.slice(0, 9);
        } else { document.getElementById("resultado").innerHTML = "Domain " + dominio + " free.";
        }
    }

    xhttp.open("GET", "https://rdap.verisign.com/com/v1/domain/"+dominio);
    xhttp.send();
}
