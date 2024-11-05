import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className=" flex justify-between items-center h-24 bg-zinc-950 p-5">
      <div className="flex justify-between items-center mx-auto max-w-7xl w-full">
        <h1 className="text-white text-2xl font-bold ml-5">Eleições 2024</h1>

        <nav className="flex gap-5 mr-5">
          <Link href="/">Inicio</Link>
          <Link href="/candidato">Candidatos</Link>
          <Link href="/eleitor">Eleitor</Link>
        </nav>
      </div>
    </header>
  );
}
