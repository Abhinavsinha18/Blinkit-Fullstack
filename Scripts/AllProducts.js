let veg;
async function products() {
  try {
    let url = `https://blinkitdata-1.onrender.com/productsAllwithDetails`;

    let res = await fetch(url);

    let data = await res.json();
    console.log(data);
    veg = data;
    filterBySearch(veg);
  } catch (error) {
    console.log(error);
  }
}
products();

const filterBySearch = (data) => {
  const substring = localStorage.getItem("searchkey") || "Apple";
  document.getElementById("searchnav").value = substring;
  veg = data.filter((el, indx) => {
    if (el.title.includes(substring)) {
      return el;
    }
  });
  if (veg.length != 0) {
    display(veg);
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Sorry Not Found = ${substring} </br> <img id="inneriffail" src="https://cdn.dribbble.com/users/1665077/screenshots/10738715/media/90712c2d7fd869e9d7586a108024d62c.gif">`;
  }
};

function display(data) {
  // console.log("data" + data);
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

function sorting() {
  var selected = document.getElementById("sortbyprinter").value;

  console.log("sorting" + selected);
  console.log("sorting" + veg);
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
