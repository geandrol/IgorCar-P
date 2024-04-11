import Cliente from "./Cliente"

export default interface Carro {

    id: number
    placa: string
    modelo: string
    cliente: Cliente | null
    modele: string

}