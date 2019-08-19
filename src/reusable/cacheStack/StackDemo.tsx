import React, { useState } from 'react'
import { useCacheFIFO, useCacheLIFO } from './cacheStack'

export function StackDemo() {
  const fifo = useCacheFIFO('MY_FIFO', [1])
  const lifo = useCacheLIFO('MY_LIFO', [1])

  const [takeFIFO, setTakeFIFO] = useState('')
  const [takeLIFO, setTakeLIFO] = useState('')

  return (
    <div>
      <h1>Cache Stack</h1>

      <section>
        <h2>FIFO</h2>
        <button
          onClick={() => fifo.add((fifo.state[fifo.state.length - 1] || 0) + 1)}
        >
          ADD
        </button>
        <button onClick={() => fifo.clear()}>CLEAR</button>
        <button onClick={() => fifo.delete()}>DELETE</button>
        <button onClick={() => fifo.reset()}>RESET</button>
        <button onClick={() => fifo.replace([99])}>REPLACE</button>
        <button onClick={() => setTakeFIFO(`${fifo.take()}`)}>TAKE</button>
        <div>
          Stack:
          <pre style={{ display: 'inline-block' }}>
            {JSON.stringify(fifo.state)}
          </pre>
        </div>
        <div>take: {takeFIFO}</div>
      </section>

      <section>
        <h2>LIFO</h2>
        <button
          onClick={() => lifo.add((lifo.state[lifo.state.length - 1] || 0) + 1)}
        >
          ADD
        </button>
        <button onClick={() => lifo.clear()}>CLEAR</button>
        <button onClick={() => lifo.delete()}>DELETE</button>
        <button onClick={() => lifo.reset()}>RESET</button>
        <button onClick={() => lifo.replace([99])}>REPLACE</button>
        <button onClick={() => setTakeLIFO(`${lifo.take()}`)}>TAKE</button>
        <div>
          Stack:
          <pre style={{ display: 'inline-block' }}>
            {JSON.stringify(lifo.state)}
          </pre>
        </div>
        <div>take: {takeLIFO}</div>
      </section>
    </div>
  )
}
