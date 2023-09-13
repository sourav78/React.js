import React from 'react'

function PasswordGenerator() {
    return (
        <>
            <div className=" w-full max-w-xl mx-auto py-2 px-4 my-8 bg-gray-600 rounded-md shadow-md">
                <div className=" flex rounded-md overflow-hidden">
                    <input type="text" 
                    readOnly
                    className=' w-full px-2 py-1 text-lg'
                    />
                    <button
                    className='bg-blue-600 p-1 text-white'>Copy</button>
                </div>
                <div className='flex gap-x-2 text-xl text-white'>
                    <div className='flex items-center gap-x-1'>
                    <input 
                    type="range"
                    className='cursor-pointer'
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={numberAllow}
                        id="numberInput"
                    />
                    <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={specialChar}
                            id="characterInput"
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator