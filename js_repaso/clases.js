class Vehiculo { 
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad +=1;
    }

    reducirVelocidad() {
        this.velocidad -=1;
     }
}

var vehiculo1 = new Vehiculo('BMW', 200, 2022);
var vehiculo2 = new Vehiculo('AUDI', 250, 2021);
var vehiculo3 = new Vehiculo('MERCES', 100, 2024);
var vehiculo4 = new Vehiculo('KIA', 120, 2023);

// console.log(vehiculo1);
document.write('<h1>Velocidad: ' + vehiculo1.velocidad + '</h1>');
vehiculo1.aumentarVelocidad();
vehiculo1.aumentarVelocidad();
vehiculo1.aumentarVelocidad();
document.write('<h1>Velocidad: ' + vehiculo1.velocidad + '</h1>');
console.log(vehiculo1);
