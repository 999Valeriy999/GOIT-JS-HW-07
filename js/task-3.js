
const userName =document.querySelector("#name-input");
const OutName =document.querySelector("#name-output");

userName.addEventListener ("input",handleInput);
function handleInput(event){
const userName = event. currentTarget. value;
const OutName=event. currentTarget. value ;


if (userName. type ==="text") {
    
alert (`Hello ${userName}`)
} else {
    userName. type ===" "
   
    alert (`Hello, ${OutName}`) 
}
}



