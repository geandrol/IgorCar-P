import axios from "axios";
import Servico from "../models/Servico";
import ServicoDto from "../models/ServicoDto";

const api = axios.create({
    baseURL: "https://igorcar.onrender.com"
})
export default class ServicoService {

    async getAll() {
        const response = await api.get('servico')
        return response.data
    }

    async getById(id: number) {
        const response = await api.get(`servico/${id}`)
        return response.data
    }

    async save(servico: ServicoDto) {
        const response = await api.post('servico', servico)
        return response
    }

    async update(servico: Servico) {
        const response = await api.put(`servico/`, servico)
        return response
    }

    async delete(id: number) {
        const response = await api.delete(`servico/${id}`)
        return response
    }

    async acressProd(id: number, qtd: number) {
        const response = await api.get(`produto/${id}/${qtd}`)
        return response
    }
}  