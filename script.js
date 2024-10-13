function acceptCookies() {
  Cookies.set('cookieConsent', 'accepted', { expires: 7, path: '/' });
  console.log("Cookie definido: ", Cookies.get('cookieConsent')); // Verifica o cookie no console
  document.getElementById("cookieConsentContainer").style.display = "none";
}