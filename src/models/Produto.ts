import Categoria from "./Categoria";

export default interface Produto {

    id: number;
    nome: string;
    marca: string;
    modelo: string;
    categoria: Categoria | null;
    quantidade: number; 
    valorCusto: number; 
    valorVendal: number; 
    descricao?: string; 

}