const input_bar = document.getElementById("money_input");
const output = document.getElementById("atm__output");

const buttonAccept = document.getElementById("button_accept");
buttonAccept.addEventListener('click', pressAccept);

const container_dinero_total = document.getElementById('total_container');

const money_containers = [];

money_containers.push(container_1000 = document.getElementById('1000_container'));
money_containers.push(container_500 = document.getElementById('500_container'));
money_containers.push(container_200 = document.getElementById('200_container'));
money_containers.push(container_100 = document.getElementById('100_container'));

let dinero_total = 0;
let dinero_solicitado = 0;

for (let b of billetes) {
    dinero_total = dinero_total + (b.value * b.amount);
}

function pressAccept() {
    dinero_solicitado = parseInt(input_bar.value);
    
    entregarDinero();
}

function estadoDelCajero () {
    console.group('Estado del cajero')
    console.log('El cajero cuenta con: $' + dinero_total + ' en total.');
    container_dinero_total.innerHTML = `$${dinero_total}`;
    let i = 0;
    for (billete of billetes) {
        money_containers[i].innerHTML = billete.amount;
        i++
        console.log(billete.amount + ' billetes de $' + billete.value + '.');
    }

    console.groupEnd();
}

estadoDelCajero();