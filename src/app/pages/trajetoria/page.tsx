import Image from "next/image"
import primeira from '../../../../public/assets/trajetoria1.jpeg'
import segunda from '../../../../public/assets/trajetoria2.jpeg'
import terceira from '../../../../public/assets/trajetoria3.jpeg'
import quarta from '../../../../public/assets/trajetoria4.jpeg'
import quinta from '../../../../public/assets/trajetoria5.jpeg'

const Trajetoria: React.FC = () => {
    return (
        <section className="w-full flex flex-col items-center pt-20">
            <div>
                <h1 className="text-3xl text-gray-200 text-center mb-6 font-semibold">Minha Trajetória!</h1>
            </div>

            <div className="w-5/6 text-gray-200 flex flex-col gap-6">
                <div className="w-full flex" >
                    <div className="w-7/12 text-justify flex flex-col gap-6 text-lg p-3">
                        <p>Olá, meu nome é Maurício Fröhlich, tenho 39 anos e 24 anos de experiência em captação e edição de vídeo.</p>
                        <p>Minha paixão por filmes começou na infância, muito por conta do negócio da família, que era uma videolocadora. Meu pai tinha uma
                            eletrônica, a primeira eletrônica e videolocadora na pequena cidade de Dois Irmãos, onde ele consertava e vendia televisores e
                            videocassetes. Por conta disso, ele montou uma videolocadora para vender mais aparelhos.</p>
                        <p>Minhas melhores memórias são dessa época, na qual eu era rodeado de fitas VHS, olhando as capas e querendo assistir a tudo.
                            E eu assisti. Meus pais contavam que, mesmo antes de eu aprender a caminhar, já sabia ligar o videocassete para assistir a
                            filmes. Uma das histórias é que, certa madrugada, acordaram com o barulho da televisão, achando que estavam sendo assaltados,
                            mas era eu assistindo a um filme de madrugada.</p>
                    </div>
                    <div className="w-5/12 relative  p-3">
                        <div className="relative w-full h-full">
                            <Image src={primeira} fill alt="Logo" className="object-cover rounded-xl" />
                        </div>
                    </div>

                </div>
                <div className="w-full flex " >
                    <div className="w-5/12 relative  p-3">
                        <div className="relative w-full h-full">
                            <Image src={segunda} fill alt="Logo" className="object-fit rounded-xl" />
                        </div>
                    </div>
                    <div className="w-7/12 text-justify flex flex-col gap-6 text-lg p-6">
                        <p>Além disso, meu pai cobria eventos. Ele foi uma das primeiras pessoas a ter uma filmadora na época, então as pessoas o chamavam para gravar eventos sociais.</p>
                        <p>Na adolescência, meu pai queria que eu assumisse a empresa e continuasse o negócio da família. Porém, meu interesse sempre foi nos filmes, não em consertar televisores. Meu primeiro emprego foi com meu pai, ajudando nas instalações de antenas parabólicas e atendendo na loja. Aos poucos, fui assumindo a videolocadora.</p>
                        <p>No ensino médio, cursei Técnico em Publicidade e Propaganda e tive excelentes professores. Em 2002, tive a oportunidade de produzir meu primeiro curta-metragem, "Capitão Nausias - A Ressurreição", uma adaptação do conto "A Igreja do Diabo" de Machado de Assis. Foi o primeiro Cinemachado da Feevale, um projeto no qual os alunos do ensino médio deveriam fazer curtas-metragens baseados nos contos de Machado de Assis. Com esse filme, ganhei duas premiações: Filme Revelação do Festival e Melhores Efeitos Especiais.</p>
                    </div>

                </div>

                <div className="w-full flex" >
                    <div className="w-7/12 text-justify flex flex-col gap-6 text-lg p-3">
                        <p>Além das minhas produções em vídeo, fui colunista no jornal da cidade, onde escrevia sobre filmes e lançamentos. Paralelamente, era fotógrafo das festas da região, numa época em que ainda não existiam celulares com câmera. Tive brevemente um programa na rádio da cidade também.</p>
                        <p>Depois disso, viajei para a Nova Zelândia, onde morei por 11 meses. Fui com o intuito de aprimorar a língua inglesa, aprender sobre outras culturas e ter a oportunidade de me comunicar com pessoas de várias partes do mundo. Foi uma experiência incrível.</p>
                        <p>Em 2005, voltei ao Brasil e fiz meu segundo filme independente, "Lost Boys - Trilhas sem Rumo". Apresentei o filme no Festival Festicine Ferrabras e recebi o prêmio de Melhor Filme.</p>
                    </div>
                    <div className="w-5/12 relative p-3">
                        <div className="relative w-full h-full">
                            <Image src={terceira} fill alt="Logo" className="object-cover rounded-xl" />
                        </div>
                    </div>

                </div>
                <div className="w-full flex" >
                    <div className="w-full text-justify flex flex-col gap-6 text-lg p-3">
                        <p>Em 2007, trabalhei na Shock TV, onde aprendi a arte do motion design, especialmente com o Adobe After Effects, dando meus primeiros passos na especialização em arte final. Paralelamente, fazia freelances como operador de câmera para uma produtora de eventos (Foto Dois Irmãos) e editor de eventos sociais (Markos Video).</p>
                        <p>Em 2009, trabalhei na Querosene Labs em Porto Alegre como arte-finalista, ficando na produtora por quase dois anos. Depois, voltei para Dois Irmãos, mas acabei indo trabalhar para uma produtora em Novo Hamburgo, onde editava formaturas, em 2010.</p>
                        <p>Em 2011, trabalhei com um amigo na Documenta Video, ajudando nas edições e finalizações. Em 2012, junto com mais duas pessoas, abrimos a Apollo Commerce, com o intuito de criar conteúdo para pequenas empresas. Nesse período, voltei a estudar e cursei Administração na Instituição Imaculada Conceição, formando-me em 2013.</p>
                        <p>Em 2014, abri com um amigo a produtora Box23 Filmes, especializada em produção audiovisual voltada para publicidade e cultura. A missão sempre foi produzir conteúdos de qualidade para atender a diversas empresas em variados segmentos, oferecendo um serviço diferenciado e gerando interesse no público-alvo por meio de vídeos dinâmicos e criativos. A ideia de abrir a produtora em Dois Irmãos foi para preencher um espaço que até então não existia, trazendo produções de qualidade ao interior e buscando resultados criativos desenvolvidos estrategicamente conforme a identidade de cada cliente.</p>
                    </div>
                </div>

                <div className="w-full flex" >
                    <div className="w-5/12 relative p-3">
                        <div className="relative w-full h-full">
                            <Image src={quarta} fill alt="Logo" className="object-cover rounded-xl" />
                        </div>
                    </div>

                    <div className="w-7/12 text-justify flex flex-col gap-6 text-lg p-3">
                        <p>Desde 2015 assumi sozinho a Box23. Ao longo desses anos, adquiri muitos clientes de diversos segmentos. Hoje, a Box23 conta com colaboradores chamados conforme a demanda de cada projeto criativo, de acordo com suas especialidades.</p>
                        <p>Em 2024 fiz um estágio na produtora The Brief Store, sediada em Auckland, Nova Zelândia. Lá, produzi diversos vídeos voltados para as mídias sociais, focando mais na produção de reels para o Instagram. Pude atualizar meus conhecimentos sobre as tendências do mercado em 2024.</p>
                    </div>
                    <div className="w-5/12 relative p-3">
                        <div className="relative w-full h-full">
                            <Image src={quinta} fill alt="Logo" className="object-cover rounded-xl" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Trajetoria