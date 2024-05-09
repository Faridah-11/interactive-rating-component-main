'use strict'

const card = document.querySelector('.card');
const ratingContainer = document.querySelector('.ratings-btns');
const ratingBtn = document.querySelectorAll('.rate');
const submit = document.querySelector('.submit');


let clickedBtn = ratingContainer.addEventListener('click', function(e){
    let clicked = e.target.closest('.rate');
    if(!clicked) return;  

    const markup= `
<div class="response">
        <img src="images/illustration-thank-you.svg" alt="Thank-you" class="illustration">
        <div class="selected">
          <h4>You selected ${clicked.innerHTML} out of 5</h4>
        </div>

        <h3>Thank you!</h3>

        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p>
      </div>
    `;

    submit.addEventListener('click', function(e){
        e.preventDefault();
        card.innerHTML = ' ';
        card.insertAdjacentHTML('afterbegin', markup);  
    })

});


