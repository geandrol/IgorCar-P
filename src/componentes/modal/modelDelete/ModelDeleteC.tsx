import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaTrash } from 'react-icons/fa';
import Categoria from '../../../models/Categoria';
import CategoriaService from '../../../service/CategoriaService';

function ModalDeleteC({ categoriaId }) {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const service = new CategoriaService();

    useEffect(() => {
        async function buscarPorId() {
            try {
                const categoria = await service.getById(categoriaId);
                setCategoria(categoria);
            } catch (error) {
                console.error('Erro ao buscar o categoria por ID:', error);
            }
        }
        buscarPorId();
    }, [categoriaId]);

    async function deletarCategoria() {
        try {
            await service.delete(categoriaId);
            alert('Categoria apagado com sucesso');
        } catch (error) {
            alert('Erro ao apagar o categoria');
        }
        window.location.reload();
    }


    return (
        <>
            <Popup
               trigger={
                <button className="bg-red-400 hover:bg-red-200 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center">
                <FaTrash />
            </button>
            }
                modal
            >
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <form action="">
                <h1 > Tem ceteza que quer apagar a categoria: {categoria.id  ? categoria.descricao: 'Carregando...'}?</h1>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria}>sim</button>
                </form>
                </div>
            </Popup>
        </>
    );
}

export default ModalDeleteC;