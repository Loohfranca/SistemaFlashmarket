// Array de produtos (simulando um banco de dados simples)
const produtos = [
    { id: 1, nome: "Coca-Cola", preco: 4.50, categoria: "Bebidas", imagem: "imagens/coca.jpg" },
    { id: 2, nome: "Bala Fini", preco: 2.00, categoria: "Bebidas", imagem: "imagens/fini.jpg"},
    { id: 3, nome: "Batata Pringles", preco: 7.00, categoria: "Mercearia", imagem: "imagens/pringles.jpg" },
    { id: 4, nome: "Lasanha Bolonhesa", preco: 5.00, categoria: "Mercearia", imagem: "imagens/lasanha.jpg" },
    { id: 6, nome: "Desodorante", preco: 5.00, categoria: "Higiene", imagem: "imagens/desodorante.jpg" },
    { id: 6, nome: "Sabão em pó", preco: 5.00, categoria: "Limpeza", imagem: "imagens/tixan.jpg" },
    { id: 7, nome: "Heinaken", preco:  4.49, categoria: "ofertas", imagem: "imagens/cerveja.jpg" }
   
  ];
  let slideIndex = 0;

  function moveSlide(n) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    
    slideIndex += n;
  
    // Se o índice for menor que 0, vai para o último slide
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    } 
    // Se o índice for maior que o total de slides, volta para o primeiro
    else if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
  
    // Mover o carrossel para a posição correta
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  


  
  // Função para exibir os produtos
function exibirProdutos(lista) {
    const produtosList = document.getElementById("produtos-list");
    produtosList.innerHTML = ''; // Limpar a lista de produtos
  
    lista.forEach(produto => {
      const produtoDiv = document.createElement('div');
      produtoDiv.classList.add('produto');
      produtoDiv.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        ${produto.categoria === "ofertas" ?
            `<p class="ofertas">R$ ${produto.preco.toFixed(2)}</p>`: 
            `<p class="preco">R$ ${produto.preco.toFixed(2)}</p>`
          }`
      produtosList.appendChild(produtoDiv);
    });
  }
  
  // Função para filtrar produtos por categoria
  function filtrarCategoria(categoria) {
    const produtosFiltrados = categoria === 'Todas' 
      ? produtos 
      : produtos.filter(p => p.categoria === categoria);
    exibirProdutos(produtosFiltrados);
  }
  
  // Função para filtrar produtos pelo nome (caixa de busca)
  function filtrarProdutos() {
    const termoBusca = document.getElementById("searchInput").value.toLowerCase();
    const produtosFiltrados = produtos.filter(p => p.nome.toLowerCase().includes(termoBusca));
    exibirProdutos(produtosFiltrados);
  }
  
  // Inicializar exibindo todos os produtos
  exibirProdutos(produtos);