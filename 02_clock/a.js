let secondHand=document.querySelector('.sec-hand')
let minHand=document.querySelector('.min-hand')
let hourHand=document.querySelector('.hour-hand')
function setDate (){

    let now = new Date()
  const  offsec=90
    const secondd = now.getSeconds()
    const minn = now.getMinutes()
    const hourr = now.getHours()

    const secondde = ((360/60) * secondd)+offsec;
    const minne = ((360/60) * minn)+offsec;
    // const minne = ((minn / 60) * 360)+offsec;
    const hourre = ((360/12) * hourr)+offsec;
    // const hourre = ((hourr / 12 ) * 360 )+offsec;

    secondHand.style.transform=`rotate(${secondde}deg)`
    minHand.style.transform=`rotate(${minne}deg)`
    hourHand.style.transform=`rotate(${hourre}deg)`

    console.log (secondde)
    console.log (minn)
   console.log (hourr)
}
setInterval(setDate,1000)