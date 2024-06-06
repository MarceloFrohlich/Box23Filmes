'use client'

import { useFormStatus } from 'react-dom'
import { Oval } from 'react-loader-spinner'

interface IFormSubmitButton {
    action: string
    waiting: string
}
export default function FormSubmitButton({ action, waiting}: IFormSubmitButton) {

    const { pending  } = useFormStatus()

    return (
        <button
        className="border py-2 px-8 rounded-lg hover:bg-gray-200 hover:text-zinc-800 duration-300"
            disabled={pending}>
            {pending ? <div className='flex items-center justify-center'> 
                <p>{waiting}</p>
                <Oval visible={true} ariaLabel="oval-loading" color='#f7f6f6' secondaryColor='#111110' height={16} strokeWidth={10} />
            </div>
                :
                `${action}`}
        </button>
    )
}