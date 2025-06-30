document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;

  if (name.length < 3) {
    alert("Name should be at least 3 characters long.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});
