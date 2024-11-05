import Cabecalho from "./cabecalho";
import Rodape from "./Rodape";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Pagina(props: any) {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />
      <main className="flex-1 py-16 mx-auto max-w-7xl w-full p-4">{props.children}</main>
      <Rodape />
    </div>
  );
}
