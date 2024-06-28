// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directores = moviesArray.map((pelicula) => pelicula.director) 
    return directores;
}

// Limpiar directores que aparecen dos veces en el array creado

// let directoresRepe = getAllDirectors(moviesArray);
// let directoresSinRepe = [];
// for (let i =0; i < directoresRepe.length; i++) {
//    if (directoresSinRepe.indexOf(directoresRepe[i]) === -1) {
//     directoresSinRepe.push(directoresRepe[i]);
//    }
//  }
// return uniqueArray

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? Cree una función howManyMovies() que reciba una matriz como parámetro y filtre :eyes: la matriz para que podamos tener solo las películas dramáticas donde Steven Spielberg es el director.

function howManyMovies(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }

    const dramaYSpil = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"));

    return dramaYSpil.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if(!moviesArray.length){
        return 0;
    }
    //No puedo usar el filter aqui porque me excluye el 0 y a mi no me interesa que me excluya el 0 por eso mejor usar 
    const puntuaciones = moviesArray.reduce((sum, movie) => {
       //Elimino los valores undefinidos y null de la suma de scores, para que no me de errores 
       if (movie.score !== undefined && movie.score !== null) {
        return sum + movie.score;
        }
        return sum;
    }, 0);
    let promedio = puntuaciones / moviesArray.length;
    //utilizo el toFixed con el valor 2 para redondear el promedio a dos decimales
    //como necesito que el resultado sea en numero le hago un parseFloat
    let promedioR = parseFloat(promedio.toFixed(2));
    return promedioR;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    //filtro las peliculas que sean de drama y las meto en el array dramita
    const dramita = moviesArray.filter(movie => movie.genre.includes("Drama"));

    //Sino hay ninguna pelicula del genero drama
    if(!dramita.length){
        return 0;
    }

    const dramas = dramita.reduce((sum, movie) => {
    //    //Elimino los valores undefinidos y null de la suma de scores, para que no me de errores 
    if (movie.score !== undefined && movie.score !== null) {
        return sum + movie.score;
        }
        return sum;
    }, 0);

    let promedio = dramas / dramita.length;
    let promedioR = parseFloat(promedio.toFixed(2));
    return promedioR;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    //SI PONGO MAP NO ME SALE LO DE SINGLE ARRAY, SI PONGO FILTER SI ME SALE COMO BIEN AUNQUE ME DEVUELVE PARECIDO -- PQ???
    //lo de a continuación dice:
    //si la pelicula tiene la propiedad year lo meto en el array.
    //const year = moviesArray.filter((pelicula) => pelicula.year) 
    // Vamos a usar el spread operator, también archiconocido como "los puntitos". Estos van a hacer una copia del array.
    const year = [...moviesArray]
    //En este caso, la función de comparación (a, b) => a - b compara los elementos a y b. Si a - b es negativo, a se ordenará antes que b. Si es positivo, b se ordenará antes que a. Si es cero, a y b se consideran iguales y no cambian su posición relativa.
    year.sort((a, b) => {
        // 1990 - 2000 = -1
        if(a.year < b.year) return -1
        else if (b.year>a.year) return 1
        else {
            if(a.title<b.title) return -1
            else return 1
        }
    });
    return year;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const ordenado = [...moviesArray]

    ordenado.sort((a, b) => {
        if(a.title<b.title) return -1
        else return 1
    });

    // de el array ordenado saco solo los nombres de las peliculas
    const titleO = ordenado.map((pelicula) => pelicula.title);
    primerosN = titleO.slice(0,20);
    return primerosN;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // Declaro moviesArray se guarda en la posición de memoria 100.
    // Declaro copia superficial: la memoria 200 apunta a 100. 
    // Declaro copia profunda: La memoria 200 no se relaciona con la 100.
    const peliculas = moviesArray.map(pelicula => ({...pelicula}))
    //saco los datos de duracion de pelicula
    let horas = 0;
    let minutosP = 0;

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
        console.log
      }

    //ahora ya puedo calcular los minutos totales
    const minutosTotal = (horas * 60) + minutosP;
    pelicula.duration = minutosTotal;
    });

    return peliculas;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length){
        return null;
    }
//saco los años
    const yearsAverage = [];
    const aYears = moviesArray.map((years) => years.year)
    let yearRep = [];
    for (let i=0; i<aYears.length; i++){
        if(!yearRep.includes(aYears[i])){
            yearRep.push(aYears[i]);
        }
    }
    
    yearRep.forEach((year, index )=> {
        const scoreYears = moviesArray.filter(movie => movie.year === year).map(movie => movie.score);

        const sumScore = scoreYears.reduce ((sum, score) => sum + score, 0);
        const average = sumScore/scoreYears.length;
        yearsAverage[index] = {
            year: year,
            average: average
        }
      });

    console.log(yearsAverage);

    // Solución directa
    /*
      Creamos un bucle forEach que haga lo siguiente:
      1º Detecta el año
      2º Crea la media de ese año
      3º Comprueba si esa media es mejor que la media almacenada
      4º Si es mejor, la sustituye
      5º Finaliza el for.

          moviesArray.forEach( film => {
        moviesArray.forEach (movie => {
            const scoreYears = moviesArray.filter(movie => film.year === movie.year)
            const average = scoreYears.reduce((sum, score)=> sum + score, 0)/scoreYears.length;
            console.log(average);
            if(average > yearsAverage.score) yearsAverage = {score: average, year: film.year}
        })
    */
}