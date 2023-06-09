// let keys = document.querySelectorAll('#a')
// console.log(a);
// function sould(a) {
//     console.log(a)
// }
// sould(a)





// function playsound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.which}"]`);
//     const key = document.querySelector(`.key[data-key="${e.which}"]`);
//     console.log('kt',audio)
//     audio.play()
//     key.classList.add('playing')
// }

// const keys = document.querySelectorAll('.key')
// keys

// window.addEventListener('keydown',playsound)


// const keys=document.querySelectorAll(".key");




function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const key = document.querySelector(`.key[data-key="${e.which}"]`);
    audio.play()
    key.classList.add('playing')
}
window.addEventListener('keydown',playsound)