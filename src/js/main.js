import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';



//Sticky header

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = function() { myFunction() };


//Progress Bar



let progress = document.getElementsByTagName('progress')

progress.forEach(function() {
    let max = progress.value
    progress.value = 0
    progress.animate({
        value: max
    }, {
        duration: 2000, // number in ms [this would be equiv of your speed].
        easing: 'easeOutCirc',
        iterations: 1, // infinity or a number.
        // fill: ''
    });
});
