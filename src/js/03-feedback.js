import throttle from 'lodash.throttle'

const inputForm = document.querySelector('.feedback-form');
let formList = {};

inputForm.addEventListener('input', throttle(formInfo, 500));
inputForm.addEventListener('input', addObject)
inputForm.addEventListener('submit', formSend);
function addObject(event) {
    const  {
        elements: { email, message }
    } = event.currentTarget;
    
     formList = {email:`${email.value}`, message: `${message.value}`};
}
   
function formInfo() {
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formList));
              
}

const redoData = JSON.parse(localStorage.getItem('feedback-form-state'));
function pageUpdate() {

if (redoData !== null) {
    inputForm.email.value = redoData.email;
    inputForm.message.value = redoData.message;
}
else {
inputForm.email.value = '';
    inputForm.message.textContent = '';
}
}


function formSend(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    event.currentTarget.reset();
}

pageUpdate();