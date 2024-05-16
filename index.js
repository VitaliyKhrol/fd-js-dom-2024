

document.addEventListener('click', clickHandler);
document.body.addEventListener('click',clickHandler);

const parent = document.querySelector('#parent');
parent.addEventListener('click',clickHandler,true);

const btn = document.querySelector('button');
btn.addEventListener('click',clickHandler);


function clickHandler(event){
    console.dir(event.currentTarget)
    event.stopPropagation();
}

