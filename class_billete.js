const cash_container = document.getElementById('cash_container');

const billetes_src = [];
billetes_src[1000] = './assets/mil-pesos.png';
billetes_src[500] = './assets/quinientos-pesos.png';
billetes_src[200] = './assets/doscientos-pesos.png';
billetes_src[100] = './assets/cien-pesos.png';
billetes_src[50] = './assets/cincuenta-pesos.png';
billetes_src[20] = './assets/veinte-pesos.png';

class Billete {
    constructor(value, amount) {
        this.value = value;
        this.amount = amount;
        this.image = new Image();

        this.image.src = billetes_src[this.value];
        this.image.alt = `Imagen de un billete de ${this.amount} pesos`;
        this.image.className = 'cash';
    }
    showCash() {
        cash_container.innerHTML += `<img src='${this.image.src}' alt='${this.image.alt}' class='cash' />`;
    }
}

const billetes = [];
billetes.push(new Billete (1000, 10));
billetes.push(new Billete (500, 12));
billetes.push(new Billete (200, 20));
billetes.push(new Billete (100, 25));
