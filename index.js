

// const root  = document.querySelector('#root');
// const toggler  = document.createElement('button');
// toggler.textContent = 'Switch';
// document.body.append(toggler);


// const lamp =document.createElement('div');
// lamp.classList.add('lamp-off');

// root.append(lamp)



// toggler.addEventListener('click',toggle)

// function toggle(){
//     lamp.classList.toggle('lamp-off');
//     lamp.classList.toggle('lamp-on');
//     console.log(lamp.classList);
// }



const root  = document.querySelector('#root');

const article =document.createElement('article');
const h1 = document.createElement('h1');
const p = document.createElement('p');


h1.textContent='Header';
p.textContent= 'TEXT';


article.append(h1,p)
root.append(article)