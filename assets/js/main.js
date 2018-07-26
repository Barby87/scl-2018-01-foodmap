function initMap() {
  const ubicacion = new localization(()=>{

    const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};

    var text = '<h6>Mi posición actual</h6>'

    const options = {
      // Centrando mapa en la posición actual del usuario
      center: myLatLng,
      zoom: 15
    }

    // Dibujando mapa dentro del div "map"
    var map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);
    const marcador = new google.maps.Marker({
      position: myLatLng,
      map: mapa,
      title: "Mi primer marcador"
    });

    var informacion = new google.maps.InfoWindow({
      content: text
    });

    marcador.addListener('click', function(){
      informacion.open(mapa, marcador);
    });

  });
}