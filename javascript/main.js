const boutonIncrease = document.querySelector('.increase')
const boutonDecrease = document.querySelector('.decrease')
const boutonReset = document.querySelector('.reset')
const counter = document.querySelector('.number')

let nombre= counter.innerHTML

boutonIncrease.addEventListener('click',()=>{
    console.log("coucou")
    if(nombre==0){
        nombre=1
        counter.innerHTML = nombre
    }else {
        nombre +=1
        counter.innerHTML = nombre
    }

})

boutonDecrease.addEventListener('click',()=>{
    nombre -=1
    counter.innerHTML = nombre
})

boutonReset.addEventListener('click',()=>{
    nombre =0
    counter.innerHTML= nombre
})