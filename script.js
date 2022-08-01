let slider=document.getElementById("range")
let views=document.getElementById("view")
let price=document.getElementById("price")
let biling_btn=document.getElementById("biling-btn")
let session=document.getElementById("session")
let amount=16

//Range
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

slider.addEventListener("mouseover",()=>{
    slider.style.background="linear-gradient(90deg,var(--s-b) "+slider.value+"%,var(--es-b) 0)"
})
slider.addEventListener("mouseout",()=>{
    slider.style.background="linear-gradient(90deg,var(--fs-b) "+slider.value+"%,var(--es-b) 0)"
})



//biling month/year
biling_btn.addEventListener("change",()=>{
    if(biling_btn.value=="1"){
        biling_btn.style.background="var(--s-b)";
        session.innerHTML="Year"
        amount=amount*0.75
        price.innerHTML=`$${amount}`
    }
    else{
        session.innerHTML="Month"
        biling_btn.style.background="var(--es-b)";
        amount=amount/0.75
        price.innerHTML=`$${amount}`
    }
})