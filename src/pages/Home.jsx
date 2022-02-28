import React from 'react'
import { Counter } from '../components/Counter'
import Todos from '../components/Todos'

function Home() {
  return (
      <div>
        <Counter/>
        <Todos/>
    </div>
  )
}

export default Home