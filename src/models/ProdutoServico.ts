import Produto from "./Produto"
import Servico from "./Servico"

export default interface ProdutoServico {
    id: number
    produto: Produto | null
    servico: Servico | null

}