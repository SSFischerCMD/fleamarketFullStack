    var counter = document.getElementById("counter");
    var add = document.getElementById("add");
    var sub = document.getElementById("sub");
    var double = document.getElementById("double");
    var power = document.getElementById("power");

    var i=1;
    // Reset counter on page load
    counterReset();

    // Add event listeners to buttons
    add.addEventListener("click", counterUp);
    sub.addEventListener("click", counterDown);
    double.addEventListener("click", doublePower);

    function counterReset() {
        counter.innerHTML = "0";
    }

    function counterUp() {
    //Updating the DOM    = convert(string)  to a number for arithmetic operations.
        counter.innerHTML = parseInt(counter.innerHTML)+i; // Increment and update DOM
    }

    function counterDown() {
        counter.innerHTML = parseInt(counter.innerHTML)-i;
    }

    function doublePower(){
        i=i*2;
        power.innerHTML = "power: "+i;
    }


    /*
    JS rules

    using let 
    using === not ==
    */