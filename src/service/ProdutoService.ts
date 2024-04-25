import axios from "axios";
import Produto from "../models/Produto";

const api = axios.create({
    //baseURL: "https://igorcar.onrender.com"
    baseURL: "http://localhost:8080"
})
export default class ProdutoService {

    async getAll() {
        const response = await api.get('produto')
        return response.data
    }

    async getById(id: number) {
        const response = await api.get(`produto/${id}`)
        return response.data
    }

    async save(produto: Produto) {
        const response = await api.post('produto', produto)
        return response
    }

    async update(produto: Produto) {
        const response = await api.put(`produto/`, produto)
        return response
    }

    async delete(id: number) {
        const response = await api.delete(`produto/${id}`)
        return response
    }

    async acressProd(id: number, qtd: number) {
        const response = await api.get(`produto/${id}/${qtd}`)
        return response
    }
}