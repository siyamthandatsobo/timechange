let Convert = document.querySelector('[data-convertminutes]');
let sec = document.getElementById('Sec'); 
let minutes = document.getElementById('Min').value 


Convert.addEventListener('click', function() {
    let min = document.getElementById('Min').value

   minToSec(minutes);

})
// this does the sum to make that minutes converts to seconds
function minToSec(num) {
    let sum = num * 60 ;
sec.value = sum
}