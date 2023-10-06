import React, {useEffect, useState} from 'react'
import SahooLogo from '../../assets/Sahoo babu logo white.png'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
    const [items, setItems] = useState([])

    const setProduct = async () => {
        let res = await fetch("https://sourav78.github.io/Product-api/products/product.json")
        let data = await res.json()

        console.log(Object.keys(data));
        let data_key = Object.keys(data)
        let main_arr = data_key.map((ele, ind) => {
            return {
                label: ele,
                key: ind
            }
        })
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
            <div className="m-2 max-w-full rounded px-3 py-2 bg-blue-400 ">

                <div className=" flex justify-between items-center px-3">
                    <Link to="/">
                        <img className=' w-48' src={SahooLogo} alt="" />
                    </Link>
                    <div className=" pr-7">
                        <ul className=' flex gap-14 text-xl font-semibold text-white'>
                            <li className=' cursor-pointer'>
                            <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? "text-orange-600" : "text-white"} duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                            </NavLink>
                            </li>
                            <li className=' cursor-pointer'>
                                <Dropdown
                                    menu={{
                                        items,
                                        onClick: handleMenuClick,
                                    }}
                                    trigger={['click']}
                                    onOpenChange={handleOpenChange}
                                    open={open}
                                    >
                                        <Space>
                                        <NavLink
                                            to="/product"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 pl-3 ${isActive ? "text-orange-600" : "text-white"} duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Products
                                        </NavLink>
                                            <DownOutlined style={{ fontSize: '14px'}} />
                                        </Space>
                                </Dropdown>
                            </li>
                            <li className=' cursor-pointer'>
                                <NavLink
                                        to="/contact"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 ${isActive ? "text-orange-600" : "text-white"} duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar