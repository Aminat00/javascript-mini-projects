let homeInput=document.getElementById('homeVal');
let homeVal= parseInt(document.getElementById('homeVal').value);
let guestInput = document.getElementById('guestVal');
let guestVal= parseInt(document.getElementById('guestVal').value);

console.log(homeVal);
console.log(guestVal);
function Add1(){
    homeInput.value= homeVal++;
}
function Add2(){
    homeInput.value= homeVal+2;
}
function Add3(){
    homeInput.value= homeVal+3;
}
function AddG1(){
    guestInput.value= guestVal++;
}
function AddG2(){
    guestInput.value= guestVal+2;
}
function AddG3(){
    guestInput.value= guestVal+3;
}