// let input =document.querySelectorAll('input .controll')

// function updateImg(params) {
//     // document.documentElement.style.setProperty()
//     console.log(this.name)
// }

// input.forEach((input) => input.addEventListener('change',updateImg))

const inputs=document.querySelectorAll('input')

function IMG() {
    if(this.name==='base'){
        document.documentElement.style.setProperty(`--${this.name}`,`${this.value}`)
    }
    

    else{
        document.documentElement.style.setProperty(`--${this.name}`,`${this.value}px`)
    }
}
for(var i = 0 ; i <inputs.length;i++){
    inputs[i].addEventListener('change',IMG)
inputs[i].addEventListener('mousemove',IMG)
}







