import React, { useEffect, useMemo, useState } from 'react'

import './App.css'
import PublicChat from './components/PublicChat'

const App = () => {

  const [components, setComponents] = useState(null)


  return (
    <>
      {
        !components && (
          <div className="p-2 flex justify-center">
            <button 
              onClick={() => setComponents('public')}
              className={`bg-green-400 p-2 rounded shadow-md border-2 ${components === 'public' && 'outline'} outline-2 outline-blue-500`}>Public chat</button>
          </div>
        )
      }
      {
        components === 'public' && (
          <>
            <div className="p-2">
              <button 
                onClick={() => setComponents(null)}
                className='bg-gray-200 py-2 px-4 rounded text-lg'>Back</button>
              <PublicChat />
            </div>
          </>
        )
      }
    </>
  )
}

export default App