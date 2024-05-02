import axios from "axios";
import Cliente from "../models/Cliente";

const api = axios.create({
    //baseURL: "https://igorcar.onrender.com"
    baseURL: "http://localhost:8080"
})
export default class ClienteService {

    async getAll() {
        const response = await api.get('cliente')
        return response.data
    }

    async getById(id: number) {
        const response = await api.get(`cliente/${id}`)
        return response.data
    }

    async save(cliente: Cliente) {
        const response = await api.post('cliente', cliente)
        return response
    }

    async update(cliente: Cliente) {
        const response = await api.put('cliente', cliente)
        return response
    }

    async delete(id: number) {
        const response = await api.delete(`cliente/${id}`)
        return response
    }
}