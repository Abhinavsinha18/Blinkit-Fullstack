import navbar from "../components/navbar.js";
import {
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
} from "../components/cart.js";
import {
  users,
  openonclick,
  cancel,
  login,
  loginPage,
  signupPage,
  signUp,
  currentupdate,
  logoutcur,
  mylocation,
  getReverseGeocodingData,
} from "../components/signup_login.js";

// window.sorting = sorting;
window.clickonaddbtn = clickonaddbtn;
window.subtractqty = subtractqty;
window.increaseqty = increaseqty;
document.getElementById("cartinhtm").innerHTML = cart();
document.getElementById("navbar").innerHTML = navbar(
  "../img/Untitled-1.jpg",
  "../index.html"
);
currentupdate();
mylocation();
document.getElementById("logoutcurrent").addEventListener("click", logoutcur);

const addpluschangehtml = () => {
  console.log(event.target);
};
cartdiv.addEventListener("click", () => {
  cartinhtm.id = "cartinhtml";
  always();
});
document.getElementById("closeit").addEventListener("click", () => {
  document.getElementById("cartinhtml").id = "cartinhtm";
});

// document.getElementById("sortbyprinter").addEventListener("change",sorting(veg))
  
 
  