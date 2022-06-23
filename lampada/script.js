const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
console.log(lamp);
console.log(turnOn);
console.log(turnOff);

function lampiao(){
    lamp.src = './image/ligada.jpg'
}

function lampioff(){
    lamp.src = './image/desligada.jpg'
}


// evento em javascritp
turnOn.addEventListener('click', lampiao)

turnOff.addEventListener('click', lampioff)