import mongoose, { Schema, Document, ObjectId, mongo } from "mongoose";

            
export interface IOrder {
  _id?: ObjectId | string | undefined;
  tipoEntrega : string;
  fechaEntrega: string;
  fechaCreacion: string;
  nombreCliente: string;
  ubicacionEntrega: string;
  numCel : string;
  producto: string;
  descripcion: string;
  recursos: string;
  archivo: string;
}

export interface IOrderSchema extends Document {
  __id?: ObjectId | string | undefined;
  tipoEntrega : string;
  fechaEntrega: string;
  fechaCreacion: string;
  nombreCliente: string;
  ubicacionEntrega: string;
  numCel : string;
  producto: string;
  descripcion: string;
  recursos: string;
  archivo: string;
}

const OrderSchema: Schema = new Schema(
  {  
    tipoEntrega: {
    type: String,
    required: true
  },
  fechaEntrega: {
    type: String,
    required: true,
    unique: true,
  },
  fechaCreacion: {
      type: String,
      required: true,
      unique: true,
    },
    nombreCliente: {
      type: String,
      required: true,
    },
    ubicacionEntrega: {
        type: String,
        required: true
    },
    numCel: {
        type: String,
        required: true,
        unique: true,
    },
    producto: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    recursos: {
        type: String,
        required: true,
        unique: true,
    },
    archivo: {
        type: String,
        required: true,
    },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);
export default Order;
