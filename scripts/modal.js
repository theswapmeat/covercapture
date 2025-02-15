// Open modal when the button is clicked
document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

// Close modal when the escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Close modal when the Cancel button is clicked
document.getElementById("cancelButton").addEventListener("click", function () {
  closeModal();
});

// Close modal by hiding both the modal and overlay
function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
