import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    const msg = {
      to: 'destinatario@example.com', // Substitua pelo email do destinatário
      from: 'seu-email-verificado@example.com', // Substitua pelo seu email verificado no SendGrid
      subject: `Nova mensagem de contato de ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`,
    };

    await sendgrid.send(msg);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
