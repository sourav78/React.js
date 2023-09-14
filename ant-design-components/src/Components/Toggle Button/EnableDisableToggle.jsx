import React, {useState} from 'react'
import { Switch, Typography, Button, Space } from 'antd'

function EnableDisableToggle() {
    const [check, setCheck] = useState("Checked")
    const [disable, setDisable] = useState(false)
    const [color, setColor] = useState("#2878fa")
    const toggle = (checked) => {
        checked ? setCheck("Checked") : setCheck("Not Checked")
    }
    return (
        <>
            <Space direction='horizontal' size={"large"} align='center'>
                <Switch defaultChecked onClick={toggle} disabled={disable}/>
                <Typography.Title style={{color:color}} level={3} type='secondary'>Button is {check}</Typography.Title>
            </Space><br/>
            <Button type="primary" onClick={(e) => {
                setDisable(!disable)
                if(disable === true){
                    setColor("#2878fa")
                }else{
                    setColor("gray")
                }
            }}>Disable</Button>
        </>
    )
}

export default EnableDisableToggle