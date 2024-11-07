document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Display an alert with form values (this is just for demonstration)
      alert(`Thank you, ${name}! Your message has been sent:\n${message}`);

      // Reset the form
      form.reset();
    });
  }

  // Handle product filtering functionality
  const filterInput = document.getElementById("product-filter");
  if (filterInput) {
    filterInput.addEventListener("input", () => {
      const filterValue = filterInput.value.toLowerCase();
      const productList = document.querySelectorAll(".product");

      productList.forEach((product) => {
        const productName = product
          .querySelector("h3")
          .textContent.toLowerCase();
        if (productName.includes(filterValue)) {
          product.style.display = "block"; // Show product
        } else {
          product.style.display = "none"; // Hide product
        }
      });
    });
  }

  // Handle mobile navigation menu toggle
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const nav = document.querySelector("nav ul");
      if (nav) {
        nav.classList.toggle("active");
      }
    });
  }

  // Handle image slider functionality
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 3000); // Slide every 3 seconds
  }
});
