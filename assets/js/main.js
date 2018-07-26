function initMap() {
  const ubicacion = new localization(()=>{

    const options = {
      // Centrando mapa en la posición actual del usuario
      center: {
        lat: ubicacion.latitude, 
        lng: ubicacion.longitude
      },

      zoom: 15
    }

    // Dibujando mapa dentro del div "map"
    var map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);
     
    });

}