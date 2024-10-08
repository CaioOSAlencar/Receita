import Cabecalho from "@/components/Cabecalho";
import CardList from "@/components/CardList";
import Contador from "@/components/Contador";
import Form from "@/components/form";
import Rodape from "@/components/rodape";

export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <Contador/>
      <Form/>
      <CardList/>
      <Rodape/>

   </div>
  )
}
