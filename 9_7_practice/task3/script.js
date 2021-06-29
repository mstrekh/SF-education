const trafficLightEl = document.querySelector('#trafficLight_1');
const trafficLightE2 = document.querySelector('#trafficLight_2');
const trafficLightE3 = document.querySelector('#trafficLight_3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE3.style.background = ('black');
}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightEl.style.background = ('black');
}

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE2.style.background = ('black');
}

trafficLightEl.addEventListener('click', changeColor);
trafficLightE2.addEventListener('click', changeColor);
trafficLightE3.addEventListener('click', changeColor);

let counter = 1;
function changeColor() {
   switch(counter) {
       case 1 : {
           makeGreen();
            counter++;
        }
        break;

        case 2 : {
            makeYellow();
            counter++;
        }
        break;
        
        case 3 : {
            makeRed();
            counter = 1;
        }
        break;
    }
}
    
    
