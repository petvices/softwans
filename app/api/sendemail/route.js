import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_dCvTN6nt_65FPBfD9EVek28f8E6hT4ic4");

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, service, projectDescription } = body;

    // Validar que los datos obligatorios estén presentes
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { success: false, error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    // Enviar el correo con Resend
    const response = await resend.emails.send({
      from: "Softwans <onboarding@resend.dev>", // Cambia por tu dominio si tienes uno
      to: "oligarcastudios@gmail.com", // Correo donde quieres recibir los mensajes
      subject: "Nuevo mensaje de contacto",
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || "No especificado"}</p>
        <p><strong>Servicio de interés:</strong> ${service || "No especificado"}</p>
        <p><strong>Mensaje:</strong> ${projectDescription} </p>
        `,
    });

    return NextResponse.json({ success: true, message: "Correo enviado con éxito" });
    console.log(response);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { success: false, error: "Error al enviar el mensaje" },
      { status: 500 }
      
    );
  }

}
