
const root = document.querySelector('#root');

const cardArray = userData.map(user => createUserCard(user));


function createUserCard(user) {
    const img = document.createElement('img');
    img.classList.add('avatar');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name)

   
    const h2= crElement('h2',{}, user.name);
    const p =crElement('p',{},user.description);
    const button = crElement('button',{},'Continue')
    
    const wrapper = crElement('div', {classNames: ['card-wrapper']},img, h2, p, button )

        wrapper.addEventListener('click', getActiveCard);

    return wrapper;
}



function getActiveCard(event) {
    console.dir(event.curentTarget)
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

    console.log(type);
    console.log(classNames)
    console.log(children)

    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

root.append(...cardArray)