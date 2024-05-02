import axios from "axios";
import Carro from "../models/Carro";

const api = axios.create({
    baseURL: "https://igorcar.onrender.com"
    // baseURL: "http://localhost:8080"
})
export default class CarroService {

    async getAll() {
        const response = await api.get('carro')
        return response.data
    }

    async getById(id: number) {
        const response = await api.get(`carro/${id}`)
        return response.data
    }

    async save(carro: Carro) {
        const response = await api.post('carro', carro)
        return response
    }

    async update(carro: Carro) {
        const response = await api.post('carro', carro)
        return response
    }

    async delete(id: number) {
        const response = await api.delete(`carro/${id}`)
        return response
    }

}