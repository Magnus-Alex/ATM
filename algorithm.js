function entregarDinero () {
    if (dinero_solicitado === 0) {
        output.innerHTML = 'Introduzca una cantidad válida';
    }
    else if (dinero_solicitado === 12062017) {
        output.innerHTML = 'Sólo quería que supieras cuánto te amo <3';
    }
    else if (dinero_solicitado > dinero_total) {
        output.innerHTML = 'Cajero sin fondos';
    }
    else if (dinero_solicitado%billetes[billetes.length - 1].value !== 0) {
        output.innerHTML = 'No contamos con la denominación de billetes para cubrir su solicitud.';
    }
    else {
        let entregrados = [];
        let conteo_dinero = dinero_solicitado;

        cash_container.innerHTML = " ";

        for (let billete of billetes) {
            let division = Math.floor(conteo_dinero / billete.value);
            if (division >= billete.amount) {
                entregrados.push(new Billete (billete.value, billete.amount));
                conteo_dinero -= billete.amount * billete.value;
                billete.amount = 0;
            }
            else {
                entregrados.push(new Billete (billete.value, division));
                conteo_dinero -= division * billete.value;
                billete.amount -= division;
            }
        }
        for (e of entregrados) {
            output.innerHTML = 'Dinero entregado';
            dinero_total -= e.value * e.amount;  
            for (let i = 1 ; i <= e.amount; i++) {
                e.showCash();
            }
        }
        console.log(entregrados);
    }
    estadoDelCajero();
}