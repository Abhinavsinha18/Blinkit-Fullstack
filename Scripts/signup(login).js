let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("openlogin").addEventListener("click", () => {
  let modal_container = document.getElementById("modal_container");
  modal_container.innerHTML = `
    <div id="modals">
            <div id="cancelBox">
            <div><button onclick="cancel()" id="cancel">&#215;</button></div>
            </div>
            <h2>Sign In</h2>
            <div id="input_container">
                <p>Email</p>
                <input type="text" placeholder="Enter email" id="email" class="input">
                <p>Password</p>
                <input type="password" placeholder="Enter password" id="password" class="input">
            </div>
            <button onclick="login()" id="close">Login</button>
            <p>Don't have an account? <button onclick="signupPage()" id="signupPage">Sign Up</button></p>
        </div>
    `;

  modal_container.classList.add("show");
});

function cancel() {
  document.getElementById("modal_container").classList.remove("show");
  // console.log("cancel!");
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email === "" || password === "") {
    alert("Please fill all the fields!");
  } else {
    let flag = false;
    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        flag = true;
        alert("Logged In Successfully!");
        document.getElementById("modal_container").classList.remove("show");
        break;
      }
    }
    if (flag === false) {
      alert("Wrong credentials entered!");
    }
  }
}

function loginPage() {
  document.getElementById("modal_container").innerHTML = `
    <div id="modals">
    <div id="cancelBox">
        <div><button onclick="cancel()" id="cancel">&#215;</button></div>
        </div>
        <h2>Sign In</h2>
        <div id="input_container">
            <p>Email</p>
            <input type="text" placeholder="Enter email" id="email" class="input">
            <p>Password</p>
            <input type="password" placeholder="Enter password" id="password" class="input">
        </div>
        <button onclick="login()" id="close">Login</button>
        <p>Don't have an account? <button onclick="signupPage()" id="signupPage">Sign Up</button></p>
    </div>
    `;
}

function signupPage() {
  document.getElementById("modal_container").innerHTML = `
    <div id="modals">
        <div id="cancelBox">
        <div><button onclick="cancel()" id="cancel">&#215;</button></div>
        </div>
        <h2>Sign Up</h2>
        <div id="input_container">
            <p>Name</p>
            <input type="text" placeholder="Enter your full name" id="name" class="input">
            <p>Email</p>
            <input type="text" placeholder="Enter email" id="email" class="input">
            <p>Password</p>
            <input type="password" placeholder="Enter password" id="password" class="input">
        </div>
        <button onclick="signUp()" id="signup">Sign Up</button>
        <p>Already have an account? <button onclick="loginPage()" id="loginPage">Login</button></p>
    </div>
    `;
  // console.log("SignUp Clicked!");
}


