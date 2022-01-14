// orçamento

AdicionarAoCarrinho = () => "Produto adicionado ao Carrinho!"
MensagemDeEmFalta = () => "Estoque abaixo do numero de unidades solicitadas."

function Viga15550F(quantidade, VigaDe15550E = 10){
    if(quantidade <= VigaDe15550E){
        return AdicionarAoCarrinho()
    }else if(quantidade > VigaDe15550E) {
        return MensagemDeEmFalta()
    }
}

console.log(Viga15550F(5))
console.log(Viga15550F(11))

