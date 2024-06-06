import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Manipulador para requisições POST
export async function POST(req: NextRequest) {
  try {
    const { nome, telefone, mensagem, email } = await req.json();
    console.log('Dados recebidos:', { nome, telefone, mensagem, email });

    if (!nome || !telefone || !mensagem || !email) {
      console.log('Campos obrigatórios faltando');
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    // Configure o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'smtp.w3chost.com.br',
      secure: false,
      ignoreTLS: true,
      auth: {
        user: 'noreply@w3chost.com.br', // Seu email
        pass: 'Duda@2806', // Sua senha do email
      },
    });

    await transporter.sendMail({
      from: 'noreply@w3chost.com.br',
      to: 'm.frohlich5@gmail.com',
      subject: `Novo contato de: ${nome}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Redefinição de Senha - MostraGlass</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0;">
          <table width="100%" bgcolor="#f4f4f4" cellpadding="0" cellspacing="0" border="0">
              <tr>
                  <td>
                      <table width="600" bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" border="0"
                          style="margin: 0 auto; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 8px;">
                          <tr>
                              <td align="center" style="padding: 20px;">
                                <img src="https://marcelo-nextjs-teste-projeto.s3.us-east-2.amazonaws.com/boxLogo.png"
                                  alt="MostraGlass Logo" style="max-width: 80%; height: auto;">
                                  <h1 style="margin: 20px 0;">Novo email de contato!</h1>
                              </td>
                          </tr>
                          <tr>
                              <td style="padding: 20px; color: #000000;">
                                  <p>Olá Maurício,</p>
                                  <p>Recebemos uma novo contato de cliente.</p>
                                  <p style="text-align: start; font-size: 18px;;">Nome: ${nome}</p>
                                  <p style="text-align: start; font-size: 18px;;">Telefone: ${telefone}</p>
                                  <p style="text-align: start; font-size: 18px;;">Email: ${email}</p>
                                  <p style="text-align: start; font-size: 18px;;">Mensagem: ${mensagem}</p>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
      `,
    });

    console.log('Email enviado com sucesso');
    return NextResponse.json({ message: 'Email enviado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}