var map;

function success(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    

    if(map === undefined){
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 15);
    } else{
        map.remove();
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 15);
    }


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Eu estou aqui!')
        .openPopup();
}

function error(err) {
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true, //Por padra vem false, POSIÇÂO MAIS PRECISA- Conosme mais bateria
    timeout: 5000 //Por padrao vem infinito, define o tempo que o programa usa pra tentar obter a

});