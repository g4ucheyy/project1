console.log("Hello There!");

// greet function
function greet(user) {
  alert("Hello " + user + "!");
}

// get elements
const input = document.getElementById("user");
const button = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

// TIME FUNCTION
const timeDisplay = document.getElementById("time");

function showTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  if (timeDisplay) {
    timeDisplay.innerText = time;
  }
}
showTime();
setInterval(showTime, 1000);

// time-based greeting
function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

// update greeting
function updateGreeting() {
  const user = localStorage.getItem("username");
  const timeGreeting = getTimeGreeting();

  if (user) {
    greeting.innerText = `${timeGreeting}, ${user}!`;
  } else {
    greeting.innerText = `${timeGreeting}, Guest!`;
    forgetBtn.style.display = "none"; // hide button if no user
  }
}

// when button clicked
button.addEventListener("click", () => {
  const user = input.value.trim();

  if (user !== "") {
    //  save the name into localStorage
    localStorage.setItem("username", user);

    const timeGreeting = getTimeGreeting();
    greeting.innerText = `${timeGreeting}, ${user}!`;
    alert(`${timeGreeting}, ${user}`);
  } else {
    alert("Please Enter Your Name!");
  }
});

// auto load saved name
window.addEventListener("load", () => {
  updateGreeting(); // show greeting immediately
});

// ===== FORGET ME =====
forgetBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  updateGreeting();
  alert("Errr where am I??");
});

// ===== INITIAL LOAD =====
window.addEventListener("load", () => {
  updateGreeting();
});

// ===== RANDOM GREETING/ QUOTE =====

const welcomeText = document.getElementById("welcome");
const user = localStorage.getItem("username") || "Guest"; // fallback if no name


const messages = [
   "Welcome, you're at my domain right now.",
   "Ah, you have arrived! Make yourself at home.",
     "Hey there, ${user}! Glad you stopped by.",
    "Where did you came from?",
    "${user}!!!!!!",
    "I love my Thinkpad <3",
    "I use Pop_OS btw",
    "Narutoooooooo!",
    "An array of quotes, yes",
    "Nonsense is the best way to express yourself- canggzy/gauchey",
    "Waiter! Waiter! More quotes please!",
    "#NothingReally",
    "Helloooooooo, ${user}!",
    "#AnotherPointlessHashTagsPleaseRefresh",
    "Pineapple Pizza is goated, >:) Try me",
    "You should have register if you have not, ${user}",
    "Do you have Discord?",
    "#ILoveHackclub"
   

];

// choose random message
function setRandomGreeting() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  // replace ${user} with actual name
  const message = messages[randomIndex].replace("${user}", user);
  welcomeText.innerText = message;
}

setRandomGreeting(); // run once on page load

// auto update greeting every minute
setInterval(updateGreeting, 60000);

const themeToggle = document.getElementById("themeToggle");

// load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// toggle function
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // remember preference
});
