
const [btn1,btn2] = document.querySelectorAll('button')

btn1.addEventListener('mouseover',switcer);
btn2.addEventListener('mouseover',switcer);

btn1.addEventListener('mouseout',switcer);
btn2.addEventListener('mouseout',switcer);



function switcer(){
    let tmp = btn1.textContent;
    btn1.innerText= btn2.textContent;
    btn2.innerText =tmp;

   
}