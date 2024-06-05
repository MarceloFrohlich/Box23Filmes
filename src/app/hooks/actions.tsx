import { submitEmail } from "../hooks/api";

interface EmailSendData {
    nome: string | FormDataEntryValue | null;
    telefone: string | FormDataEntryValue | null;
    mensagem: string | FormDataEntryValue | null;
    email: string | FormDataEntryValue | null;
}

export async function sendEmailAction(formData: FormData) {
    const email:EmailSendData = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        mensagem: formData.get('mensagem'),
        telefone: formData.get('telefone')
    }
    console.log(email)
    const response = await submitEmail(email)
    if (response.request.status === 200) {
        console.log('Email enviado com sucesso!')
    }
    else {
        console.log('Deu merda')
    }
}