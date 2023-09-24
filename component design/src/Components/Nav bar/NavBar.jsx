import React, {useEffect, useState} from 'react'
import SahooLogo from '../../assets/Sahoo babu logo.png'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function NavBar() {

    const [items, setItems] = useState([])

    // let main_arr = []

    const setProduct = async () => {
        let res = await fetch("https://sourav78.github.io/Product-api/products/product.json")
        let data = await res.json()

        console.log(Object.keys(data));
        let data_key = Object.keys(data)
        let main_arr = data_key.map((ele, ind) => {
            return {
                title: ele,
                key: ind
            }
        })
        // console.log(new Set(main_arr));
        console.log(main_arr);
        setItems(main_arr)
    }

    useEffect(()=>{
        setProduct()

    },[])

    const [open, setOpen] = useState(false);
    const handleMenuClick = (e) => {
        if (e.key === '3') {
            setOpen(false);
            
        }
    };

    const handleOpenChange = (flag) => {
        setOpen(flag);
    };
    
    return (
        <>
            <div className="m-2 max-w-full rounded px-3 py-2 bg-white">

                <div className=" flex justify-between items-center px-3">
                    <img className=' w-48' src={SahooLogo} alt="" />
                    <div className=" pr-7">
                        <ul className=' flex gap-14 text-xl font-semibold'>
                            <li className=' cursor-pointer'>Home</li>
                            <li className=' cursor-pointer'>
                                <Dropdown
                                    menu={{
                                        items,
                                        onClick: handleMenuClick,
                                    }}
                                    onOpenChange={handleOpenChange}
                                    open={open}
                                    >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Product
                                            <DownOutlined style={{ fontSize: '14px'}} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                            <li className=' cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NavBar