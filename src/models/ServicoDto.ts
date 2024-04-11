import ProdutoServicoDto from "./ProdutoServicoDto"

export default interface ServicoDto {
    
    descricao: string
    clienteId: number
    carroId: number   
    produtos: ProdutoServicoDto[]
    vlrTotalMaoDeObra: number
    fimGarantia: Date

}