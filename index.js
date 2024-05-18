

userDataBase = [
    {firstName:'John',
    lastName:'Show',
    avatar: './images/pexels-michael-block-1691617-3225517.jpg',
    email: 'www@gmail,com'
    },
    {firstName:'Ivan',
    lastName:'ShowBoys',
    avatar: 'images/pexels-iriser-1381679.jpg',
    email: 'wwwerw@gmail,com'
    },
    {firstName:'Alina',
    lastName:'SWWW',
    avatar: './images/pexels-roshan-kamath-793618-1661179.jpg',
    email: 'alina@gmail,com'
    },
    {firstName:'Nike',
    lastName:'Ivanov',
    avatar: './images/pexels-pixabay-236599.jpg',
    email: 'nike@gmail,com'
    }
]

const fullName=  document.querySelector('h1');
const emailAdr = document.querySelector('p');
const img = document.querySelector('.img');

const slader = new Slider(userDataBase);

// const[first] = userDataBase;

// const {firstName,lastName,avatar,email} = first;

const[prevBtn,nextBtn]= document.querySelectorAll('.btn');



function updateViem(){
    img.setAttribute('src', slader.currentSlide.avatar);
    fullName.innerText= `${slader.currentSlide.firstName} ${slader.currentSlide.lastName}`;
    emailAdr.innerText = `${slader.currentSlide.email}`

}

const buttonTadler= (direction = 'next') =>{
       return function(){
        
     slader.currentIndex = slader[direction]
    updateViem();
    }

}

prevBtn.addEventListener('click',buttonTadler('prev'))

nextBtn.addEventListener('click',buttonTadler('next'))

updateViem()
