import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongodb";
import { messages } from "@/utils/messages";
import User from "@/models/User";
import { Resend } from "resend";
import jwt from "jsonwebtoken";
import { EmailTemplate } from "@/components/EmailTemplate";


// guardar en archivo .env
const resend = new Resend("re_dMiYB8ZR_8nmjAUu9ZoiDagTdRpKfR7d6");

export async function POST(request: NextRequest) {
  try {
    const body: { email: string } = await request.json();

    const { email } = body;

    await connectMongoDB();
    const userFind = await User.findOne({ email });

    // Validar que exista el usuario
    if (!userFind) {
      return NextResponse.json(
        { message: messages.error.userNotFound },
        { status: 400 }
      );
    }

    const tokenData = {
      email: userFind.email,
      userId: userFind._id,
    };

    const token = jwt.sign({ data: tokenData }, "secreto", {
      expiresIn: 86400,
    });

    const forgetUrl = `http://localhost:3000/change-password?token=${token}`;

    // @ts-ignore
    await resend.emails.send({
      from: "onboarding@resend.dev", //email de prueba que da Resend
      to: email,
      subject: "Cambio de Contraseña",
      react: EmailTemplate({ buttonUrl: forgetUrl }),
    });

    return NextResponse.json(
      { message: messages.success.emailSent },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: messages.error.default, error },
      { status: 500 }
    );
  }
}
