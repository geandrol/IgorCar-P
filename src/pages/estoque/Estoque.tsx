import { Link } from "react-router-dom";

function Estoque() {
    return (
        <>
            <div className="flex justify-around items-center sm:ps-12">

                <Link to='/listarProduto' className='hover:underline'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Entrar
                    </button>

                </Link>

                <Link to='/listarCategoria' className='hover:underline'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Entrar
                    </button>

                </Link>
            </div>
        </>
    )
}
export default Estoque;