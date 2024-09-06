
// função para gerar os resultados
function gerarResultado(dado) {
    return `
        <div class="item-resultado">
            <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-curso">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank" class="mais-info">Mais informações</a>
        </div>
    `;
}

// função para pesquisar ao clicar no botão de pesquisa
function pesquisar() {
    let sectionResultados = document.getElementById("resultados-pesquisa");
    let tituloPesquisa = document.getElementById("titulo-pesquisa");
    let campoPesquisa = document.getElementById("input-pesquisa").value.toLowerCase();
    let resultados = "";

    // criação das duas variavéis dos títulos
    let tituloRecomendacao = "<h2>Recomendação</h2>";
    let tituloResultado = `<h2>Resultado para "${campoPesquisa}"</h2>`;
    let nadaEncontrado = "<h3>Nada foi encontrado</h3>";

    // iteração sobre os dados
    for (let dado of dados) {
        if (!campoPesquisa) {
            if (dado.recomendacao.includes("True")) {
                resultados += gerarResultado(dado);
            }
        } else if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLowerCase().includes(campoPesquisa) || dado.tags.toLowerCase().includes(campoPesquisa)){
            resultados += gerarResultado(dado);
        }
        
    }

    // Atribuição no HTML
    tituloPesquisa.innerHTML = tituloRecomendacao;
    if (campoPesquisa) {
        tituloPesquisa.innerHTML = tituloResultado;
        if (!resultados) {
            resultados = "<h2>Nada foi encontrado</h2>";
        }
    }
    sectionResultados.innerHTML = resultados;
}