// Obtener ubicación actual

class localization{
  constructor(callback) {
    // Verificar si el objeto navigator está presente
    if(navigator.geolocation) {
      // Obtenemos ubicación
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        callback();

      });
    }else{
      alert("Lo sentimos, tu navegador no soporta geolocalización :(")
    }
  }
}

/*function findMe() {
  var output = document.getElementById('map');

  // Verificando que el navegador soporte la geolocalización
  if(navigator.geolocation) {
    output.innerHTML = "<p>Tu navegador soporta Geolocalización</p>";
  }else{
    output.innerHTML = "<p>Tu navegador no soporta Geolocalización</p>";
  }
  // Obteniendo latitud y longitud actual
  function localization(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var imgURL = "https://maps.googleapis.com/maps/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyCKDHGRPflfuXDpVh-ftZKf5JmEmWOeIsc";
    
    output.innerHTML ="<img src='"+imgURL+"'>";

    output.innerHTML = "<p>Latitud: "+latitude+"<br>Longitud:"+longitude+"</p>";
  }
  // Función de error
  function error() {
    output.innerHTML = "<p>No pudimos obtener tu ubicación</p>";
  }
  //Método (getCurrentPosition) del objeto geolocation para obtener ubicación actual, tiene como parámetros las funciones de localization y error.
  navigator.geolocation.getCurrentPosition(localization,error);
}


//apikey zomato = d71da783063123665f075e7a90866f00
*/