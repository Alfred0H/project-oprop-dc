import Image from "next/image"

const MainPage = () => {
    return (
        <div className="w-auto h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-20 before:opacity-50">
            
            <Image
                src="https://img.freepik.com/foto-gratis/co-trabajando-personas-trabajando-juntas_23-2149328346.jpg?w=740&t=st=1714543092~exp=1714543692~hmac=4cd011e05a8f475d8cee74df45993be285f234363d8115596e06e7eb3eb92701"
                width={1900}
                height={1850}
                alt=""
                className="absolute top-0 left-1 min-h-full ob"
            />
            <div className="relative left-14 z-20 grid grid-cols-12 h-full items-center">
                <div className="col-span-6 ">
                    <span className="uppercase text-white text-xs font-bold mb-2 block">cada detalle cobra</span>
                    <h1 className="text-white font-extrabold text-5xl mb-8">Bienvenidos a nuestro portal de órdenes de producción</h1>
                    <p className="text-stone-100 text-base">
                    Estamos emocionados de colaborar contigo en la realización de tus proyectos, desde la idea inicial hasta la entrega final. 
                    </p>
                    <a href="/dashboard/create-wo" className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 border border-blue-500 rounded transition duration-300 ease-in-out">
  Comencemos
                    </a>
                    
                </div>
            </div>
        </div>

            
        );
    }

export default MainPage