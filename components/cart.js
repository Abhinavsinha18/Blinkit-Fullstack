const cart = () => {
  return ` 
  <div>
    <div id="mycartheading">
      <h4>My Cart</h4>
      <i class="fa-sharp fa-solid fa-xmark" id="closeit"></i>
    </div>
    <div id="incarthtmldetial"></div>
    <div id="showitemdetial">
     
    </div>
  </div>
 `;
};
let productsAllwithDetails;
let caraosual;
async function promise() {
  try {
    let ans = await fetch(
      "https://blinkitdata-1.onrender.com/productsAllwithDetails"
    );
    let ans1 = await ans.json();
    let ans2 = await fetch("https://blinkitdata-1.onrender.com/fresh");
    let ans3 = await ans2.json();
    caraosual = ans3;
    // console.log(ans3);
    productsAllwithDetails = ans1;
  } catch (error) {
    // console.log(error);
  }
}
promise();

function dataforinnercartcara(dataforcarou) {
  dataforcarou.map((el, ind) => {
    let div = document.createElement("div");
    div.className = "process-items";
    div.innerHTML = `
  
    <img
      src=${el.image}
      alt=""
    />
   
    <h5>${el.title}</h5>
    <p>${el.weight}</p>
    <span
      ><p>${el.price}</p>
      <span class="addonchangeclick"
        ><h5 onclick="clickonaddbtn('${el.title}')">ADD</h5></span
      ></span
    >
    
  
      `;

    document.getElementById("carsusal").append(div);
  });
}
const DispalyAlliteminCart = (data) => {
  document.getElementById("allitemincart").innerHTML = "";
  data.map((el, inde) => {
    let div = document.createElement("div");

    div.innerHTML = `
    <img
      src=${el.image}
      alt=""
    />
    <span>
    <h5>${el.title}</h5>
    <p>${el.weight}</p>
    <span
      ><p>${el.price}</p>
      <span class="addqtybuttons"
        ><i class="fa-solid fa-minus" onclick="subtractqty('${el.title}')"></i> <span id="showpresentqty">${el.currentQty} </span><i class="fa-solid fa-plus"  onclick="increaseqty('${el.title}')"></i></span
      ></span
    >
    </span>
 `;
    document.getElementById("allitemincart").append(div);
  });
};

let x = 0;

function clickLeftButton() {
  x++;
  if (x > 0) {
    x = -3;
  }
  document.getElementById("carsusal").style.transform = `translateX(${
    x * 25
  }%)`;
}

function clickRightButton() {
  x--;
  if (x < -3) {
    x = 0;
  }
  document.getElementById("carsusal").style.transform = `translateX(${
    x * 25
  }%)`;
}
function clickonaddbtn(unq) {
  let parent = event.target.parentNode;
  // let mrp = Number(JSON.parse(localStorage.getItem("mrp")) || 0);
  // console.log(mrp);
  let localStoragebuylist =
    JSON.parse(localStorage.getItem("localStoragebuylist")) || [];
  let newn = productsAllwithDetails.filter((el, ind) => {
    if (el.title == unq) {
      el.currentQty = 1;
      // let repw = el.price.replace("₹", "");
      // // mrp += Number(repw);
      return el;
    }
  });
  // localStorage.setItem("mrp", JSON.stringify(mrp));
  // console.log(newn);
  if (newn.length != 0 && newn !== undefined) {
    // console.log("sdgdsg");
    localStoragebuylist.push(newn[0]);

    localStorage.setItem(
      "localStoragebuylist",
      JSON.stringify(localStoragebuylist)
    );

    parent.style.background = "green";
    parent.style.color = "white";
    parent.className = "addqtybuttons";
    // console.log("2" + parent);
    parent.innerHTML = `<i class="fa-solid fa-minus" onclick="subtractqty('${unq}')"></i> <span id="showpresentqty">1  </span><i class="fa-solid fa-plus"  onclick="increaseqty('${unq}')"></i>`;
    always();
    // DispalyAlliteminCart(localStoragebuylist);
  }
}
const subtractqty = (unq) => {
  // console.log("MIN");
  let target = event.target.parentNode.childNodes[2];
  let amount = Number(event.target.parentNode.childNodes[2].innerHTML);
  let localStoragebuylist =
    JSON.parse(localStorage.getItem("localStoragebuylist")) || [];
  // let mrp = Number(JSON.parse(localStorage.getItem("mrp")) || 0);

  if (amount > 1) {
    let finalamount = amount - 1;
    target.innerHTML = finalamount;
    localStoragebuylist.map((el, ind) => {
      if (el.title == unq) {
        // let repw = el.price.replace("₹", "");
        // mrp -= Number(repw);
        el.currentQty = finalamount;
        // return el;
      }
    });
    // localStorage.setItem("mrp", JSON.stringify(mrp));
    localStorage.setItem(
      "localStoragebuylist",
      JSON.stringify(localStoragebuylist)
    );
    always();
  } else {
    let infake;
    localStoragebuylist.map((el, ind) => {
      if (el.title == unq) {
        infake = ind;
        // let repw = el.price.replace("₹", "");
        // mrp -= Number(repw);
      }
    });
    // localStorage.setItem("mrp", JSON.stringify(mrp));
    localStoragebuylist.splice(infake, 1);
    localStorage.setItem(
      "localStoragebuylist",
      JSON.stringify(localStoragebuylist)
    );

    target.parentNode.className = "addonchangeclick";
    target.parentNode.style.background = "#ecffec";
    target.parentNode.style.color = "green";
    target.parentNode.innerHTML = ` <h5 onclick="clickonaddbtn('${unq}')">ADD</h5>`;
    always();
  }
};
const increaseqty = (unq) => {
  // console.log("ADD");
  let target = event.target.parentNode.childNodes[2];
  let amount = Number(event.target.parentNode.childNodes[2].innerHTML);
  // let mrp = Number(JSON.parse(localStorage.getItem("mrp")) || 0);

  let finalamount = amount + 1;
  let localStoragebuylist =
    JSON.parse(localStorage.getItem("localStoragebuylist")) || [];
  localStoragebuylist.map((el, ind) => {
    if (el.title == unq) {
      el.currentQty = finalamount;
      // console.log(el.price);
      // let repw = el.price.replace("₹", "");
      // mrp += Number(repw);
      // console.log(mrp);
    }
  });
  // localStorage.setItem("mrp", JSON.stringify(mrp));
  localStorage.setItem(
    "localStoragebuylist",
    JSON.stringify(localStoragebuylist)
  );
  target.innerHTML = finalamount;
  always();
};
const always = () => {

  let mrp = 0;
  let localStoragebuylist =
    JSON.parse(localStorage.getItem("localStoragebuylist")) || [];
  localStoragebuylist.map((el, inds) => {
    let repw = Number(el.price.replace("₹", ""));
    repw *= el.currentQty;
    mrp += repw;
  });
  if (localStoragebuylist.length != 0) {
    document.getElementById("cartdiv").style.display = "flex";
    document.getElementById("cartdiv").style.padding = "4px 17px";
    document.getElementById(
      "cartdiv"
    ).innerHTML = ` <i class="fa-solid fa-cart-shopping" id="cartanimanttion"></i><span style="display:flex; flex-direction: column;" > ${
      localStoragebuylist.length
    } items <p> ₹${Number(mrp) - 11} </p> </span>`;
    localStorage.setItem("FinalTotalByaLl", JSON.stringify(mrp - 11));
    document.getElementById("incarthtmldetial").innerHTML = `
   <div id="allitemincart" >  </div> <h2 id="Beforecheckout" >Before you checkout</h2>
    <div id="cartinUpCara" >
   <span id="leftforcarousel"><i class="fa-solid fa-angle-left"></i></span>
    <div id="process">
    <div id="carsusal">
     </div>
   </div>
 <span id="rightforcarousel"><i class="fa-solid fa-angle-right"></i></span>
 </div>
 <div id="billdetailsamount">
    <h3>Bill details</h3>
    <span><p> MRP</p> <p>₹${mrp}</p> </span> 
    <span><p> Product discount </p> <p> - ₹11</p> </span> 
    <span><p>  Delivery charge </p> <p> ₹15 FREE</p> </span> 
    <span><p > Hooray! You saved ₹15 on delivery charge</p> </span> 
    <span><p>Coupoun</p> <input type="text" id="coupunencer" placeholder="Enter Coupon.."> </span> 
    <span><p id="showtextmsgcpn"  > </p> </span> 
    <span id="finallbill"><h6> Bill total </h6> <h6 id="showherefinamount"> ₹${
      Number(mrp) - 11
    }</h6> </span> 
    </div>
    <div style="background-color: white; height: 50px;width:100%" ></div>
      `;
    document
      .getElementById("leftforcarousel")
      .addEventListener("click", clickLeftButton);
    document
      .getElementById("rightforcarousel")
      .addEventListener("click", clickRightButton);

    document.getElementById("showitemdetial").innerHTML = ` <h5><span>${
      localStoragebuylist.length
    }</span> items</h5>
    -
    <h5><span id="absoluteinshowamoint"> ₹${Number(mrp) - 11}</span></h5>
    <h5> <a href="../payment/paymentPage.html"> Proceed <i class="fa-solid fa-right-to-bracket"></i></a> </h5>`;
    document
      .getElementById("coupunencer")
      .addEventListener("keypress", (event) => {
        if (event.key == "Enter") {
          // console.log("Ok");
          let cpn = document.getElementById("coupunencer").value || "";

          if (cpn == "Blink10") {
            let amount = Number(mrp) - 11;
            let percent = (amount / 100) * 10;
            // console.log(percent);
            // console.log(amount - percent);
            document.getElementById("showtextmsgcpn").style.display = "block";
            document.getElementById(
              "showherefinamount"
            ).innerHTML = `₹${Math.ceil(amount - percent)}`;
            document.getElementById(
              "absoluteinshowamoint"
            ).innerHTML = `₹${Math.ceil(amount - percent)}`;
            document.getElementById(
              "showtextmsgcpn"
            ).innerHTML = `Hooray! You got 10% OFF ₹${Math.ceil(
              percent
            )} on total`;
            localStorage.setItem(
              "FinalTotalByaLl",
              JSON.stringify(amount - percent)
            );
          } else if (cpn == "Blink-Mega") {
            let amount = Number(mrp) - 11;
            let percent = (amount / 100) * 50;
            // console.log(percent);
            // console.log(amount - percent);
            document.getElementById("showtextmsgcpn").style.display = "block";
            document.getElementById(
              "showherefinamount"
            ).innerHTML = `₹${Math.ceil(amount - percent)}`;
            document.getElementById(
              "absoluteinshowamoint"
            ).innerHTML = `₹${Math.ceil(amount - percent)}`;
            document.getElementById(
              "showtextmsgcpn"
            ).innerHTML = `Hooray! You got 50% OFF ₹${Math.ceil(
              percent
            )} on total`;
            localStorage.setItem(
              "FinalTotalByaLl",
              JSON.stringify(amount - percent)
            );
          } else if (cpn != "Blink10" && cpn != "Blink-Mega") {
            document.getElementById(
              "showtextmsgcpn"
            ).innerHTML = `Sorry!${cpn} Not a Coupon `;
          }
        }
      });
    dataforinnercartcara(caraosual);
    DispalyAlliteminCart(localStoragebuylist);
  } else {
    document.getElementById("cartdiv").style.display = "block";
    document.getElementById("cartdiv").style.padding = "   15px 25px";
    document.getElementById(
      "cartdiv"
    ).innerHTML = `<span> <i class="fa-solid fa-cart-shopping" id="cartanimanttion"></i>My Cart</span>`;

    document.getElementById("showitemdetial").style.display = "none";
    document.getElementById(
      "incarthtmldetial"
    ).innerHTML = `<img src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png" alt="shopping">
    <h3> You don't have any items in your cart </h3> <h5>Your favourite items are just a click away</h5>
      <span id="startshopping">Start Shopping </span>
      

      
      `;
    document
      .querySelector("#incarthtmldetial>span")
      .addEventListener("click", () => {
        cartinhtml.id = "cartinhtm";
      });
  }
};
function show(unq) {
  // console.log(event.target);
  // document.getElementById("PopParentBox").style.display = "intial";
  document.getElementById("PopParentBox").style.display = "block";
  let newn = productsAllwithDetails.filter((el, ind) => {
    if (el.title == unq) {
      el.currentQty = 1;
      // let repw = el.price.replace("₹", "");
      // // mrp += Number(repw);
      return el;
    }
  });
  let obj = newn[0];
  let box = document.getElementById("popBox");

  box.innerHTML = ` <div class="headingforcenter">
    <h1> ${obj.title}</h1>
  </div>
 <i class="fa-sharp fa-solid fa-xmark" id="closeitfromdiscription"></i>
  <div class="a--boxer" >
  <div>
<img src=${obj.image} alt="">
</div>


<div class="secondDIv">
<p> <span class="spanDesign"> Weight</span> ${obj.weight}</p>
<p><span class="spanDesign">Offer</span> - 10% off</p>
<p><span class="spanDesign">Arrive Time</span>${obj.time} min</p>
<div class="details-a"> <span class="spanDesign">Product details</span>  - Grocery Items means Ffood and foodstuffs, green groceries, beverages and household goods usually prepackaged or measured into quantities for household use from containers made for retail grocery or baking sales and not generally suitable for immediate consumption by the purchaser.</div>
<p> <span class="spanDesign">Rating</span>  - ⭐⭐⭐⭐</p>



</div>

</div>
<div class="button-end-a">
<div class="pricediv">
 
<span class="addonchangeclick"><h5 onclick="clickonaddbtn('${obj.title}')">
ADD</h5></span>

</div>
</div>
  
 
 
  </div>
  </div>
  

</div>`;
  document
    .getElementById("closeitfromdiscription")
    .addEventListener("click", () => {
      document.getElementById("PopParentBox").style.display = "none";
    });
}
export {
  cart,
  caraosual,
  productsAllwithDetails,
  DispalyAlliteminCart,
  dataforinnercartcara,
  x,
  clickLeftButton,
  clickRightButton,
  clickonaddbtn,
  subtractqty,
  increaseqty,
  always,
  show,
};
