import { useState, useEffect } from 'react'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('use effect', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handle Move', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    // If this will subscription will be outside of the hook then the handle will be suscribed on each rendering
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup: to be executed when the component will be unmont and when the dependency list will be changed
    return () => {
      console.log('clean up handle')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // change class name to add and to remove cursor
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button
        onClick={() => {
          setEnabled(!enabled)
        }}
      >
        {enabled ? 'Disabled' : 'Enabled'} following mouse
      </button>
    </>
  )
}
