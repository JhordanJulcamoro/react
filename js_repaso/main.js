// alert('hola mundo');

var nombre = "Jhordan Julcamoro";
var altura = 189;

var concat = nombre + " " + altura;
// var datos = document.getElementById("datos");

// datos.innerHTML = `
//     <h1>Soy la caja de datos</h1>
//     <h2> Mi nombre es: ${nombre}</h2>
//     <h3> Mi altura es: ${altura} cm</h3>
// `;

// if(altura >= 190){
//     datos.innerHTML += '<h1> Eres una persona alta</h1>';
// }else {
//     datos.innerHTML += '<h1> Eres una persona baja</h1>';
// }

// for(var i = 2010; i <=2020; i++) {
//     //bloque de instrucciones
//     datos.innerHTML += "<h2> Estamos en el anho: " + i;
// }

function MuestraMiNombre(nombre, altura) {
    var misdatos = `
    <h1>Soy la caja de datos</h1>
    <h2> Mi nombre es: ${nombre}</h2>
    <h3> Mi altura es: ${altura} cm</h3>
`;
    return misdatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Jhordan JH", 164)

}

imprimir();

var nombres =['Jhordan', 'Carlos', 'Pedro'];
// alert(nombres[1]);

document.write('<h1> Listado de nombres: </h1>');
// for (var i = 0; i < nombres.length; i++){
//     document.write(nombres[i] + '<br />');
// }

nombres.forEach((nombreA) => {
    document.write(nombreA + '<br />');
});

//objetos JSON
var vehiculo = {
    model: 'Mercedes A',
    velocidad: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.model,this.velocidad,this.antiguedad);
    },
    propedad1: "Val aleatorio"
}

document.write('<h1>'+vehiculo.model + '</h1>');
vehiculo.mostrarDatos();

console.log(vehiculo);


//Promesas
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola soy Jhordan :D";
        saludo = false;
        if (saludo){
            resolve(saludo);
        } else {
            reject('No hay saludo');
        }
    },2000);
});

saludar.then(resultado => {
    alert(resultado);
}).catch(err => {
    alert(err);
});