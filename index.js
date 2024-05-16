
const div = document.querySelector('div');

div.addEventListener('click',(event)=>{
    console.log(event.clientX,event.clientY);
    const section = document.querySelector('#coordinats');
    section.innerText = `X: ${event.clientX} \n Y:${event.clientY}`
})


