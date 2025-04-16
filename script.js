function enviarMensagem(event) {
    event.preventDefault();  // Evita o envio do formulário padrão

    // Coleta os valores dos campos
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const motivo = document.getElementById('motivo').value;
    const mensagem = document.getElementById('mensagem').value;

    // Gera a mensagem
    const mensagemFinal = `Olá, tudo bem? Me chamo ${nome}, gostaria de ${motivo}. Observações: ${mensagem}`;

    // Link do WhatsApp com o número fornecido
    const whatsappLink = `https://wa.me/32991145114?text=${encodeURIComponent(mensagemFinal)}`;
    
    // Abre o WhatsApp com a mensagem gerada
    window.open(whatsappLink, '_blank');

    // Opcional: Limpa os campos após o envio
    document.getElementById('contactForm').reset();
}
