"use client"
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { submitEmail, receive } from "../hooks/api";

interface EmailSendData {
    nome: string | FormDataEntryValue | null;
    telefone: string | FormDataEntryValue | null;
    mensagem: string | FormDataEntryValue | null;
    email: string | FormDataEntryValue | null;
}

const Contato: React.FC = () => {

   async function sendEmailAction(formData: FormData) {
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

    return (
        <section className="w-full my-6 text-gray-200">
            <h1 className="text-3xl text-center mb-6 font-semibold">Contato</h1>

            <div className="flex gap-10 justify-around">
                <div className=" flex flex-col gap-6">
                    <div className="flex gap-4 items-center">
                        <div className="flex border border-gray-200 text-lg rounded-full w-10 h-10 justify-center items-center ">
                            <LuPhone />
                        </div>
                        <div className="flex flex-col">
                            <h1>Telefone</h1>
                            <p>+55 51 99304-5569</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex border border-gray-200 text-lg rounded-full w-10 h-10 justify-center items-center ">
                            <CiMail />
                        </div>
                        <div className="flex flex-col">
                            <h1>Email</h1>
                            <p>mauriciofrohlich@hotmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex border border-gray-200 text-lg rounded-full w-10 h-10 justify-center items-center ">
                            <SlLocationPin />
                        </div>
                        <div className="flex flex-col">
                            <h1>Av. João Klauck, nº118</h1>
                            <p>Centro – Dois Irmãos - RS</p>
                        </div>
                    </div>
                </div>

                <form action={sendEmailAction} className="flex w-1/2 flex-col gap-2">
                    <div className="flex gap-4">
                        <div className="flex flex-1 flex-col gap-1">
                            <input
                                placeholder="Nome"
                                name="nome"
                                className="bg-zinc-800 border rounded-lg p-2"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                            <input
                                placeholder="Telefone"
                                name="telefone"
                                className="bg-zinc-800 border rounded-lg p-2"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-1">
                        <input
                            placeholder="Email"
                            className="bg-zinc-800 border rounded-lg p-2"
                            type="text"
                            name="email"
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-1">
                        <textarea
                            placeholder="Sua mensagem"
                            className="bg-zinc-800 border rounded-lg resize-none p-2"
                            name="mensagem"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button className="border py-2 px-8 rounded-lg hover:bg-gray-200 hover:text-zinc-800 duration-300">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contato;
