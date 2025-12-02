document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let phone = document.getElementById("phone").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmError = document.getElementById("confirmError");
  let phoneError = document.getElementById("phoneError");
  let successMessage = document.getElementById("successMessage");

  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmError.innerText = "";
  phoneError.innerText = "";
  successMessage.innerText = "";

  let isValid = true;

  if (name === "") {
    nameError.innerText = "Full name is required.";
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailError.innerText = "Invalid email format.";
    isValid = false;
  }

  if (password.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (password !== confirmPassword) {
    confirmError.innerText = "Passwords do not match.";
    isValid = false;
  }

  if (phone === "" || isNaN(phone)) {
    phoneError.innerText = "Phone must contain only digits.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("signupForm").style.display = "none";
    document.querySelector("h2").style.display = "none";
    successMessage.style.display = "block";
    successMessage.innerText = "Registration Successful!";
  }
});