

const form = document.querySelector('form')
const resultField = document.querySelector('#resultField');
const currencyInput = document.querySelector('#currencyInput');
const currencyOutput = document.querySelector('#currencyOutput');
const KOEFFICIENT ={
    USD: 36.6,
    EUR: 40,
    PLN:8,
    UAN:1
}

form.addEventListener('submit',submitHandler )

function submitHandler(event){

    event.preventDefault();
    const{  target:{amount: {value:amount}, currencyInput:{value: currencyInput},currencyOutput:{value: currencyOutput}}} = event;


    if (Number.isNaN (Number(amount))){
        resultField.textContent = 'Amount must be a number';
    } else {
        resultField.textContent = (amount* KOEFFICIENT[currencyInput]/ KOEFFICIENT[currencyOutput]).toFixed(2)
    }
    


}