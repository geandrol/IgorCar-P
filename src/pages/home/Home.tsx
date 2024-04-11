import { Link, useNavigate } from "react-router-dom";

function Home() {
    return (
        <>
            <h1 className="flex justify-center text-3xl mt-5">
                Igor Car
            </h1>

            <div className="grid grid-cols-2 gap-1">
                <div className="flex justify-center ms-4 me-4 mt-10">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Serviços</h5>

                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.imgur.com/M4vtpQn.jpg" alt="" width='100%'/>
                        </a>
                        <div className="p-5">

                            <div className="flex justify-center mt-6 ">
                            <Link to='/cliente' className='hover:underline'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                    Entrar
                                </button>

                            </Link>
                              
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center ms-4 me-4 mt-10">
                    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Estoque</h5>

                        <a href="#">
                            <img className="rounded-t-lg" src="https://i.imgur.com/AvhreaA.jpg/image-1.jpg" alt="" width='100%' />
                        </a>
                        <div className="p-5">

                            <div className="flex justify-center  mt-6">
                            <Link to='/categoria' className='hover:underline'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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