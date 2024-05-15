

function clickHandler(event) {
    console.log(event.target)
    const currentBtn = event.target;
    currentBtn.disabled= true;

    currentBtn.removeEventListener('click', clickHandler);
}


const btnCollection = document.querySelectorAll('button');

for (const btn of btnCollection) {
    btn.addEventListener('click', clickHandler);
    
}

