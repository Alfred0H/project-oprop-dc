import { dateTransform } from '@/utils/dateTransform'
import Order from '@/models/Order';
import { Input } from '../../../components/Form/components/Input';

async function getData() {
  const res = await fetch('http://localhost:3000/api/board')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  // Si todo está bien, devolver los datos
    return res.json()
    
}

export default async function Board() {
  const { order } = await getData()

    {order?.map((order: any, index: number) => {
            const isEven = index % 2 === 0

  },
            
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div aria-label="card" className="p-8 rounded-3xl bg-white max-w-sm w-full">
            <div aria-label="header" className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <div className="space-y-0.5 flex-1">
                    <h3 className="font-medium text-lg tracking-tight text-gray-900 leading-tight">
                      {order.producto}
                    </h3>
                    <p className="text-sm font-normal text-gray-400 leading-none">
                        {order.tipoEntrega} en {order.ubicacionEntrega} el {order.ubicacionEntrega}
                    </p>
                </div>      
            </div>
            <div aria-label="content" className="mt-9 grid gap-2.5">
                <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                    <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </span>
                <div className="flex flex-col flex-1">
                  <h3 className="text-sm font-medium">{order.descripcion}</h3>
                    <div className="divide-x divide-gray-200 mt-auto">
                        <span className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0">
                        </span>
                    </div>
                </div>
            </div>
            <a href="#">
              <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 className="text-sm font-medium">{order.numCel}</h3>
                  <div className="divide-x divide-gray-200 mt-auto">
                    <span className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0">
                        {order.nombreCliente}
                    </span>
                    <span className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0">
                    {order.numCel}
                    </span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </div>
            </a>
            <a href="#">
              <div
                className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 className="text-sm font-medium">{order.recursos}</h3>
                  <div className="divide-x divide-gray-200 mt-auto">
                    <span className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0">
                    {order.archivo}  
                    </span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </div>
            </a>
     
          </div>
        </div>
      </div>
  )
}
}