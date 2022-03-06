enum produtoStatus {
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3,
}

function checar(status: number) {
    switch (status) {
        case produtoStatus.Ativo:
            console.log('Produto Disponivel');
            break;
        case produtoStatus.Inativo:
            console.log('Produto Não Encontrado');
            break;
        case produtoStatus.Indisponivel:
            console.log('Produto Aguardando Estoque');
            break;
        default:
            break;
    }
}

checar(produtoStatus.Inativo);
checar(produtoStatus.Ativo);
checar(produtoStatus.Indisponivel);
