import React from 'react'

export default function Notfound() {
    return (
        <div>
      <div class="moon"></div>
<div class="moon__crater moon__crater1"></div>
<div class="moon__crater moon__crater2"></div>

<div class="star star1"></div>
<div class="star star2"></div>
<div class="star star3"></div>
<div class="star star4"></div>
<div class="star star5"></div>

<div class="error">
  <div class="error__title">404</div>
  <div class="error__subtitle">Hmmm...</div>
  <div class="error__description">It looks like one of the  developers fell asleep</div>
  <button class="error__button error__button--active">LOGIN</button>
  <button class="error__button">CONTACT</button>
</div>

<div class="astronaut">
<img src = "astro.png" className="astopersone"></img>
 
  
  
</div>
        </div>
    )
}
