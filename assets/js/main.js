google.maps.event.addDomListener(window, "load", function(){

  const ubicacion = new localization(()=>{

    const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};

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
    });

    var informacion = new google.maps.InfoWindow({
    });

    marcador.addListener('click', function(){
      informacion.open(mapa, marcador);
    });
    
    var autocomplete = document.getElementById('autocomplete');
   
    const search = new google.maps.places.Autocomplete(autocomplete);
    search.bindTo("bounds",mapa) // Parámetro bounds permite restringir las búsquedas

    // Agregando el evento place_changed para centrar el mapa y ubicar el marcador en el lugar de búsqueda
    search.addListener('place_changed', function(){

      informacion.close(); // Cerrando ventana de información
      marcador.setVisible(false); // Ocultando marcador

      // Guardando nuevo lugar en una nueva variable
      var place = search.getPlace();

      if(!place.geometry.viewport) {
        window.alert("Error al mostrar el lugar");
        return;
      }

      if (place.geometry.viewport) {
        mapa.fitBounds(place.geometry.viewport);
      }else{
        mapa.setCenter(place.geometry.location);
        mapa.setZoom(30);
      }

      // Agregando marcador y ventana de información al nuevo lugar
      marcador.setPosition(place.geometry.location);
      marcador.setVisible(true);

      var address = "";
      if (place.addres_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || ''),
          ];
      }

      informacion.setContent('<div><strong>'+ place.name + '</strong></div><br>' + address);
      informacion.open(map,marcador);

    });

  });

});