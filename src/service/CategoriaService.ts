import axios from "axios";
import Categoria from "../models/Categoria";

const api = axios.create({
    baseURL: "https://igorcar.onrender.com"
})
export default class CategoriaService {

    async getAll() {
        const response = await api.get('categoria')
        return response.data
    }

    async getById(id: number) {
        const response = await api.get(`categoria/${id}`)
        return response.data
    }

    async save(categoria: Categoria) {
        const response = await api.post('categoria', categoria)
        return response
    }

    async update(categoria: Categoria) {
        const response = await api.put(`categoria/`, categoria)
        return response
    }

    async delete(id: number) {
        const response = await api.delete(`categoria/${id}`)
        return response
    }
      

}
