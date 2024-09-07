
function pesquisar() { // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
   // se campoPesquisa for uma string sem nada
   if(campoPesquisa == "") {
    section.innerHTML ="<p>Nada foi encontrado, digite algo</p>"
    return
   }

    console.log(campoPesquisa);

    // Converter tudo para minúsculo e remover espaços em branco
  const termoPesquisa = campoPesquisa.toLowerCase().trim();

    // Cria uma string vazia para armazenar os resultados
    let resultados ="";
    let tags = "";
 
    // Percorre cada dado da lista e cria um elemento HTML para cada resultado
    for (let dado of dados){
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (dado.titulo.toLowerCase().trim().includes(termoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `;
      }
      
    }

    if(!resultados) {
     resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }

