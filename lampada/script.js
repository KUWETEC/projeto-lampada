const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
console.log(lamp);
console.log(turnOn);
console.log(turnOff);

function lampadaQuebrada(){
    return lamp.src.indexOf( 'quebrada' ) > -1
}

function lampiao(){
    if ( !lampadaQuebrada () ){
        lamp.src = './image/ligada.jpg'
        lamp.alt = 'Lampada Ligada'
        turnOn.innerHTML = 'Desligada';
    }
}

function lampoff(){
    if ( !lampadaQuebrada()){
        lamp.src = './image/desligada.jpg'
        lamp.alt = 'Lâmpada Desligada'
    }
}

function breakLamp(){
    lamp.src = './image/quebrada.jpg'
}

// evento em javascritp
turnOn.addEventListener('click', lampiao)

turnOff.addEventListener('click', lampoff)

lamp.addEventListener('mouseover', lampiao)

lamp.addEventListener('mouseleave', lampoff)

lamp.addEventListener('dblclick', breakLamp)