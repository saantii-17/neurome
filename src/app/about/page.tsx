import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen p-10 bg-slate-950 text-white">

      <h1 className="text-4xl font-bold mb-4">
        Sobre nosotros
      </h1>

      <p className="text-slate-400">
        Esta es nuestra página About.
      </p>

      <Link
        href="/"
        className="text-blue-400 mt-6 inline-block"
      >
        Volver al inicio
      </Link>

    </main>
  )
}