
const root  = document.querySelector('#root');
const array =[
    './images/pexels-iriser-1381679.jpg',
    './images/pexels-michael-block-1691617-3225517.jpg',
    './images/pexels-pixabay-53125.jpg',
    './images/pexels-pixabay-236599.jpg'
]


function createImage(imgScr){
const img = document.createElement('img');
img.setAttribute('src',imgScr);
img.classList.add('img')
return img;
}

const imageArray = array.map(createImage)

root.append(...imageArray )