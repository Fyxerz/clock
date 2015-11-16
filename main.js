var date = new Date();

var hours = date.getHours();
var minutes = 55 // date.getMinutes();

console.log(date);

console.log(hours);
console.log(minutes);

var nodes = document.querySelectorAll('div');

function checkHour(hour) {

    if (hour > 12) {
        // MAKE AM CLOCK = -12 + 8
        hourDiv = hour - 4;

        nodes[hourDiv].classList.add('active');
    }

    else {
        hourDiv = hour + 8;

        nodes[hourDiv].classList.add('active');      
    }
    
}



function checkMinute() {
        // O'CLOCK
    minuteIf(57, 3, nodes.length - 1);
        // 5 PAST
    minuteIf(3, 7, 5);
        // 10 PAST
    minuteIf(7, 13, 2);
        // QUARTER PAST
    minuteIf(13, 17, 3);
        //  20 PAST
    minuteIf(17, 23, 4);
        // 25 PAST
    minuteIf(23, 27, 4);
    minuteIf(23, 27, 5);
        // HALF PAST
    minuteIf(27, 33, 1);
        // 25 TO
    minuteIf(33, 37, 4);
    minuteIf(33, 37, 5);
        // 20 TO
    minuteIf(37, 43, 4);
        // QUARTER TO
    minuteIf(43, 47, 3);
        // 10 TO
    minuteIf(47, 53, 2);
        // 5 TO
    minuteIf(53, 57, 5);

        // ATIVATE PAST
    minuteIf(3, 33, 8);
        // ACTIVATE TO
    minuteIf(33, 57, 7);
}

function minuteIf(min, max, target) {
    if (minutes > min && minutes <= max) {
      nodes[target].classList.add('active');  
    };  

    if(minutes > 33 && minutes <= 57) {
        checkHour(hours + 1);
    }
}


checkHour(hours);
checkMinute();

