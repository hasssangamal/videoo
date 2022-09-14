
const toatlprice = () => {
  const allele = document.querySelectorAll(".itemscreen");
  let total = 0;
  allele.forEach(item => {
    const price = Number(item.getElementsByClassName("pricce")[0].innerText.replace("$", ""));
    const quentitiy = Number(item.getElementsByClassName("quntitiy")[0].value);

    total = total + (price * quentitiy);

  });
  allprice.innerHTML = `${total}$`
}
backscreen.addEventListener("change", (eo) => {
  toatlprice();
})







const allbuybtn = document.querySelectorAll(".btn-primary");
allbuybtn.forEach(item => {
  item.addEventListener("click", (eo) => {
    item.setAttribute("disabled", "");
    item.classList.add("btn-success");
    item.innerHTML = `&#10004; done`;
    const creat = document.createElement("div");
    creat.innerHTML = `&#128525; مبروووووووووووووك`;
    body.prepend(creat);
    creat.setAttribute("class", "mabrook");
    setTimeout(() => {
      creat.style.transform = "translateX(-400%)";
    }, 200);

    const showdetails = document.createElement("div");
    showdetails.innerText = "عرض المشتريات";
    body.prepend(showdetails);
    showdetails.setAttribute("class", "dtails");




    showdetails.addEventListener("click", (eo) => {
      backscreen.style.transform = "translateX(0)";
    })
    const close = document.getElementById("close");
    close.addEventListener("click", (eo) => {
      backscreen.style.transform = "translateX(-104vw)";
    })

    const minycard = item.parentElement.parentElement.parentElement;
    const imgsrc = minycard.getElementsByClassName("card-img-top")[0].getAttribute("src");
    const textitem = minycard.getElementsByClassName("card-title")[0].innerText;
    const priceitem = minycard.getElementsByClassName("price")[0].innerText;
    const app = `<div class="itemscreen" dir="rtl">
   <div class="phop">
     <img src="${imgsrc}" alt="">
     <p class="na">${textitem}</p>
   </div>
   <div class="qunt">
     <p>الكمية</p>
     <input type="number" min="1" class="quntitiy" value="1">

   </div>
   <div class="pricce">${priceitem}</div>
   <div class="delet btn btn-secondary">حذف</div>
 </div>`
    article.innerHTML += app;


    toatlprice();
  })
});


backscreen.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.remove();
    toatlprice();
    const nameofdeletprod = eo.target.parentElement.getElementsByClassName("na")[0].innerText;
    console.log(nameofdeletprod);
    const allpre = document.querySelectorAll(".card");
    allpre.forEach(item => {
      const originalcard = item.getElementsByClassName("card-title")[0].innerText;
      if (nameofdeletprod == originalcard) {
        const btndobe = item.getElementsByClassName("btn-success")[0];
        btndobe.removeAttribute("disabled");
        btndobe.classList.remove("btn-success");
        btndobe.classList.add("btn-primary");
        btndobe.innerText = "buy";


      }

    });


  }
})

let counter = 0;
setInterval(() => {

  const auto = ` hassan gamal`;
  let sda = auto.slice(0, counter);
  autowriting.innerHTML = `&#x26BE; ${sda}`;
  counter++;

  if (auto.length < counter) {
    counter = 1;
  }




}, 300);

const aerr = [10, 20, 40];
tottal = 0;
for (let i = 0; i < aerr.length; i++) {
  tottal += aerr[i];
}
console.dir(window);
