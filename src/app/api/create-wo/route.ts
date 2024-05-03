import { NextRequest, NextResponse } from "next/server";
import Order, { IOrderSchema } from "@/models/Order";
import { connectMongoDB } from "@/libs/mongodb";
import { messages } from "@/utils/messages";



export async function POST(request: NextRequest) {
  try {
    await connectMongoDB();

    const body = await request.json();
    const { tipoEntrega,
            fechaEntrega,
            fechaCreacion,
            nombreCliente,
            ubicacionEntrega,
            numCel,
            producto,
            descripcion,
            recursos,
            archivo
        } = body;

    

   const newOrder: IOrderSchema = new Order({
        tipoEntrega,
        fechaEntrega,
        fechaCreacion,
        nombreCliente,
        ubicacionEntrega,
        numCel,
        producto,
        descripcion,
        recursos,
        archivo
    });


    await newOrder.save();


    const response = NextResponse.json(
      {
        status: 400,
      },
      {
        status: 200,
      }
    );

  
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: messages.error.default, error },
      { status: 500 }
    );
  }
}
