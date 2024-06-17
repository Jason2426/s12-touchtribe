
// Check de voorkeurstaal 
const userPreferredLanguage = navigator.language || navigator.userLanguage;
const seeMoreProductsLabel = document.getElementById('see-more-products');
let translatedText = seeMoreProductsLabel.getAttribute(`data-${userPreferredLanguage.substr(0, 2)}`);

document.addEventListener("DOMContentLoaded", function() {

    console.log(userPreferredLanguage);
    
      // Werk de tekstinhoud bij als er een vertaling is
      if (translatedText) {
        seeMoreProductsLabel.textContent = translatedText;
    }
});