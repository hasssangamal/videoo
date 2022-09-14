"use strict";

var toatlprice = function toatlprice() {
  var allele = document.querySelectorAll(".itemscreen");
  var total = 0;
  allele.forEach(function (item) {
    var price = Number(item.getElementsByClassName("pricce")[0].innerText.replace("$", ""));
    var quentitiy = Number(item.getElementsByClassName("quntitiy")[0].value);
    total = total + price * quentitiy;
  });
  allprice.innerHTML = "".concat(total, "$");
};

backscreen.addEventListener("change", function (eo) {
  toatlprice();
});
var allbuybtn = document.querySelectorAll(".btn-primary");
allbuybtn.forEach(function (item) {
  item.addEventListener("click", function (eo) {
    item.setAttribute("disabled", "");
    item.classList.add("btn-success");
    item.innerHTML = "&#10004; done";
    var creat = document.createElement("div");
    creat.innerHTML = "&#128525; \u0645\u0628\u0631\u0648\u0648\u0648\u0648\u0648\u0648\u0648\u0648\u0648\u0648\u0648\u0648\u0648\u0643";
    body.prepend(creat);
    creat.setAttribute("class", "mabrook");
    setTimeout(function () {
      creat.style.transform = "translateX(-400%)";
    }, 200);
    var showdetails = document.createElement("div");
    showdetails.innerText = "عرض المشتريات";
    body.prepend(showdetails);
    showdetails.setAttribute("class", "dtails");
    showdetails.addEventListener("click", function (eo) {
      backscreen.style.transform = "translateX(0)";
    });
    var close = document.getElementById("close");
    close.addEventListener("click", function (eo) {
      backscreen.style.transform = "translateX(-104vw)";
    });
    var minycard = item.parentElement.parentElement.parentElement;
    var imgsrc = minycard.getElementsByClassName("card-img-top")[0].getAttribute("src");
    var textitem = minycard.getElementsByClassName("card-title")[0].innerText;
    var priceitem = minycard.getElementsByClassName("price")[0].innerText;
    var app = "<div class=\"itemscreen\" dir=\"rtl\">\n   <div class=\"phop\">\n     <img src=\"".concat(imgsrc, "\" alt=\"\">\n     <p class=\"na\">").concat(textitem, "</p>\n   </div>\n   <div class=\"qunt\">\n     <p>\u0627\u0644\u0643\u0645\u064A\u0629</p>\n     <input type=\"number\" min=\"1\" class=\"quntitiy\" value=\"1\">\n\n   </div>\n   <div class=\"pricce\">").concat(priceitem, "</div>\n   <div class=\"delet btn btn-secondary\">\u062D\u0630\u0641</div>\n </div>");
    article.innerHTML += app;
    toatlprice();
  });
});
backscreen.addEventListener("click", function (eo) {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.remove();
    toatlprice();
    var nameofdeletprod = eo.target.parentElement.getElementsByClassName("na")[0].innerText;
    console.log(nameofdeletprod);
    var allpre = document.querySelectorAll(".card");
    allpre.forEach(function (item) {
      var originalcard = item.getElementsByClassName("card-title")[0].innerText;

      if (nameofdeletprod == originalcard) {
        var btndobe = item.getElementsByClassName("btn-success")[0];
        btndobe.removeAttribute("disabled");
        btndobe.classList.remove("btn-success");
        btndobe.classList.add("btn-primary");
        btndobe.innerText = "buy";
      }
    });
  }
});
var counter = 0;
setInterval(function () {
  var auto = " hassan gamal";
  var sda = auto.slice(0, counter);
  autowriting.innerHTML = "&#x26BE; ".concat(sda);
  counter++;

  if (auto.length < counter) {
    counter = 1;
  }
}, 300);
var aerr = [10, 20, 40];
tottal = 0;

for (var i = 0; i < aerr.length; i++) {
  tottal += aerr[i];
}

console.dir(window);