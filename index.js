

const btnCollection = document.querySelectorAll('button')
const img = document.querySelector('.img')

for (const i of btnCollection) {
    i.addEventListener('click',clickHandler)
    
}

function clickHandler ({target, target:{parentNode, dataset:{src}}}){
   console.dir(target)
    
    img.setAttribute('src', src)
 

}