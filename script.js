document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if(email){
    document.getElementById("successMsg").innerText = "✅ Thank you! You'll be contacted soon.";
    document.getElementById("email").value = "";
  }
});
