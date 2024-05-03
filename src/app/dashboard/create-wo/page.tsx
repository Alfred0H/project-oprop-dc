'use client'

import { Form } from '@/components/Form'
import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker/dist/react-datepicker';

const OrderForm = () => {
    const [tipoEntrega
            fechaCreacion,
            nombreCliente,
            ubicacionEntrega,
            numCel,
            producto,
            descripcion,
            recursos,
            archivo,] = useState('');
  
    const handleTipoEntregaChange = (event) => {
      setTipoEntrega(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('/api/create-wo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  tipoEntrega
            fechaCreacion,
            nombreCliente,
            ubicacionEntrega,
            numCel,
            producto,
            descripcion,
            recursos,
            archivo,
       }),
        });
  
        if (response.ok) {
          console.log('Orden creada exitosamente.');
        } else {
          console.error('Error al crear la orden.');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };
export default function CreateWO() {




  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const currentDate = new Date().toLocaleDateString();
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };


  return (
    <>
    
      <div className="w-screen h-screen bg-gray-300">   
        <div className="relative left-14 h-screen mx-auto flex justify-center items-center p-2 md:p-0">
            <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
            <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Creando Orden de Producción</p>  

                <div className="flex flex-col md:flex-row">
                    <div className="">
                        <select className="border p-2 rounded"  value={tipoEntrega}>
                            <option>Entrega a Domicilio</option>
                            <option>Entrega a su Empresa</option>
                            <option>Irán por el producto</option>
                        </select>
                    </div>
                    <div className="pt-6 md:pt-0 md:pl-6">
                        <div className="w-full max-w-xs mx-auto">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Fecha de Entrega"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400"
                            />
                        </div>
                    </div>
                    <div className="pt-6 md:pt-0 md:pl-6" value={tipoEntrega}>
                        <div className="center w-full max-w-xs mx-auto">
                            <a>
                                Fecha Creación:
                            </a>
                        </div>
                    </div>
                    <div className="pt-6 md:pt-0 md:pl-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" value={tipoEntrega}></label>
                            <input
                                type="text"
                                value={currentDate}
                                readOnly
                                className="mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                        <div className="flex border rounded bg-gray-300 items-center p-2 ">
                            <svg className="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui"
                                      d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
                            </svg>
                            <input  type="text" 
                                    placeholder="Cliente"
                                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                                   
                        </div>
                        <div className="flex border rounded bg-gray-300 items-center p-2 ">
                            <svg  className="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui"
                                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"/>
                            </svg>
                            <input  type="text" 
                                    placeholder="Empresa"
                                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                        <div className="flex border rounded bg-gray-300 items-center p-2 ">
                            <svg className="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui"
                                      d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/>
                            </svg>
                            <input  type="text" 
                                    placeholder="Ubicación para entrega"
                                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                        </div>
                        <div className="flex border rounded bg-gray-300 items-center p-2 ">
                            <svg className="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className="heroicon-ui"
                                      d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"/>
                            </svg>
                            <input  type="text"
                                    placeholder="N° Celular"
                                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                        <div className="flex border rounded bg-gray-300 items-center p-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <input  type="text" 
                                    placeholder="Producto a Realizar"
                                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                        </div>
                        <div className="flex border rounded bg-gray-300 items-center p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <input  type="text" 
                                    placeholder="Descripcion"
                                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                        <div className="flex border rounded bg-gray-300 items-center p-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                        </svg>
                        <input  type="text" 
                                    placeholder="Recursos a utilizar"
                                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700"/>
                        </div>
                        <label htmlFor="file-upload" className="bg-gray-600 text-white font-ligth py-2 px-4 rounded cursor-pointer">
                            Cargar recurso
                            <input id="file-upload" type="file" className="hidden" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center"><button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">Crear Orden</button></div>
            </div>
        </div>
    </div>
</>
)
}