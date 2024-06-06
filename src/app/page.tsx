import Banner from "./pages/components/banner";
import Contato from "./pages/components/contato";
import Sobre from "./pages/components/sobre";


export default function Home() {
  return (
    <main>
      <Banner/>
      <Sobre />
      <Contato id="contato" />

    </main>
  );
}
