console.log("Script is running")
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



