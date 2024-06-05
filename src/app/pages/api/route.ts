// src/app/pages/api/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handler para requisições POST
export async function POST(req: NextRequest) {
  try {
    const { nome, telefone, mensagem, email } = await req.json();

    if (!nome || !telefone || !mensagem || !email) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    // Configuração do transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: '',
        pass: '',
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    await transporter.sendMail({
      from: email,
      to: 'm.frohlich5@gmail.com',
      subject: `Novo contato de: ${nome}`,
      text: `
        Você recebeu uma nova mensagem de contato pelo site:

        Nome: ${nome}
        Telefone: ${telefone}
        Email: ${email}
        Mensagem: ${mensagem}
      `,
    });

    return NextResponse.json({ message: 'Email enviado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
