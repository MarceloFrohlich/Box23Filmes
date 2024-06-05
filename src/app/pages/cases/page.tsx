import CaseItem from "../../components/caseItem"

const Cases: React.FC = () => {
    return (
        <section className="bg-gray-200 w-full flex flex-col items-center pt-20 text-slate-800">
            <div>
                <h1 className="text-3xl text-center mb-6 font-semibold">Cases</h1>
            </div>

            <div className="border border-black w-full flex justify-center">
                <div className="border border-red-500 flex w-4/6 flex-wrap justify-around">
                    <CaseItem />
                    <CaseItem />
                    <CaseItem />
                    <CaseItem />                    
                    
                </div>
            </div>
        </section>
    )
}

export default Cases