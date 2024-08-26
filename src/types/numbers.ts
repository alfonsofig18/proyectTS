
const villians: number = 20;
let avengers: number = 10;


if (villians > avengers) {
    console.log('Sí');
} else {
    console.log('No'); 
}

avengers = Number('123'); // Aquí retorna un número la función number, que acepta cualquier dato (any) como parámetro, pero retorna un number: (value?: any) => number .Ahora si establecieramos avengers de tipo string, entonces la función al devolver un tipo number marcará un error en la variable avengers