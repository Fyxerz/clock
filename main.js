
var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();

function init() {
    var nodes = document.querySelectorAll('div');

    checkHour(hours, minutes, nodes);
    checkMinute(nodes);
    refresh();
}


function checkHour(hour, minute, nodes) {


    if (minute > 33) {
        hour = hour + 1;
        nodes[7].classList.add('active');

        if (hour > 12) {
            // MAKE AM CLOCK = -12 + 8
            hourDiv = hour - 4;

            nodes[hourDiv].classList.add('active');

        }

        else if(hour == 0) {
            nodes[20].classList.add('active');
        }

        else {
            hourDiv = hour + 8;

            nodes[hourDiv].classList.add('active');      
        }
    }

    else {
        nodes[8].classList.add('active');

        if (hour > 12) {
            // MAKE AM CLOCK = -12 + 8
            hourDiv = hour - 4;

            nodes[hourDiv].classList.add('active');

        }

        else if(hour == 0) {
            nodes[20].classList.add('active');
        }

        else {
            hourDiv = hour + 8;

            nodes[hourDiv].classList.add('active');      
        }
    };

    
}

function checkMinute(nodes) {
        // O'CLOCK
    minuteIf(57, 3, nodes.length - 1, nodes);
        // 5 PAST
    minuteIf(3, 7, 5, nodes);
        // 10 PAST
    minuteIf(7, 13, 2, nodes);
        // QUARTER PAST
    minuteIf(13, 17, 3, nodes);
        //  20 PAST
    minuteIf(17, 23, 4, nodes);
        // 25 PAST
    minuteIf(23, 27, 4, nodes);
    minuteIf(23, 27, 5, nodes);
        // HALF PAST
    minuteIf(27, 33, 1, nodes);
}

function minuteIf(min, max, target, nodes) {
    if (minutes > min && minutes <= max || minutes < 60 - min && minutes >= 60 - max) {
      nodes[target].classList.add('active');
    }
}

function refresh() {
    setInterval(function() {
        for (var i = 1; i < nodes.length; i++) {
            nodes[i].classList.remove('active');

            checkHour(hours, minutes);
            checkMinute();
        };
    }, 60000);
}

init();

