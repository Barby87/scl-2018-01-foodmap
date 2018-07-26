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