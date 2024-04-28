import { Link, useNavigate } from "react-router-dom";

function Estoque() {
    let navigate = useNavigate()
    function voltar() {
        navigate('/home')
    }
    return (
        <>
            <div>
                <button className="bg-red-500 hover:bg-red-700 text-white flex flex-row items-center justify-center py-4 px-4 rounded font-bold w-[100%] " onClick={voltar}>
                    <span>Voltar</span>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-1">
                <div className="flex justify-center ms-4 me-4 mt-10">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Produtos</h5>

                        <div className="p-5">

                            <div className="flex justify-center mt-6 ">
                                <Link to='/listarProduto' className='hover:underline'>
                                    <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                        Entrar
                                    </button>

                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center ms-4 me-4 mt-10">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Categorias</h5>

                        <div className="p-5">

                            <div className="flex justify-center  mt-6">
                                <Link to='/listarCategoria' className='hover:underline'>
                                    <button className="m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                        Entrar
                                    </button>

                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Estoque;