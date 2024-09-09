import { useState } from 'react'

function App() {
  const [color, setColor] = useState("cyan")

  return (
    <div className='w-full h-screen flex justify-center'
    style={{backgroundColor: color}} 
    >
      <div className='bg-white p-2 rounded-full flex absolute bottom-4 flex justify-between gap-4'>
        <div className='text-white bg-green-600 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Green")}>Green</div>
        <div className='text-white bg-pink-600 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("pink")}>Pink</div>
        <div className='text-white bg-red-600 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("red")}>Red</div>
        <div className='text-white bg-yellow-500 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("yellow")}>Yellow</div>
        
      </div>
    </div>
  )
}

export default App
