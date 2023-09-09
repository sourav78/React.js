import React, {useState} from 'react'

function SimpleCalculator() {

    const [calc, setCalc] = useState([])

    const calculate = () => {
        const num1 = parseInt(document.getElementById("fnum").value)
        const num2 = parseInt(document.getElementById("snum").value)



        setCalc([(num1+num2), (num1-num2), (num1 * num2), (num1 / num2)])

        console.log(typeof num1);
    }

  return (
    <div className='min-h-screen bg-slate-900'>
        <h1 className='text-sky-400 text-5xl font-bold text-center pt-12'>Simple Calculator</h1>

        <div className=' mt-10'>    

            <div className=' max-w-md m-auto p-3'>
                <label htmlFor='fnum' className=' text-white text-lg'>Enter 1st number:</label>
                <input type='number' id='fnum' required
                className=' w-full mb-8 p-1 text-lg font-bold outline-none focus:border-2 focus:border-cyan-400 rounded-md'
                ></input>
                <label htmlFor='snum' className=' text-white text-lg'>Enter 2nd number:</label>
                <input type='number' id='snum' required
                className=' w-full mb-3 p-1 text-lg font-bold outline-none focus:border-2 focus:border-cyan-400 rounded-md'
                ></input>

                <div className=' mt-5 flex justify-center'>
                    <button onClick={calculate} id='calc' className=' p-2 bg-purple-600 font-bold rounded text-white tracking-wider'>Calculate</button>
                </div>

            </div>

            <div className=' p-5 flex gap-9 flex-wrap justify-center mt-8'>
                <div className=' p-5'>
                    <p className=' text-3xl text-white font-semibold'>SUM: <span className='text-sky-400'>{calc[0]}</span></p>
                </div>
                <div className=' p-5'>
                    <p  className=' text-3xl text-white font-semibold'>SUB: <span className='text-sky-400'>{calc[1]}</span></p>
                </div>
                <div className=' p-5'>
                    <p  className=' text-3xl text-white font-semibold'>MUL: <span className='text-sky-400'>{calc[2]}</span></p>
                </div>
                <div className=' p-5'>
                    <p  className=' text-3xl text-white font-semibold'>DIV: <span className='text-sky-400'>{calc[3]}</span></p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SimpleCalculator