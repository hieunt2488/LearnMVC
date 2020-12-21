//var button = document.getElementById("buyButton");
//button.addEventListener("click", function () {
//    console.log("Buying Item");
//});

//var productInfo = document.getElementsByClassName("product-props");
//var listItem = productInfo.item[0].children;

var theForm = $("#theForm");
theForm.hide();

var button = $("#buyButton");
button.on("click", function () {
    console.log("Buying Item");
});

var productInfo = $(".product-props li");
productInfo.on("click", function () {
    console.log("You clicked on " + $(this).text());
});