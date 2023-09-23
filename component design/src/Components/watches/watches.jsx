import React from 'react'
import { StarFilled } from '@ant-design/icons'

function Watches({ele}) {
    // console.log(ele);
    let {name, description, price, discount, ratting, sold, image_url} = ele
    return (
        <>
            <div className=" w-72 h-[470px] bg-white rounded-lg p-2">
                <div className=" w-full h-[260px] rounded overflow-hidden bg-slate-200 p-1">
                    <img className=' object-contain h-full m-auto mix-blend-multiply' src={image_url} alt="" />
                </div>
                <div className=" p-2">
                    <p className=' line-clamp-2 overflow-hidden breake-text text-center hover:text-blue-500 hover:underline cursor-pointer'>{name} {description}</p>
                    <p className="font-semibold text-center  text-[18px] text-blue-600 mt-2">{name}</p>
                    <div className=" flex justify-between mt-3 px-2">
                        <div className=" flex items-baseline gap-2">
                            <p className="price text-2xl font-bold">₹{price}</p>
                            <p className=' text-xs font-semibold'>{discount}% off</p>
                        </div>
                        <div className=' flex gap-1 items-center'><p className="price text-sm font-bold bg-green-600 px-1 rounded text-white flex items-center">{ratting} <StarFilled /></p>
                        <span className=' text-xs'>({sold})</span>
                        </div>
                    </div>
                    <div className=" flex justify-between gap-9 mt-4">
                        <button className=' w-28 bg-blue-500 text-white font-semibold text-lg h-10 rounded'>Buy now</button>
                        <button className='w-28 border-blue-500 border-2 text-black hover:bg-blue-500 hover:text-white transition font-semibold text-lg h-10 rounded'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watches