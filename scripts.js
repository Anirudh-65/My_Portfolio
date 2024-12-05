// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

  // Contact Form Submission (for all pages with form)
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      console.log("Form Submitted:", { name, email, message });

      // Display an alert on successful form submission
      alert("Thank you for your message! I'll get back to you soon.");
      form.reset(); // Reset the form fields after submission
    });
  });

  // Optional: Add some smooth scrolling effect for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

});