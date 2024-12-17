// const veg =[
//     {
//       "product__wrapper href": "https://blinkit.com/prn/safal-green-peas/prid/28390",
//       "tag": "14%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/28390a.jpg?ts=1613137376",
//       "etaTag-text 2": "8 mins",
//       "title": "Safal Green Peas",
//       "weight": "500 g",
//       "price": "₹115",
//       "markprice": "₹135"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/spt-frozen-green-peas/prid/379584",
//       "tag": "34%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/379584a.jpg",
//       "etaTag-text 2": "8 mins",
//       "title": "SPT Frozen Green Peas",
//       "weight": "",
//       "price": "₹89",
//       "markprice": "₹135"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/farmland-frozen-green-peas/prid/449124",
//       "tag": "34%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/449124a.jpg",
//       "etaTag-text 2": "8 mins",
//       "title": "Farmland Frozen Green Peas",
//       "weight": "1 kg",
//       "price": "₹158",
//       "markprice": "₹240"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/sakura-edamame-without-pod-frozen-soyabeans/prid/478802",
//       "tag": "",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/478802a.jpg",
//       "etaTag-text 2": "30 mins",
//       "title": "Sakura Edamame Without Pod Frozen Soyabeans",
//       "weight": "500 g",
//       "price": "₹699",
//       "markprice": ""
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/godrej-farmiez-frozen-green-peas/prid/490544",
//       "tag": "33%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/490544a.jpg",
//       "etaTag-text 2": "8 mins",
//       "title": "Godrej Farmiez Frozen Green Peas",
//       "weight": "1 kg",
//       "price": "₹159",
//       "markprice": "₹240"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/sakura-edamame-in-the-pod-frozen-soyabeans/prid/478801",
//       "tag": "",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/478801a.jpg",
//       "etaTag-text 2": "30 mins",
//       "title": "Sakura Edamame in The Pod Frozen Soyabeans",
//       "weight": "500 g",
//       "price": "₹499",
//       "markprice": ""
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/abbies-shiitake-raw-mushroom/prid/478782",
//       "tag": "",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/478782a.jpg",
//       "etaTag-text 2": "30 mins",
//       "title": "Abbie's Shiitake Raw Mushroom",
//       "weight": "100 g",
//       "price": "₹375",
//       "markprice": ""
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/spt-american-frozen-sweet-corn/prid/322036",
//       "tag": "47%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/322036a.jpg",
//       "etaTag-text 2": "8 mins",
//       "title": "SPT American Frozen Sweet Corn",
//       "weight": "",
//       "price": "₹71",
//       "markprice": "₹135"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/farmland-frozen-sweet-corn/prid/449125",
//       "tag": "30%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/449125a.jpg",
//       "etaTag-text 2": "8 mins",
//       "title": "Farmland Frozen Sweet Corn",
//       "weight": "1 kg",
//       "price": "₹139",
//       "markprice": "₹200"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/safal-sweet-corn/prid/28394",
//       "tag": "15%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/28394a.jpg?ts=1590670288",
//       "etaTag-text 2": "8 mins",
//       "title": "Safal Sweet Corn",
//       "weight": "500 g",
//       "price": "₹85",
//       "markprice": "₹100"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/spt-frozen-mixed-vegetables/prid/401935",
//       "tag": "48%\nOFF",
//       "image": "https://cdn.grofers.com/app/images/products/sliding_image/401935a.jpg",
//       "etaTag-text 2": "8 mins",
//       "title": "SPT Frozen Mixed Vegetables",
//       "weight": "500 g",
//       "price": "₹62",
//       "markprice": "₹120"
//     }
//   ]

let veg;
async function products() {
  try {
    let url = `https://blinkitdata-1.onrender.com/frozen`;

    let res = await fetch(url);

    let data = await res.json();
    veg = data;
    display(data);
  } catch (error) {
    console.log(error);
  }
}
products();

function display(data) {
  document.getElementById("result").innerHTML = "";
  data.map(function (ele) {
    let temp = `<div class="inDiv">
  <p class="a-tag">${ele.tag}</p>
  <img onclick="show('${ele.title}')" src="${ele.image}">
  <p class="a-time">${ele.time + " min"}</p>
  <div class="adjustpara">
  <div class="name-a">${ele.title}</div>
  <span>${ele.weight}</span>
  <div class="pricediv">
  <div>
  <p>${ele.price}</p>
  <p>${ele.markprice}</p>
  </div>
  
  
  <span class="addonchangeclick"><h5 onclick="clickonaddbtn('${ele.title}')">
  ADD</h5></span>
  
  
  </div>
  </div>
  
  </div>
  `;
    let div = document.createElement("div");
    div.setAttribute("class", "a-box");
    div.innerHTML = temp;
    let result = document.getElementById("result");
    result.append(div);
  });
}

// _________sorting_____________________

function sorting() {
  var selected = document.getElementById("sort").value;

  // console.log("sorting" + selected);
  // console.log("sorting" + veg);
  if (selected === "Relevance") {
    display(veg);
  }
  if (selected === "Price (Low to high)") {
    veg.sort(function (a, b) {
      let aa = Number(a.price.replace("₹", ""));
      let bb = Number(b.price.replace("₹", ""));
      if (Number(aa) > Number(bb)) return 1;
      if (Number(aa) < Number(bb)) return -1;
      return 0;
    });
    display(veg);
  }
  if (selected === "Price (High to low)") {
    veg.sort(function (a, b) {
      let aa = Number(a.price.replace("₹", ""));
      let bb = Number(b.price.replace("₹", ""));
      if (Number(aa) > Number(bb)) return -1;
      if (Number(aa) < Number(bb)) return 1;
      return 0;
    });
    display(veg);
  }
  if (selected === "Discount (High to low)") {
    veg.sort(function (a, b) {
      if (a.tag > b.tag) return -1;
      if (a.tag < b.tag) return 1;
      return 0;
    });
    display(veg);
  }
  if (selected === "Name (A to Z)") {
    veg.sort(function (a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    display(veg);
  }
  if (selected === "Time (low to High)") {
    veg.sort(function (a, b) {
      if (Number(a.time) > Number(b.time)) return 1;
      if (Number(a.time) < Number(b.time)) return -1;
      return 0;
    });
    display(veg);
  }
}
