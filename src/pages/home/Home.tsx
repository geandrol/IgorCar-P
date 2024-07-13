import { Link } from "react-router-dom";
import M4vtpQn from '../../assets/M4vtpQn.jpeg';
import AvhreaA from '../../assets/AvhreaA.jpeg';
import IgorLogo2 from '../../assets/IgorLogo.webp';

function Home() {
    return (
        <>
            <div className="flex items-center justify-center mt-5">
                <img src={IgorLogo2} alt="Igor Logo" className="w-[10.3rem] h-[10.3rem] mr-2 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="flex justify-center mt-10">
                    <div className="flex flex-col justify-center items-center h-4/4 w-4/6 bg-gray-800 border border-gray-700 rounded-lg shadow p-2">

                        <h5 className="flex justify-center mb-2 text-lg font-bold tracking-tight text-gray-300">Serviços</h5>

                        <a href="#">
                            <img className="rounded-lg m-auto" src={M4vtpQn} alt="" width='90%' />
                        </a>
                        <div className="p-2">

                            <div className="flex justify-center mt-4">
                                <Link to='/cliente' className='hover:underline'>
                                    <button className="bg-brown-300 hover:bg-brown-200 text-white font-bold py-2 px-4 rounded">
                                        Entrar
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="flex flex-col justify-center items-center h-4/4 w-4/6 bg-gray-800 border border-gray-700 rounded-lg shadow p-2">

                        <h5 className="flex justify-center mb-2 text-lg font-bold tracking-tight text-gray-300">Estoque</h5>

                        <a href="#">
                            <img className="rounded-lg m-auto" src={AvhreaA} alt="" width='90%' />
                        </a>
                        <div className="p-2">

                            <div className="flex justify-center mt-4">
                                <Link to='/estoque' className='hover:underline'>
                                    <button className="bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded">
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
export default Home;