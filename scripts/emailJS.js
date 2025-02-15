// Initialize EmailJS
(function () {
    emailjs.init("MsCsS8EPsbOqORH7k"); 
  })();
  
  // Handle form submission to send email
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Send email via EmailJS
    emailjs.sendForm("service_30heloc", "template_rya2dcs", this) // Replace with your service and template IDs
      .then(function(response) {
        console.log("SUCCESS", response);
        closeModal(); // Close modal after successful submission
        alert("Your message has been sent!");
      }, function(error) {
        console.log("FAILED", error);
        alert("There was an error sending your message. Please try again.");
      });
  });