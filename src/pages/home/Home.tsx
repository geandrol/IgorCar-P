import { Link } from "react-router-dom";
import logo from "../../assets/img/Default_A_surreal_and_vibrant_cinematic_photo_of_the_logo_of_a_1-removebg-preview__1_-removebg.png" 
function Home() {
    return (
        <>
            <h1 className="flex justify-center text-3xl mt-5">
                <img src={logo} alt="" width="230px"/>
            </h1>

            <div className="grid grid-cols-2 gap-1 mb-5">
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
                            <Link to='/estoque' className='hover:underline'>
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