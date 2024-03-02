const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  console.log(elements);
  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };
  if (email && password === " ") {
    alert("All form fields must be filled in");
  } else {
    console.log(email.password);
  }
  event.currentTarget.reset();
}
