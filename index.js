let cards = document.querySelectorAll(".card")

//albums
let college = document.querySelector(".college")
let late = document.querySelector(".late")
let graduation = document.querySelector(".graduation")
let heartbreak = document.querySelector(".heartbreak")
let fantasy = document.querySelector(".fantasy")
let yeezus = document.querySelector(".yeezus")
let pablo = document.querySelector(".pablo")
let ye = document.querySelector(".ye")
let jesus = document.querySelector(".jesus")
let donda = document.querySelector(".donda")
//albums

//tracks
let wire = new Audio('./tracks/wire.mp3')
let followGod = new Audio('./tracks/followGod.mp3')
let goldDigger = new Audio('./tracks/goldDigger.mp3')
let leave = new Audio('./tracks/leave.mp3')
let loveLockDown = new Audio('./tracks/loveLockDown.mp3')
let offTheGrid = new Audio('./tracks/offTheGrid.mp3')
let power = new Audio('./tracks/power.mp3')
let skinhead = new Audio('./tracks/skinhead.mp3')
let stronger = new Audio('./tracks/stronger.mp3')
let wolves = new Audio('./tracks/wolves.mp3')

//tracks

cards.forEach(card =>{
    card.addEventListener("mouseover", activated);
    card.addEventListener("mouseout", deactivated);

    function activated(){
        card.classList.add("active")
        
    }
    function deactivated(){
        card.classList.remove("active")
        
    }
})

//music
playMusic();


function playMusic(){
    college.addEventListener('mouseover',() => {
        goldDigger.pause()
        stronger.pause()
        loveLockDown.pause()
        power.pause()
        skinhead.pause()
        wolves.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.pause()
        wire.play()
        
    })
    late.addEventListener('mouseover',() => {
        wire.pause()
        stronger.pause()
        loveLockDown.pause()
        power.pause()
        skinhead.pause()
        wolves.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.pause()
        goldDigger.play()
        
    })
    graduation.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        loveLockDown.pause()
        power.pause()
        skinhead.pause()
        wolves.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.pause()
        stronger.play()
        
    })
    heartbreak.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        stronger.pause()
        power.pause()
        skinhead.pause()
        wolves.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.pause()
        loveLockDown.play()
        
    })
    fantasy.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        stronger.pause()
        loveLockDown.pause()
        skinhead.pause()
        wolves.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.pause()
        power.play()
        
    })
    yeezus.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        stronger.pause()
        loveLockDown.pause()
        power.pause()
        wolves.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.pause()
        skinhead.play()
        
    })
    pablo.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        stronger.pause()
        loveLockDown.pause()
        power.pause()
        skinhead.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.pause()
        wolves.play()
        
    })
    ye.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        stronger.pause()
        loveLockDown.pause()
        power.pause()
        skinhead.pause()
        wolves.pause()
        followGod.pause()
        offTheGrid.pause()
        leave.play()
        
    })
    jesus.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        stronger.pause()
        loveLockDown.pause()
        power.pause()
        skinhead.pause()
        wolves.pause()
        leave.pause()
        offTheGrid.pause()
        followGod.play()
        
    })
    donda.addEventListener('mouseover',() => {
        wire.pause()
        goldDigger.pause()
        stronger.pause()
        loveLockDown.pause()
        power.pause()
        skinhead.pause()
        wolves.pause()
        leave.pause()
        followGod.pause()
        offTheGrid.play()
        
    })
}


//music
