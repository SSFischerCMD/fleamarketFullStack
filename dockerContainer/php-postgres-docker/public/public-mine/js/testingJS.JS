    var counter = document.getElementById("counter");
    var add = document.getElementById("add");
    var sub = document.getElementById("sub");

    // Reset counter on page load
    counterReset();

    // Add event listeners to buttons
    add.addEventListener("click", counterUp);
    sub.addEventListener("click", counterDown);

    function counterReset() {
        counter.innerHTML = "0";
    }

    function counterUp() {
    }

    function counterDown() {
    }
