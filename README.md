# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Position: relative and absolute
- Desktop-first workflow
- Vanilla Javascript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
  submit.addEventListener('click', function(e){
      e.preventDefault();
      card.innerHTML = ' ';
      card.insertAdjacentHTML('afterbegin', markup);  
  })
```

### Useful resources

- [Example resource 1](https://nekocalc.com/px-to-em-converter)- This helped for my conversion from px to em unit
- [Example resource 2](https://www.geeksforgeeks.org/how-to-target-desktop-tablet-and-mobile-using-media-query/) - This is an amazing article which helped me with my media query width 

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Faridah-11](https://www.frontendmentor.io/profile/Faridah-11)
- Twitter - [@Fari_is_shy](https://www.twitter.com/Fari_is_shy)
