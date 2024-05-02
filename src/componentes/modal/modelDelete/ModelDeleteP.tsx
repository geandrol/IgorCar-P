import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaTrash } from 'react-icons/fa';
import ProdutoService from '../../../service/ProdutoService';
import Produto from '../../../models/Produto';

function ModalDeleteP({ productId }) {
    const [produto, setProduto] = useState<Produto>({} as Produto);

    const service = new ProdutoService();

    useEffect(() => {
        async function buscarPorId() {
            try {
                const produto = await service.getById(productId);
                setProduto(produto);
            } catch (error) {
                console.error('Erro ao buscar o produto por ID:', error);
            }
        }
        buscarPorId();
    }, [productId]);

    async function deletarProduto() {
        try {
            await service.delete(productId);
            alert('Produto apagado com sucesso');
        } catch (error) {
            alert('Erro ao apagar o produto');
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
                <h1 > Tem seteza que quer apagar o produto: {produto.id  ? produto.nome: 'Carregando...'}?</h1>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarProduto}>sim</button>
                </form>
                </div>
            </Popup>
        </>
    );
}

export default ModalDeleteP;