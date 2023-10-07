function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// JS ANIMATION FOR CHANGING TEXT 1
// const textArray = ["Website Developer", "Android Developer", "Software Developer", "UI/UX Designer", "Graphic Designer", "Photographer"];
//         const textElement = document.getElementById("changingText");
//         let currentIndex = 0;

//         function changeText() {
//             textElement.textContent = textArray[currentIndex];
//             currentIndex = (currentIndex + 1) % textArray.length;
//         }

//         // Call the changeText function every 2 seconds (2000 milliseconds)
//         setInterval(changeText, 2000);

// JS ANIMATION FOR CHANGING TEXT 2
// const textArray = ["Website Developer", "Android Developer", "Software Developer", "UI/UX Designer", "Graphic Designer", "Photographer"];
// const textElement = document.getElementById("changingText");
// let currentIndex = 0;
// let currentText = "";
// let isDeleting = false;

// async function animateText() {
//     const targetText = textArray[currentIndex];

//     if (!isDeleting) {
//         currentText = targetText.substring(0, currentText.length + 1);
//         textElement.textContent = currentText;
//         if (currentText === targetText) {
//             isDeleting = true;
//             await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 2 seconds
//         }
//     } else {
//         currentText = targetText.substring(0, currentText.length - 1);
//         textElement.textContent = currentText;
//         if (currentText === "") {
//             isDeleting = false;
//             currentIndex = (currentIndex + 1) % textArray.length;
//         }
//     }

//     const typingSpeed = isDeleting ? 75 : 150; // Adjust typing speed here
//     setTimeout(animateText, typingSpeed);
// }

// // Start the animation
// animateText();



// // JS ANIMATION FOR CHANGING TEXT 3
// const textArray = ["Website Developer", "Android Developer", "Software Developer", "UI/UX Designer", "Graphic Designer", "Photographer"];
// const textElement = document.getElementById("changingText");
// let currentIndex = 0;

// function changeText() {
//     textElement.classList.remove("fade-in");
//     setTimeout(function () {
//         textElement.textContent = textArray[currentIndex];
//         textElement.classList.add("fade-in");
//         currentIndex = (currentIndex + 1) % textArray.length;
//     }, 500); // Delay the text change for 500ms (0.5 seconds)
// }

// // Call the changeText function every 2 seconds (2000 milliseconds)
// setInterval(changeText, 2000);

// JS ANIMATION FOR CHANGING TEXT 4
// const textArray = ["Website Developer", "Android Developer", "Software Developer", "UI/UX Designer", "Graphic Designer", "Photographer"];
// const textElement = document.getElementById("changingText");
// let currentIndex = 0;
// let currentText = "";
// let isDeleting = false;

// async function animateText() {
//     const targetText = textArray[currentIndex];

//     if (!isDeleting) {
//         if (currentText.length < targetText.length) {
//             currentText = targetText.substring(0, currentText.length + 1);
//         } else {
//             isDeleting = true;
//         }
//     } else {
//         if (currentText.length > 1) {
//             currentText = currentText.substring(0, currentText.length - 1);
//         } else {
//             isDeleting = false;
//             currentIndex = (currentIndex + 1) % textArray.length;
//         }
//     }

//     textElement.textContent = currentText;

//     const typingSpeed = isDeleting ? 75 : 150; // Adjust typing speed here
//     setTimeout(animateText, typingSpeed);
// }

// // Start the animation
// animateText();

// JS ANIMATION FOR CHANGING TEXT 5
const textArray = ["Website Developer", "Android Developer", "Software Developer", "UI/UX Designer", "Graphic Designer", "Photographer"];
const textElement = document.getElementById("changingText");
let currentIndex = 0;
let currentText = "";
let isDeleting = false;

async function animateText() {
    const targetText = textArray[currentIndex];

    if (!isDeleting) {
        if (currentText.length < targetText.length) {
            currentText = targetText.substring(0, currentText.length + 1);
        } else {
            isDeleting = true;
            await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 2 seconds
        }
    } else {
        if (currentText.length > 1) {
            currentText = currentText.substring(0, currentText.length - 1);
        } else {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % textArray.length;
        }
    }

    textElement.textContent = currentText;

    const typingSpeed = isDeleting ? 75 : 150; // Adjust typing speed here
    setTimeout(animateText, typingSpeed);
}

// Start the animation
animateText();

