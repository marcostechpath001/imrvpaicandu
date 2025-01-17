document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-consent');
  const acceptCookiesButton = document.getElementById('accept-cookies');

  // Verifica se o usuário já aceitou os cookies
  if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'block';
  }

  // Ação ao clicar no botão "Aceitar"
  acceptCookiesButton.addEventListener('click', () => {
      // Armazena consentimento no localStorage
      localStorage.setItem('cookiesAccepted', 'true');
      
      // Coleta dados básicos (exemplo: data e hora do consentimento)
      const consentData = {
          consentGiven: true,
          date: new Date().toISOString(),
          userAgent: navigator.userAgent, // Informações do navegador
          language: navigator.language,  // Idioma do navegador
          platform: navigator.platform   // Plataforma do usuário (Windows, Mac, etc.)
      };

      // Envia os dados para o servidor (substitua o URL abaixo pelo seu endpoint)
      fetch('https://seuservidor.com/consentimento', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(consentData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Consentimento registrado com sucesso:', data);
      })
      .catch(error => {
          console.error('Erro ao registrar o consentimento:', error);
      });

      // Oculta o banner
      cookieBanner.style.display = 'none';
  });
});