// Se futuramente quiser adicionar animações JS ou interações customizadas, coloca aqui
// Por enquanto, só um log básico
console.log("Navbar carregada com sucesso 🚀");

// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const whatsappButton = document.getElementById('whatsappButton');
const chatPopup = document.getElementById('chatPopup');
const typingMessage = document.getElementById('typingMessage');
const chatOptions = document.getElementById('chatOptions');

const fullMessage = "Olá, tudo bem? Como posso te ajudar?";
let index = 0;

function typeMessage() {
  if (index < fullMessage.length) {
    typingMessage.textContent += fullMessage.charAt(index);
    index++;
    setTimeout(typeMessage, 50); // velocidade da digitação
  } else {
    chatOptions.style.display = "flex"; // mostra botões depois que terminar
  }
}

// Ao clicar no botão flutuante
whatsappButton.addEventListener('click', () => {
  chatPopup.style.display = 'block';
  typingMessage.textContent = ''; // limpa se reabrir
  index = 0;
  chatOptions.style.display = "none";
  typeMessage();
});

// Redireciona após clicar na resposta
function redirectToWhatsApp(type) {
  let message = "";

  switch (type) {
    case "ideia":
      message = "Olá! Gostaria de criar uma ideia.";
      break;
      case "barbearia":
      message = "Olá! Gostaria de saber mais sobre o ThynkBarber.";
      break;
    case "saber-mais":
      message = "Olá! Gostaria de saber mais sobre seus serviços.";
      break;
    case "outros":
      message = "Olá! Tenho outra dúvida.";
      break;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/5532991145114?text=${encodedMessage}`; // coloque seu número real aqui
  window.open(whatsappLink, '_blank');
}

