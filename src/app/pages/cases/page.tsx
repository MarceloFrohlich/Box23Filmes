import CaseItem from '../components/caseItem'

const Cases: React.FC = () => {
    return (
        <section className="bg-gray-200 w-full flex flex-col items-center pt-20 text-slate-800 min-h-screen">
            <div>
                <h1 className="text-3xl text-center mb-2 font-semibold">Cases</h1>
            </div>

            <div className="w-full flex justify-center">
                <div className="flex w-4/6 flex-wrap justify-around">
                    <CaseItem titulo="Caxias Ensemble" fundoImage="bg-firstCase"/>
                    <CaseItem titulo="Mesa de Arte" fundoImage="bg-firstCase"/>
                    <CaseItem titulo="Arte no Muro" fundoImage="bg-firstCase"/>
                    <CaseItem titulo="Encontro de Motos no Sapatão" fundoImage="bg-firstCase"/>                    
                </div>
            </div>
        </section>
    )
}

export default Cases