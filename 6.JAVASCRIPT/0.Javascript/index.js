/* css */

function show(){
     document.getElementById("user-menu-dropdown").style.display = "block";
}


// const animationSection = document.querySelector('.animation-section');
// const movingImage = document.querySelector('.moving-image');

// let isAnimationPlayed = false;

// function checkAnimation() {
//     const sectionRect = animationSection.getBoundingClientRect();

//     // Check if the section is in the viewport
//     if (sectionRect.left <= window.innerWidth && !isAnimationPlayed) {
//         // Move the image to the left
//         movingImage.style.transform = 'translateX(-100%)';
//         isAnimationPlayed = true;
//     }
// }

// // Listen for scroll events to trigger the animation
// window.addEventListener('scroll', checkAnimation);

// // Check initially in case the section is already in the viewport
// checkAnimation();




// const names = {
//      firstName: "Vimal",
//      lastName: "Dutt"
// }
// Object.freeze(names)
// names.firstName = "vivek";
// names.middleName = "Rinkesh"
// console.log(names);

/********************************************** */

// // Define a constructor for a Person object
// function Person(name, age) {
//      this.name = name;
//      this.age = age;
// }

// // Define a constructor for a Student object that inherits from the Person object
// function Student(name, age, school) {
//      // Use the call() method to invoke the Person constructor
//      // with the current object as the "this" value
//      Person.call(this, name, age);

//      this.school = school;
// }

// // Create a new Student object
// var student = new Student("John Doe", 21, "UC Berkeley");

// // Print the student's name, age, and school
// console.log(student.name); // John Doe
// console.log(student.age); // 21
// console.log(student.school); // UC Berkeley

/*********************************************** */

function calculateDaysUntilChristmas() {
     const today = new Date();
     console.log(today);

     const christmasEve = new Date(today.getFullYear(), 11, 24);
     console.log(christmasEve);

     if (today > christmasEve) {
       christmasEve.setFullYear(christmasEve.getFullYear() + 1);
     }

     const daysUntilChristmas = Math.ceil((christmasEve.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
     console.log(daysUntilChristmas);

     return daysUntilChristmas;
   }

   const Christmas = calculateDaysUntilChristmas();

   console.log(Christmas);

/*********************************************** */

// var nameTextBox = document.getElementById("name");

// nameTextBox.addEventListener("blur", function() {
//   if (nameTextBox.value === "") {
//     alert("Please enter a name.");
//   }
// })


/*********************************************** */

function ValidateIPaddress(inputText) {
     var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
     if (inputText.value.match(ipformat)) {
          document.form1.ip_address.focus();
          return console.log(true);;
     }
     else {
          alert("You have entered an invalid IP address!");
          document.form1.ip_address.focus(); return false;
     }
} 

/***************************************** */

// Get the current URL
const currentUrl = new URL("http://127.0.0.1:5501/0.Javascript/index.html?ip_address=&submit=Submit#");
// Set the value of the "name" query string parameter to "John"
currentUrl.searchParams.set("name", "John");
console.log(currentUrl.href);
// Outputs the updated URL with the "name" query string parameter set to "John"


/************************************************* */

// Get the dropdown list
var dropdown = document.getElementById("myDropdown");

// Create an array of values
var values = ["Red", "Blue", "Green", "White", "Purple"];

// Iterate over the array and create an option element for each value
for (var i = 0; i < values.length; i++) {
     var option = document.createElement("option");
     option.textContent = values[i];
     dropdown.appendChild(option);
}

/********************************** */


// Create a dropdown menu with a list of images.
var images = [
     "image1.jpg",
     "image2.jpg",
     "image3.jpg"
];

var dropdown = document.createElement("select");
for (var i = 0; i < images.length; i++) {
     var option = document.createElement("option");
     option.value = images[i];
     option.textContent = images[i];
     dropdown.appendChild(option);
}

// Add an event listener to the dropdown menu that will be triggered when a user selects an option.
dropdown.addEventListener("change", function () {
     // Get the value of the selected option.
     var selectedImage = this.value;

     // Display the corresponding image.
     document.getElementById("image").src = selectedImage;
});


/************************************************/


var statusCode = document.getElementById('statusCode');
var greenDot = document.getElementById('greenDot');
var yellowDot = document.getElementById('yellowDot');
var redDot = document.getElementById('redDot');

function myFunction() {

    const value = statusCode.options[statusCode.selectedIndex].value

    if(value == "Green") {        
        greenDot.style.display = 'block';
        yellowDot.style.display = 'none';
        redDot.style.display = 'none';
    }
    else if(value == "Yellow"){
        greenDot.style.display = 'none';
        yellowDot.style.display = 'block';
        redDot.style.display = 'none';
    }
    else if(value == "Red"){
        greenDot.style.display = 'none';
        yellowDot.style.display = 'none';
        redDot.style.display = 'block';
    }
}

myFunction();

const lite  = () => {
    console.log("Vivek");
}
const first = setTimeout(lite , 1000);
const firsts = setInterval(lite , 1000);
const third = clearTimeout(lite);

console.log(first); 
console.log(second);
console.log(third);

