function turnHoursToMinutes(movies) {
    const peliculas = [...movies]
    
    //saco los datos de duracion de pelicula
    let horas = 0;
    let minutosP = 0;
    let minutosTotal = 0;

    peliculas.forEach(pelicula => {
    const duracion = pelicula.duration;
    horas = duracion.match(/(\d+)h/);
    minutosP = duracion.match(/(\d+)min/);
    //la funcion match me da un array de resultados por eso tengo que coger la primera posicion y convertirla en numero para poder operar con el
    
    //para asegurarme que el valor que intento sacar exista
    if (horas) {
        horas = parseInt(horas[1]); 
      }
    
    if (minutosP) {
        minutosP = parseInt(minutosP[1]); // Extraer y convertir los minutos a entero
      }

    //ahora ya puedo calcular los minutos totales
    const minutosTotal = (horas * 60) + minutosP;

    pelicula.duration = minutosTotal;
    });
    
}