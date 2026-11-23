import produtoRepository from "../repository/produto.repository.js";

async function createProdutoService(novoProduto) {
    const produtoSalvo  = await produtoRepository.createProdutoRepository(novoProduto);

    if (!produtoSalvo) {
        throw new Error("Erro ao criar novo produto!");
    }

    return produtoSalvo;
}

async function readAllProdutoService() {
    const produtos = await produtoRepository.readAllProdutoRepository();
    
    return produtos;
}

export default {
    createProdutoService,
    readAllProdutoService
}