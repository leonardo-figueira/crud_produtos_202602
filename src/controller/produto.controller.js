import produtoService from "../services/produto.service.js";

async function createProdutoController(request, response) {
    const novoProduto = request.body;

    try {
        const produtoSalvo = await produtoService.createProdutoService(novoProduto);

        response.status(201).send(produtoSalvo);
    } catch(error) {
        response.status(400).send(error.message);
    }
}

export default {
    createProdutoController
}