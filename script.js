//***********Reusable Dom Element********* */
// change background color attribute
const btn=document.querySelector(".md-btn");
const background = document.querySelector("body");
const currentColorNameDisplay=document.querySelector("#color-name");
//changes the color of a given element
// Extract the number values from rgb
function colorNameContrast(rgb) {
    let rgbTotal=rgb.reduce((acc,num) =>  acc+num,0);
    console.log(rgbTotal)
    if (rgbTotal <= 345) {
        currentColorNameDisplay.style.color="white"
    } else {
        currentColorNameDisplay.style.color="black"
        
    }
}
function changeColor(){
    //Array containing rgb values
    let rgbColors=[];
    for (let i = 0; i < 3; i++) {
        rgbColors.push(Math.floor(Math.random()*(255-1+1)+1));       
    }
    console.log(rgbColors)
    //creates decimal to hexidecimal 
    let hexNumber ='#'
    rgbColors.forEach(item => {
        hexNumber +=item.toString(16)
    });
    background.style.backgroundColor = hexNumber;
    currentColorNameDisplay.textContent = `${hexNumber}`;
    colorNameContrast(rgbColors);
}
// Globals
let swatch = [];
let savedColor = [];
//***************** Event Listeners *****************/
btn.addEventListener('click',changeColor);


/*
TODO previous colors feature
    After the first two intial clicks, store color element
     in a div that contains a maximum of 3 small divs with the 
     class name swatch 

TODO
    Have a save feature for each swatch, store in sidenav.
        -these colors are to be cached in local storage
    IS THERE A COLOR API I CAN FETCH FROM?
*/  
    