import { Dialog, DialogContent, DialogTrigger } from "../../../ui/dialog"

interface ICaseItem {
    titulo: string
    fundoImage: string
}

const CaseItem: React.FC<ICaseItem> = ({ fundoImage, titulo }) => {
    return (
        <section className={`${fundoImage} bg-cover bg-center min-w-[30%] h-52 m-3 shadow-lg shadow-gray-900`}>
            <Dialog>
                <DialogTrigger className='w-full h-full flex flex-col justify-end'>
                    <div className="w-full bg-white/30 h-12 flex justify-center items-center">
                        <h1 className="text-gray-200">{titulo}</h1>
                    </div>
                </DialogTrigger>
                <DialogContent>

                </DialogContent>
            </Dialog>

        </section>

    )
}

export default CaseItem