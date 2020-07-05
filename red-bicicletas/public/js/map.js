var mymap = L.map('main_map').setView([3.007933, -76.486583], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//Hace una solicitud asincronico a una web en el formato especificado 
$.ajax({
    dataType: 'json',
    url: 'api/bicicletas',
    success: function (result) { //Si resulta exitoso se agregan las bicicletas al mapa
        console.log(result);
        result.bicicletas.forEach(function (bici) {
            L.marker(bici.ubicacion, { title: bici.id }).addTo(mymap);
        });
    }
})
