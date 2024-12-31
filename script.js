// Função para exibir a barra de cookies
window.onload = function() {
    if (!localStorage.getItem("cookiesAccepted")) {
      document.getElementById("cookieConsent").style.display = "block";
    }
  }
  
  // Função para aceitar os cookies
  function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieConsent").style.display = "none";
  }
  
  // Função para recusar os cookies e redirecionar para a página de erro 404
  function rejectCookies() {
    localStorage.setItem("cookiesAccepted", "false");
    window.location.href = "404.html"; // Redireciona para a página de erro 404
  }