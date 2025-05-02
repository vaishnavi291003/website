function handleColor () {
    box.style.backgroundColor = colors[index];
    index++;
    if(index === colors.length)
    {
   index = 0;
    }
}
const box = document.getElementById("box");
const button = document.getElementById("changecolor");
console.log("testing");
const colors =["red","blue","green","orange","purple","yellow"];
console.log(colors.length);
console.log(colors[2]);
let index = 0;
button.addEventListener("click",handleColor);

