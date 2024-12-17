// const veg =[
//     {
//       "product__wrapper href": "https://blinkit.com/prn/assorted-pooja-flowers/prid/450376",
//       "tag": "12%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450376a.jpg",
//       "title": "Assorted Pooja Flowers",
//       "weight": "100 g",
//       "price": "₹48",
//       "markprice": "₹55"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/orange-marigold-flower-string-garland-genda/prid/476877",
//       "tag": "15%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476877a.jpg",
//       "title": "Orange Marigold Flower String / Garland (Genda)",
//       "weight": "",
//       "price": "₹69",
//       "markprice": "₹82"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/orange-marigold-flowers-genda/prid/476812",
//       "tag": "20%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476812a.jpg",
//       "title": "Orange Marigold Flowers (Genda)",
//       "weight": "100 g",
//       "price": "₹48",
//       "markprice": "₹60"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/rose-flower-petals-gulab/prid/450385",
//       "tag": "20%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450385a.jpg",
//       "title": "Rose Flower Petals (Gulab)",
//       "weight": "100 g",
//       "price": "₹48",
//       "markprice": "₹60"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/yellow-marigold-flowers-genda/prid/476813",
//       "tag": "16%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476813a.jpg",
//       "title": "Yellow Marigold Flowers (Genda)",
//       "weight": "100 g",
//       "price": "₹50",
//       "markprice": "₹60"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/lotus-flower-kamal/prid/450390",
//       "tag": "14%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450390a.jpg",
//       "title": "Lotus Flower (Kamal)",
//       "weight": "",
//       "price": "₹63",
//       "markprice": "₹74"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/betel-leaves-paan-patta/prid/450391",
//       "tag": "13%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450391a.jpg",
//       "title": "Betel Leaves (Paan Patta)",
//       "weight": "5 pieces",
//       "price": "₹31",
//       "markprice": "₹36"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/orange-marigold-flowers-yellow-marigold-flowers-combo/prid/495884",
//       "tag": "19%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/495884a.jpg",
//       "title": "Orange Marigold Flowers + Yellow Marigold Flowers Combo",
//       "weight": "100 g + 100 g",
//       "price": "₹97",
//       "markprice": "₹120"
//     },
//     {
//       "product__wrapper href": "https://blinkit.com/prn/pooja-combo/prid/496258",
//       "tag": "15%\nOFF",
//       "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/496258a.jpg",
//       "title": "Pooja Combo",
//       "weight": "Combo of 3",
//       "price": "₹131",
//       "markprice": "₹155"
//     }
//   ]

let veg;
async function products() {
  try {
    let url = `https://blinkitdata-1.onrender.com/flower`;

    let res = await fetch(url);

    let data = await res.json();
    // console.log(data);
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

// function startSpeechRecognition() {
//   // console.log("start");
//   document.getElementById("micsearch").className = "fas fa-microphone";
//   micflag = false;
//   // searchFormInput.focus();
//   console.log("Voice activated, SPEAK");
//   recognition.addEventListener("result", resultOfSpeechRecognition);
// }

// function endSpeechRecognition() {
//   micflag = true;

//   document.getElementById("micsearch").className = "fas fa-microphone-slash ";
//   searchFormInput.focus();
//   console.log("Speech recognition service disconnected");
// }
// function resultOfSpeechRecognition(event) {
//   const current = event.resultIndex;
//   const transcript = event.results[current][0].transcript;

//   if (transcript.toLowerCase().trim() === "stop recording") {
//     recognition.stop();
//   } else if (!searchFormInput.value) {
//     searchFormInput.value = transcript;
//   } else {
//     if (transcript.toLowerCase().trim() === "go") {
//       searchForm.submit();
//     } else if (transcript.toLowerCase().trim() === "reset input") {
//       searchFormInput.value = "";
//     } else {
//       searchFormInput.value = transcript;
//     }
//   }
// }
// document.getElementById("micsearch").addEventListener("click", micBtnClick);
// recognition.addEventListener("start", startSpeechRecognition);
// recognition.addEventListener("end", endSpeechRecognition);
