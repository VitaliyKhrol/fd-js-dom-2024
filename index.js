
const root = document.querySelector('#root');

const cardArray = userData.map(user => createUserCard(user));


function createUserCard(user) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper');

    const img = document.createElement('img');
    img.classList.add('avatar');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name)

    const h2 = document.createElement('h2');
    h2.append(user.name);

    const p = document.createElement('p');
    p.append(user.description);

    const button = document.createElement('button');
    button.append('Content')

    wrapper.append(img, h2, p, button);

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


root.append(...cardArray)