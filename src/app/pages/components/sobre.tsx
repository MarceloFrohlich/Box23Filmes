import Image from "next/image"
import sobre from '../../../../public/assets/sobre.png'

const Sobre: React.FC = () => {
    return (
        <section className="bg-gray-200 text-slate-800 flex flex-col w-full items-center">
            <div className="w-1/2 gap-6 flex flex-col items-center my-6">
                <h1 className="text-3xl font-semibold">Sobre nós</h1>
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-justify">Na Box23 Produções, oferecemos uma ampla gama de serviços especializados em captação, edição de
                        vídeos e fotografia. </p>
                    <p className="text-lg text-justify">Nossa missão é entregar produtos audiovisuais de alta qualidade,
                        personalizados para atender às necessidades
                        dos nossos clientes.</p>
                    <p className="text-lg text-justify">Na Box23 Produções, nosso compromisso é com a excelência e
                        a inovação, buscando sempre superar as expectativas dos nossos clientes.</p>
                </div>
                <div>
                    <Image className="rounded-xl shadow-xl" src={sobre} width={500} height={500} priority alt="Sobre" />
                </div>
            </div>
        </section>
    )
}

export default Sobre