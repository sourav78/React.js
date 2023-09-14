import React, {useState, useEffect, useMemo} from 'react'
import { Switch, Tooltip, Button } from 'antd'

function PasswordGenerator() {

    const [password, setPassword] = useState("jsabdjsabj")
    const [numAllow, setNumAllow] = useState(false)
    const [specialChar, setSpecialChar] = useState(false)
    const [length, setLength] = useState(8)

    const generatePassword = () => {
        let passChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
        if(numAllow) passChar += "123456789012345678901234567890"
        if(specialChar) passChar += "!@#$%^&*()_+=-[{}];><?/~`"

        let pass = ""

        for(let i = 0; i <= length; i++){
            let randomNum = Math.floor(Math.random() * passChar.length)
            pass += passChar.charAt(randomNum)
        }
        setPassword(pass)
    }

    useEffect(generatePassword, [numAllow, specialChar, length])

    const copyToClipBoard = () => {
        window.navigator.clipboard.writeText(password)
    }

    const [arrow, setArrow] = useState('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
          return false;
        }
        if (arrow === 'Show') {
          return true;
        }
        return {
          pointAtCenter: true,
        };
      }, [arrow]);

    return (
        <>
            <div className=" w-full h-screen bg-gray-800 py-14">
                <div className=" w-full max-w-xl mx-auto py-2 px-4 bg-gray-600 rounded-md shadow-md">
                <div className=" flex rounded-md overflow-hidden">
                <input type="text"
                    readOnly
                    className=' w-full px-2 py-1 text-lg'
                    value={password}
                />
                <Tooltip placement="top" title="Copied" arrow={mergedArrow} trigger={'focus'} >
                    <Button
                        onClick={copyToClipBoard}
                        className='bg-blue-600 p-1 text-white rounded-none border-none h-10'
                    >Copy</Button>
                </Tooltip>
                </div>
                <div className='flex gap-x-2 text-xl text-white mt-4'>
                <div className='flex items-center gap-x-1'>
                    <input 
                        type="range"
                        min={6}
                        max={30}
                        onChange={(e) => setLength(e.target.value)}
                        value={length}
                        className='cursor-pointer'
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-1 bg-white text-black file px-1 py-2 rounded-lg">
                    <label htmlFor='numInp'>Numbers</label>
                    <Switch defaultChecked={numAllow} id='numInp' onChange={(checked) => setNumAllow(checked)}/>
                </div>
                <div className="flex items-center gap-x-1 bg-white text-black file px-1 py-2 rounded-lg">
                    <label htmlFor="characterInput">Characters</label>
                    <Switch defaultChecked={numAllow} id='characterInput' onChange={(checked) => setSpecialChar(checked)}/>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default PasswordGenerator