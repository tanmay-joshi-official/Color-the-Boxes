// Method 2 (Use this)
console.log("Hello!!")
let box = document.getElementsByClassName("box");
function random_Color(){
    let v1 = Math.ceil(Math.random()* 255);
    let v2 = Math.ceil(Math.random()* 255);
    let v3 = Math.ceil(Math.random()* 255);
    return `rgb(${v1}, ${v2}, ${v3})`
}
Array.from(box).forEach(e=>{
    e.style.backgroundColor = random_Color()
    e.style.color = random_Color()
})

// Method 1
// console.log("Hello!!")
// let n=Math.random();
// let b1 = document.getElementsByClassName("box")
// console.log(n)
// if(n<=0.20){
//     b1[0].style.backgroundColor = "yellow"
//     b1[1].style.backgroundColor = "orange"
//     b1[2].style.backgroundColor = "red"
//     b1[3].style.backgroundColor = "pink"
//     b1[4].style.backgroundColor = "blue"
//     b1[0].style.color = "purple"
//     b1[1].style.color = "maroon"
//     b1[2].style.color = "white"
//     b1[3].style.color = "brown"
//     b1[4].style.color = "red"
// }
// else if(n<=0.40){
//     b1[3].style.backgroundColor = "yellow"
//     b1[4].style.backgroundColor = "orange"
//     b1[0].style.backgroundColor = "red"
//     b1[1].style.backgroundColor = "pink"
//     b1[2].style.backgroundColor = "blue"
//     b1[0].style.color = "purple"
//     b1[4].style.color = "maroon"
//     b1[2].style.color = "white"
//     b1[3].style.color = "brown"
//     b1[1].style.color = "red"
// }
// else if(n<=0.60){
//     b1[4].style.backgroundColor = "yellow"
//     b1[2].style.backgroundColor = "orange"
//     b1[1].style.backgroundColor = "red"
//     b1[0].style.backgroundColor = "pink"
//     b1[3].style.backgroundColor = "blue"
//     b1[4].style.color = "purple"
//     b1[2].style.color = "maroon"
//     b1[0].style.color = "white"
//     b1[1].style.color = "brown"
//     b1[3].style.color = "red"
// }
// else if(n<=0.80){
//     b1[3].style.backgroundColor = "yellow"
//     b1[2].style.backgroundColor = "orange"
//     b1[4].style.backgroundColor = "red"
//     b1[0].style.backgroundColor = "pink"
//     b1[1].style.backgroundColor = "blue"
//     b1[3].style.color = "purple"
//     b1[2].style.color = "maroon"
//     b1[0].style.color = "white"
//     b1[1].style.color = "brown"
//     b1[4].style.color = "red"
// }
// else{
//     b1[2].style.backgroundColor = "yellow"
//     b1[1].style.backgroundColor = "orange"
//     b1[0].style.backgroundColor = "red"
//     b1[4].style.backgroundColor = "pink"
//     b1[3].style.backgroundColor = "blue"
//     b1[2].style.color = "purple"
//     b1[1].style.color = "maroon"
//     b1[0].style.color = "white"
//     b1[3].style.color = "brown"
//     b1[4].style.color = "red"
// }



