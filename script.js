const decreaseButton = document.getElementById('decreasebutton');
const increaseButton = document.getElementById('increasebutton');
const resetButton = document.getElementById('resetbutton');
const counterDisplay = document.getElementById('counterlabel');

let counter = 0;

decreaseButton.onclick = function() {
    counter--;
   counterlabel.textContent = counter;
};

increaseButton.onclick = function() {
    counter++;
    counterlabel.textContent = counter;
};

resetButton.onclick = function() {
    counter = 0;
    counterlabel.textContent = counter;
};
