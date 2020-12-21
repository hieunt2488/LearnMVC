alert("Hello cruel world!");
console.log("Log this to the console!");

function myDisplayer(some) {
    document.getElementById("heading").innerHTML = some;
}

async function myFunction() {
    return "Hello";
}

myFunction().then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);