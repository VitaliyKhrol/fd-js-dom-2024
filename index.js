

const DB= [
    'images/pexels-iriser-1381679.jpg',
    'images/pexels-michael-block-1691617-3225517.jpg',
    'images/pexels-pixabay-53125.jpg',
    'images/pexels-pixabay-236599.jpg',
    'images/pexels-roshan-kamath-793618-1661179.jpg',
]

const img = document.querySelector('.img');
const[prevBtn,nextBtn]= document.querySelectorAll('.slider-wrapper > .btn');

const slider = new Slider(DB);


function updateViem(){
    img.setAttribute('src',slider.currentSlide)
}

const buttonTadler= (direction = 'next') =>{
       return function(){
          slider.currentIndex = slider[direction]
    updateViem()
    }

}

prevBtn.addEventListener('click',buttonTadler('prev'))

nextBtn.addEventListener('click',buttonTadler('next'))

updateViem();
