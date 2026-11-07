'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="flex flex-col items-center gap-4">

      <p className="text-3xl font-bold">
        {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 px-6 py-3 rounded-lg text-white"
      >
        Incrementar
      </button>

    </div>
  )
}