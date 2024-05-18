

const btnCollection = document.querySelectorAll('button')

for (const i of btnCollection) {
    i.addEventListener('click',clickHandler)
    
}

function clickHandler ({target, target:{parentNode, dataset:{color}}}){
   
    parentNode.style.backgroundColor = color;
 

}