
const root = document.querySelector('#root');

const cardArray = userData.map(user => createUserCard(user));


function createUserCard(user) {
    const imageWrapper= createImageWrapper(user);
   
    const h2= crElement('h2',{}, user.name);
    const p =crElement('p',{},user.description);
    const button = crElement('button',{},'Continue')
    
    const wrapper = crElement('div', {classNames: ['card-wrapper']},imageWrapper, h2, p, button )

    wrapper.addEventListener('click', getActiveCard);

    return wrapper;
}



function getActiveCard(event) {

    const activeCard = document.querySelector('.active');
    if (activeCard === event.curentTarget) {
        return
    } else
        if (activeCard) {
            activeCard.classList.remove('active');
        }

    event.curentTarget.classList.add('active')
}



/**
 * 
 * @param {String} type 
 * @param {Object} option 
 * @param {String[]} option.classNames
 * @param  {Node} children 
 * @returns 
 */


function crElement(type,{classNames=[]}, ...children){
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

function createImageWrapper(user){
    const imageWrapper = crElement('div',{classNames:['images-wrapper']},user.name[0]);
    imageWrapper.setAttribute('id', `wrapper-${user.id}`)
    const img = createImage(user);
    return imageWrapper;
}


function createImage(user){

    const img = document.createElement('img');
  
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.dataset.id = user.id;
    img.classList.add('avatar');
    img.addEventListener('error',imageErrorHandler )
    img.addEventListener('load', imageLoadHandler)
    return img;
}

function imageLoadHandler(event){
   
    const parentWrapper = document.querySelector(`#wrapper-${event.target.dataset.id}`);
    parentWrapper.append(event.target);
    console.dir(event.target);

}

function imageErrorHandler(event){
    event.target.remove();

}



root.append(...cardArray)