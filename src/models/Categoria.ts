import Produto from "./Produto";


export default interface Categoria{
    id: number;
    descricao: string;
    produtos: Produto[];
    
}