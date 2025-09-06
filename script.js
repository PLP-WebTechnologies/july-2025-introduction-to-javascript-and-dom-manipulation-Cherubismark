// Part 1: Variables & Conditionals
// Check if a person is an adult or minor
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = "You are an adult.";
  } else {
    result = "You are a minor.";
  }

  document.getElementById("ageResult").textContent = result;
});

// Part 2: Functions

// Function to calculate total price
function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

// Function to format a greeting
function greetUser(name) {
  return "Hello, " + name + "!";
}

document.getElementById("calcTotalBtn").addEventListener("click", function() {
  let prices = [10, 20, 15]; // Example prices
  let total = calculateTotal(prices);
  document.getElementById("totalResult").textContent =
    "Total: $" + total + " | " + greetUser("Student");
});

// Part 3: Loops

document.getElementById("showListBtn").addEventListener("click", function() {
  let items = ["Milk", "Bread", "Eggs", "Apples"];
  let listElement = document.getElementById("shoppingList");

  // Clear old list
  listElement.innerHTML = "";

  // Use forEach loop
  items.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
});

// Countdown using a while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}


// Part 4: DOM Manipulation

// Toggle text visibility
document.getElementById("toggleTextBtn").addEventListener("click", function() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

// Create new list items dynamically
document.getElementById("createItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New item added at " + new Date().toLocaleTimeString();
  list.appendChild(li);
});
