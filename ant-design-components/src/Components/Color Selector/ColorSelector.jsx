import React, {useState} from 'react'
import { ColorPicker, Space } from 'antd'
import './color.css'

function ColorSelector() {
    const [color, setColor] = useState("#1677FF")
  return (
    <>
        <div className="cont" style={{backgroundColor:color}}>
            <Space direction='horizontal'>
                <ColorPicker onChange={(e) => setColor(e.toHexString())} size='large' showText/>
            </Space>
        </div>
    </>
  )
}

export default ColorSelector