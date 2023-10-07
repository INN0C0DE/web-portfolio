function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const textArray = ["Website Developer", "Android Developer", "Software Developer", "UI/UX Designer", "Graphic Designer", "Photographer"];
        const textElement = document.getElementById("changingText");
        let currentIndex = 0;

        function changeText() {
            textElement.textContent = textArray[currentIndex];
            currentIndex = (currentIndex + 1) % textArray.length;
        }

        // Call the changeText function every 2 seconds (2000 milliseconds)
        setInterval(changeText, 2000);