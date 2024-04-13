import React, { ChangeEvent, useEffect, useState } from "react";
import CategoriaService from "../../service/CategoriaService";
import Categoria from "../../models/Categoria";

function FormCategoria() {
    const service = new CategoriaService();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    };

    async function getAll() {
        const response = await service.getAlll()
        console.log(response)

        setCategorias(response)
    }
    useEffect(() => {
        getAll()
    }, [])

    const handleNovaCategoria = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (categoria.id) {
                await service.update(categoria);
                alert('Categoria atualizada com sucesso');
                getAll()
            } else {
                await service.save(categoria);
                alert('Categoria cadastrada com sucesso');
                getAll()
            }
        } catch (error: any) {
            console.error('Erro:', error.message);
            alert('Erro ao processar a categoria');
        }
    };

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Categoria</h1>

            <form onSubmit={handleNovaCategoria} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Categoria"
                        name="descricao"
                        value={categoria.descricao || ''}
                        onChange={handleChange}
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button 
                    type='submit' 
                    className='rounded disabled:bg-slate-200 bg-indigo-400 
                        hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;