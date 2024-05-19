

const root  = document.querySelector('#root');
const toggler  = document.querySelector('.toggler');


const lamp =document.createElement('div');
lamp.classList.add('lamp-off');

root.append(lamp)



toggler.addEventListener('click',toggle)

function toggle(){
    lamp.classList.toggle('lamp-off');
    lamp.classList.toggle('lamp-on');
    console.log(lamp.classList);
}