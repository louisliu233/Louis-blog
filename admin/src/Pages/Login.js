import React, { useState } from 'react'
import { Card, Input, Button ,Spin } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../Static/css/Login.css'



function Login(){
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    const [isLoading, setInLoading] = useState(false)
    const checkLogin = () => {
        setInLoading(true)
        setTimeout(() => {
            setInLoading(false)
        },1000)
    }

    return(
        <div className='login-div'>
            <Spin tip='Loading...' spinning={isLoading}>
                <Card title='Louis blog System' bordered={true} style={{width:400}}>
                    <Input 
                    id='userName'
                    size='large'
                    placeholder='Enter you userName'
                    prefix={<UserOutlined  style={{color:'rgba(0,0,0,.25)'}}/>}
                    onChange={(e) => {setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />     
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login