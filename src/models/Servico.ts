import Carro from "./Carro"
import Cliente from "./Cliente"
import ProdutoServico from "./ProdutoServico"

export default interface Servico {

    id: number
    descricao: string
    cliente: Cliente
    carro:	Carro
    produtos: ProdutoServico[]
    vlrTotalProdutos: number
    vlrTotalMaoDeObra: number
    vlrTotal: number
    data: Date
    fimGarantia: Date
}