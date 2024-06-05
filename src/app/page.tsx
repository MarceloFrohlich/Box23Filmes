import Banner from "./components/banner";
import Contato from "./components/contato";
import Sobre from "./components/sobre";

export default function Home() {
  return (
    <main className=''>
      <Banner/>
      <Sobre />
      <Contato />

    </main>
  );
}
