
    function startCounting(targetId, targetValue, duration) {
        let element = document.getElementById(targetId);
        let start = 0;
        let increment = targetValue / duration;

        let counter = setInterval(function () {
            start += increment;
            element.innerText = Math.floor(start);

            if (start >= targetValue) {
                clearInterval(counter);
                element.innerText = targetValue;
            }
        }, 1000);
    }

    // Call the function for each counter
    startCounting('count1', 373, 5); // Replace 5 with the desired duration in seconds
    startCounting('count2', 2.66, 5); // Replace 5 with the desired duration in seconds
    startCounting('count3', 100, 5); // Replace 5 with the desired duration in seconds

