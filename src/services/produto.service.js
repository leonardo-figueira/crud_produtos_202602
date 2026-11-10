import produtoRepository from "../repository/produto.repository.js";

async function createProdutoService(novoProduto) {
    const produtoSalvo  = await produtoRepository.createProdutoRepository(novoProduto);

    if (!produtoSalvo) {
        throw new Error("Erro ao criar novo produto!");
    }

    return produtoRepository;
}

export default {
    createProdutoService
}