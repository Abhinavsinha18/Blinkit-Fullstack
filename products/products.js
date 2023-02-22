import data from "./products.json"assert {
  type: 'json'
};
let url = "https://blinkit-clone.surge.sh/categories/"
showTopData()
showChemist()
dairy_products()
biscuits()

function showTopData() {
  let topProd = document.getElementById('topProd')
  let offer = document.getElementById('offer')
  topProd.innerHTML = null
  offer.innerHTML = null
  data.topData.map((ele, i) => {
    let a = ` <div class="child">
        <img src="${url}${ele.coverFile}" alt="" loading="lazy" srcset="" class="childImg">
    </div>`
    topProd.innerHTML += a;
  })
  data.objects.map((ele, i) => {
    let b = ` <div class="offerchild ">
        <img src="${ele.data.image_url}" alt="" loading="lazy" srcset="" class="offerchildImg">
    </div>`
    offer.innerHTML += b;
  })
}
function coureturn(ele,x,name){
  return  `<div class="w-20_per">
  <img src="${ele.image}" class="" alt="...">
      <div class="bVEkMr">${x}% OFF</div>
        <p>${name}</p>
        <small>${ele.weight}</small>
        <div class="d-flex justify-content-between align-items-center">
        <div><p> ${ele.price}</p><small> <s> ${ele.markprice}</s></small></div>
         <span class="addonchangeclick"><h5 onclick="clickonaddbtn('${ele.title}')">ADD</h5> </span>
      </div>
  </div> `
}
function slidercou(ele,x,name){
  return `<div class="s_child">
  <img src="${ele.image}" class="" alt="...">
  <p>${name}</p>
  <small>${ele.weight}</small>
  <div class="d-flex justify-content-between align-items-center">
      <div>
      <p> ${ele.price}</p><p> <s> ${ele.markprice}</s></p>
      </div>
      <span class="addonchangeclick">
        <h5 onclick="clickonaddbtn('${ele.title}')">ADD</h5>
      </span>
  </div>
</div>`
}

function showChemist() {
  var cor1 = document.getElementById('cor_one')
  var cor2 = document.getElementById('cor_two')
  var cor3 = document.getElementById('cor_three')
  var cor_s1 = document.getElementById('couroSlider')
  var chemistData = []
  fetch('https://real-plum-coral-belt.cyclic.app/exotic').then((data)=>{
    data.json()
    .then((data)=>{
      chemistData = data

  chemistData.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    if (ele.weight=='') {
      ele.weight = '1 piece'
    } else {
      ele.weight = ele.weight
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = slidercou(ele,x,name)
    cor_s1.innerHTML += img;
  })

  let c1 = chemistData.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
  c1.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = coureturn(ele,x,name)
    cor1.innerHTML += img;
  })
  let c2 = chemistData.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = coureturn(ele,x,name)
    cor2.innerHTML += img
  })
  let c3 = chemistData.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = coureturn(ele,x,name)
    cor3.innerHTML += img
  })
})
})
}

function dairy_products() {
  var cor1 = document.getElementById('d_cor_one')
  var cor2 = document.getElementById('d_cor_two')
  var cor3 = document.getElementById('d_cor_three')
  var cor_s2 = document.getElementById('couroSlider1')
  var fruitData = []
  fetch('https://real-plum-coral-belt.cyclic.app/organic').then((data)=>{
    data.json()
    .then((data)=>{
      fruitData = data
      fruitData.map(function(ele) {
        let name = ''
        name = ele.title
        if (name.length <= 20) {
          name = name
        } else {
          name = name.slice(0, 20) + '...'
        }
        if (ele.weight=='') {
          ele.weight = '1 piece'
        } else {
          ele.weight = ele.weight
        }
        let x = 0
        x = Math.floor((Math.random() * 30) + 11);
       let img = slidercou(ele,x,name)
    cor_s2.innerHTML += img;
  })
  let c1 = fruitData.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
    c1.map(function(ele) {
      let name = ''
      name = ele.title
      if (name.length <= 20) {
        name = name
      } else {
        name = name.slice(0, 20) + '...'
      }
      let x = 0
      x = Math.floor((Math.random() * 30) + 11);
      let img = coureturn(ele,x,name)
    cor1.innerHTML += img;
  })
  let c2 = fruitData.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = coureturn(ele,x,name)
    cor2.innerHTML += img
  })
  let c3 = fruitData.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = coureturn(ele,x,name)
    cor3.innerHTML += img
  })
  })
  })
 
}
  

function biscuits() {
  var cor1 = document.getElementById('b_cor_one')
  var cor2 = document.getElementById('b_cor_two')
  var cor3 = document.getElementById('b_cor_three')
  var cor_s3 = document.getElementById('couroSlider2')
  var fruitData = []
  fetch('https://real-plum-coral-belt.cyclic.app/fruits').then((data)=>{
    data.json()
    .then((data)=>{
      fruitData = data
      fruitData.map((ele) => {
        let name = ''
        name = ele.title
        if (name.length <= 20) {
          name = name
        } else {
          name = name.slice(0, 20) + '...'
        }
        if (ele.weight=='') {
          ele.weight = '1 piece'
        } else {
          ele.weight = ele.weight
        }
        let x = 0
        x = Math.floor((Math.random() * 30) + 11);
        let img = slidercou(ele,x,name)
                      cor_s3.innerHTML += img;
  })
  let c1 = fruitData.filter((ele, i) => {
    if (i < 6) {
      return ele
    }
  })
    c1.map((ele) => {
      let name = ''
      name = ele.title
      if (name.length <= 20) {
        name = name
      } else {
        name = name.slice(0, 20) + '...'
      }
      let x = 0
      x = Math.floor((Math.random() * 30) + 11);
      let img = `<div class="w-20_per">
                  <img src="${ele.image}" class="" alt="...">
                      <div class="bVEkMr">${x}% OFF</div>
                        <p>${name}</p>
                        <small>${ele.weight}</small>
                        <div class="d-flex justify-content-between align-items-center">
                        <div><p> ${ele.price}</p><small> <s> ${ele.markprice}</s></small></div>
                         <span class="addonchangeclick"><h5 onclick="clickonaddbtn('${ele.title}')">ADD</h5> </span>
                      </div>
                  </div> `
    cor1.innerHTML += img;
  })
  let c2 = fruitData.filter((ele, i) => {
    if (i > 5 && i < 12) {
      return ele
    }
  })
  c2.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = coureturn(ele,x,name)
    cor2.innerHTML += img
  })
  let c3 = fruitData.filter((ele, i) => {
    if (i > 8 && i < 15) {
      return ele
    }
  })
  c3.map((ele) => {
    let name = ''
    name = ele.title
    if (name.length <= 20) {
      name = name
    } else {
      name = name.slice(0, 20) + '...'
    }
    let x = 0
    x = Math.floor((Math.random() * 30) + 11);
    let img = coureturn(ele,x,name)
    cor3.innerHTML += img
  })
  })
  })
}