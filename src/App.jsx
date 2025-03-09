import { useState } from 'react'
import './App.css'
import { FollowMouse } from './FollowMouse'

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? 'Unmount' : 'Mount'} Follow Mouse
      </button>
    </main>
  )
}

export default App
