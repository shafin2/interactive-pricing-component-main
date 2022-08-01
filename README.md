# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

(design\Desktop.png)
(design\mobile.png)

### Links

- Solution URL:https://github.com/shafin2/interactive-pricing-component-main
- Live Site URL: https://shafin2.github.io/interactive-pricing-component-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript


### What I learned

I learn how to design input type range, positions in css and gradients.And in JS I learn about onset property

To see how you can add code snippets, see below:

```css
#range{
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    width: 100%;
    height: 10px;
    margin-top:30px;
    background: linear-gradient(90deg,var(--fs-b) 60%,var(--es-b) 0);
}
#range::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--fs-b);
    
}
#range::-webkit-slider-thumb:hover{
    background: var(--s-b);
    box-shadow: 0 0 0 5px var(--fs-b);
    cursor: pointer;
}
```
```js
slider.oninput = function(){
    biling_btn.value="0"
    session.innerHTML="Month"
    biling_btn.style.background="var(--es-b)";
    let sl_val=parseInt(slider.value)
    if(sl_val==0){
        views.innerHTML="0 pageviews"
        price.innerHTML="$0"
        slider.value=0
        amount=0
    }
    else if(sl_val>1 && sl_val<=20){
        views.innerHTML="10K pageviews"
        price.innerHTML="$8"
        slider.value=20
        amount=8
    }
    else if(sl_val>20 && sl_val<=40){
        views.innerHTML="50K pageviews"
        price.innerHTML="$12"
        slider.value=40
        amount=12
    }
    else if(sl_val>40 && sl_val<=60){
        views.innerHTML="100K pageviews"
        price.innerHTML="$16"
        slider.value=60
        amount=16
    }
    else if(sl_val>60 && sl_val<=80){
        views.innerHTML="500K pageviews"
        price.innerHTML="$24"
        slider.value=80
        amount=24
    }
    else if(sl_val>80 && sl_val<=100){
        views.innerHTML="1M pageviews"
        price.innerHTML="$36"
        slider.value=100
        amount=36
    }
    else{
        console.log("Eror occur")
    }
    slider.style.background="linear-gradient(90deg,var(--fs-b) "+slider.value+"%,var(--es-b) 0)"
}
```


### Continued development

I will focus on responsiveness of website,see other properties of css and learn more about JS


### Useful resources

- https://goalkicker.com/CSSBook/CSSNotesForProfessionals.pdf - These notes arebery useful

## Author

- Frontend Mentor - [@shafin2](https://www.frontendmentor.io/profile/shafin2)

