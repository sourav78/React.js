import React from 'react'
import { StarFilled } from '@ant-design/icons'
import { Radio } from 'antd'

function Shoes() {

    function setStyles(colorCode){
        return {backgroundColor: colorCode, borderRadius:"50px", padding:"20px", outline:"none", marginInline:"5px"}
    }

    let colorArray = ["#e744c3", "#32192c", "#29acbe", "#846b2d", "#45806a"]
    return (
        <>
            <div className=" w-[600px] h-72 bg-white rounded-lg flex flex-wrap items-center p-2">
                <div className=" w-52">
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/z/9/b/-original-imagtbtesxtgspxz.jpeg?q=70" alt="" />
                </div>
                <div className=" bg-gray-300 w-[1px] h-full mx-1"></div>
                <div className=" flex-auto h-full p-3">
                    <div className=" flex justify-between items-center">
                        <p className=' text-lg w-56 font-semibold'>Campus Men's MAGNITE Running Shoes</p>
                        <p className="price text-2xl font-bold">₹3333</p>
                    </div>
                    <div className=" flex justify-between items-center mt-2">
                        <p className=' text-[18px] text-blue-600 w-56 font-semibold'>Campus</p>
                        <div className=' flex gap-1 items-center'><p className="price text-sm font-bold bg-green-600 px-1 rounded text-white flex items-center">4.1 <StarFilled /></p>
                        <span className=' text-xs'>(457)</span>
                        </div>
                    </div>
                    <div className=" mt-6">
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            {
                                colorArray.map((ele) => {
                                    return <Radio.Button className=' overflow-hidden' style={setStyles(ele)}></Radio.Button>
                                })
                            }
                        </Radio.Group>
                    </div>

                    <div className=" flex justify-start gap-9 mt-4">
                        <button className=' w-28 bg-blue-500 text-white font-semibold text-lg h-10 rounded'>Buy now</button>
                        <button className='w-28 border-blue-500 border-2 text-black hover:bg-blue-500 hover:text-white transition font-semibold text-lg h-10 rounded'>Add to cart</button>
                    </div>

                    <p className=' text-lg font-semibold text-gray-400 mt-2'>In Stock</p>
                </div>
            </div>
        </>
    )
}

export default Shoes