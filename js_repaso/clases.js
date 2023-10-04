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

class Autobus extends Vehiculo {
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "la altura del autobus es: " + this.altura;
    }
}

var autobus1 = new Autobus("PEGASUS", 200, 2019);
console.log("Autobus",autobus1);
console.log("Autobus",autobus1.mostrarAltura());




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
