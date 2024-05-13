const header = document.querySelector(".header");
let floatingLabel = document.querySelector(".floating-label");
document.addEventListener("scroll", (ev) => {
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("scroll", (ev) => {
  if (window.scrollY < 200) {
    floatingLabel.classList.add("float-show");
  } else {
    floatingLabel.classList.remove("float-show");
  }
});

let toolButton = document.querySelector(".tool-btn");

toolButton.addEventListener("click", () => {
  floatingLabel.classList.toggle("float-open");
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all img_item elements
  const imgItems = document.querySelectorAll(".img_item");

  // Initialize index to track the active item
  let currentIndex = 0;

  // Function to toggle active class on img_item elements
  function toggleActiveItem() {
    // Remove 'active' class from all img_item elements
    imgItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add 'active' class to the current img_item
    imgItems[currentIndex].classList.add("active");

    // Increment index for the next item (loop back to the start if at the end)
    currentIndex = (currentIndex + 1) % imgItems.length;
  }

  // Initial call to toggleActiveItem
  toggleActiveItem();

  // Set interval to toggle active class every 40 seconds
  setInterval(toggleActiveItem, 5000); // 40 seconds = 40000 milliseconds
});
