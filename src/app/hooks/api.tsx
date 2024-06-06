import axios from 'axios';

// Defina a estrutura do tipo de dados
interface EmailSendData {
    nome: string | FormDataEntryValue | null;
    telefone: string | FormDataEntryValue | null;
    mensagem: string | FormDataEntryValue | null;
    email: string | FormDataEntryValue | null;
}

export async function submitEmail(data: EmailSendData) {
    try {
        console.log('Dados enviados:', data);  // Adicione este log para depuração
        const response = await axios.post('/pages/api', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error: any) {
        console.log(`API error: ${error}`);
        return error;
    }
}
