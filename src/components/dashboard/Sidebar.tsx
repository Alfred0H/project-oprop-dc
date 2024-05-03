import Image from "next/image";
import React from "react";
import { IoAt, IoExitOutline , IoDuplicateOutline , IoNewspaperOutline, IoGridOutline , } from "react-icons/io5";
import  SidebarMenuItem  from "./SidebarMenuItem";
import path from "path";
import User from "@/models/User";




const mesuItems = [
    {
        path: '/dashboard/create-wo',
        icon:<IoDuplicateOutline />,
        title: 'Crear' ,
        subTitle: 'Creación de Orden de Producción'   
    },
    {
        path: '/dashboard/board',
        icon:<IoGridOutline />,
        title: 'Tablero' ,
        subTitle: 'Ordenes de Producción'   
    },
    {
        path: '/',
        icon:<IoExitOutline />,
        title: 'Salir' ,
        subTitle: 'Cerrar Sesión'   
    }
];

export const Sidebar = () => {
    
    return(
        <div className="bg-slate-200 w-60 h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex flex-col relative w-screen">
                <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
                    <div id="logo" className="my-4 px-6">
                        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                                <IoNewspaperOutline className="mr-2" />
                                Orden
                                <span className="text-blue-500">Pro</span>+
                        </h1>
                        <p className="text-slate-500 text-sm">ORDEN DE PRODUCCIÓN</p>
                    </div>
                    <div id="profile" className="px-6 py-10">
                        <p className="text-slate-500">Bienvenido,</p>
                        <a href="main" className="inline-flex space-x-2 items-center">
                         <span className="text-sm md:text-base font-bold" >
                                Alfredo Herrera
                            </span>
                        </a>
                    </div>
                    <div id="nav" className="w-full px-6">
                        
                        {
                            mesuItems.map( (item)=>(
                                <SidebarMenuItem
                                    key={item.path}
                                    path={item.path}
                                    icon={item.icon}
                                    title={item.title}
                                    subTitle= {item.subTitle}
                                />
                            ))
                        }                     
                    </div>
                </div>
            </div>
        </div>
       
    )
}

