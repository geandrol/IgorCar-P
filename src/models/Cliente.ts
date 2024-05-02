import Carro from "./Carro";

export default interface Cliente {

    id: number;
    nome: string;
    contato: string;
    carros: Carro[] | null;
}