import throttle from 'lodash.throttle'

const inputForm = document.querySelector('.feedback-form');


inputForm.addEventListener('input', throttle(formInfo, 500));
   
function formInfo(event) {
    
    const  {
        elements: { email, message }
    } = event.currentTarget;
    
    const formList = {email:`${email.value}`, message: `${message.value}`};
   
      
    
    localStorage.setItem('feedback-form-state', JSON.stringify(formList));
              
}

inputForm.addEventListener('submit', formSend)

function formSend(event) {
    event.preventDefault();
    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.clear();
    event.currentTarget.reset();
}

