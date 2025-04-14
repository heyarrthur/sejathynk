// const vagas = [
    // {
     //   titulo: "Desenvolvedor Front-End",
      //  descricao: "Construa interfaces incríveis com React.",
      //  categoria: "tecnologia",
      //  tipo: "Remoto",
      //  remuneracao: "R$ 4.000",
      //  localizacao: "Juiz de Fora/MG",
      //  sobre: "Atuará com desenvolvimento de interfaces e componentes web.",
      //  requisitos: "HTML, CSS, JS, React.",
      //  beneficios: "Plano de saúde, Vale Refeição, Home Office.",
       // etapas: "Cadastro > Teste técnico > Entrevista"
  //  },
  //  {
      //  titulo: "Executivo de Vendas",
      //  descricao: "Venda soluções digitais para novos clientes.",
      //  categoria: "comercial",
      //  tipo: "Presencial",
      //  remuneracao: "R$ 3.200",
      //  localizacao: "Juiz de Fora/MG",
      //  sobre: "Atendimento a leads e prospecção ativa.",
      //  requisitos: "Experiência comercial, comunicação clara.",
      //  beneficios: "Bonificações, VR, plano de carreira.",
      //  etapas: "Cadastro > Dinâmica > Entrevista"
  //  },
  //  {
    //    titulo: "Analista de Suporte N1",
    //    descricao: "Ajude nossos clientes com suporte técnico.",
    //    categoria: "suporte",
    //    tipo: "Híbrido",
    //    remuneracao: "R$ 2.200",
    //    localizacao: "Juiz de Fora/MG",
    //    sobre: "Suporte via chat e e-mail.",
    //    requisitos: "Conhecimento técnico básico, empatia.",
    //    beneficios: "VR, plano de saúde.",
    //    etapas: "Cadastro > Entrevista"
  //  },
    // Adicione +7 vagas aqui seguindo o mesmo padrão
// ];

function renderizarVagas(lista) {
    const container = document.getElementById("vagasContainer");
    container.innerHTML = "";

    lista.forEach((vaga, index) => {
        const card = `
        <div class="col-md-12 mb-4">
          <div class="card shadow-sm p-4 h-100">
            <h5 class="mb-2">${vaga.titulo}</h5>
            <p>${vaga.descricao}</p>
<div class="d-flex flex-wrap gap-4 mt-3 mb-4 vaga-info">
  <div class="d-flex align-items-center">
    <i class="fas fa-briefcase me-2"></i>
    <strong>Tipo:</strong>&nbsp;${vaga.tipo}
  </div>
  <div class="d-flex align-items-center">
    <i class="fas fa-money-bill-wave me-2"></i>
    <strong>Remuneração:</strong>&nbsp;<span class="text-primary fw-bold">${vaga.remuneracao}</span>
  </div>
  <div class="d-flex align-items-center">
    <i class="fas fa-map-marker-alt me-2"></i>
    <strong>Localização:</strong>&nbsp;${vaga.localizacao}
  </div>
</div>

            <div class="text-end">
              <button class="btn btn-outline-primary" onclick="abrirModal(${index})">Estou Interessado</button>
            </div>
          </div>
        </div>
      `;
        container.innerHTML += card;
    });
}

function abrirModal(index) {
    const vaga = vagas[index];
    document.getElementById("vagaModalLabel").textContent = vaga.titulo;
    document.getElementById("modalDescricao").textContent = vaga.descricao;
    document.getElementById("modalSobre").textContent = vaga.sobre;
    document.getElementById("modalRequisitos").textContent = vaga.requisitos;
    document.getElementById("modalBeneficios").textContent = vaga.beneficios;
    document.getElementById("modalEtapas").textContent = vaga.etapas;

    const mensagem = encodeURIComponent(`Olá! Me interessei pela vaga de ${vaga.titulo}. Podemos conversar?`);
    document.getElementById("btnCandidatar").href = `https://wa.me/5532991145114?text=${mensagem}`;

    const modal = new bootstrap.Modal(document.getElementById("vagaModal"));
    modal.show();
}

function filtrarVagas() {
    const filtro = document.getElementById("filtroVagas").value;
    if (filtro === "todos") {
        renderizarVagas(vagas);
    } else {
        const filtradas = vagas.filter(vaga => vaga.categoria === filtro);
        renderizarVagas(filtradas);
    }
}

// Inicializar ao carregar
document.addEventListener("DOMContentLoaded", () => {
    renderizarVagas(vagas);
});

