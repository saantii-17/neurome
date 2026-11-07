import Link from 'next/link'
import Counter from '@/components/Counter'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-6">

      <h1 className="text-5xl font-bold">
        Mi aplicación
      </h1>

      <p className="text-slate-400 text-lg">
        Next.js + TypeScript + Tailwind CSS
      </p>

      <div className="flex gap-4">
        <Link
          href="/about"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          Sobre nosotros
        </Link>

        <Link
          href="/contact"
          className="border border-slate-600 px-6 py-3 rounded-lg"
        >
          Contacto
        </Link>
      </div>

    </main>
  )
}