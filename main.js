document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    
    if (password === "placeholder") {
        window.location.href = "cat.html";
    } else {
        alert("Mot de passe incorrect");
    }
});