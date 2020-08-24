import React, { useState } from 'react'
import { Card, Input, Button ,Spin, message } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../Static/css/Login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'



function Login(props){
    const [userName, setUserName] = useState('')
    const [passWord, setPassword] = useState('')
    const [isLoading, setInLoading] = useState(false)
    const checkLogin = () => {
        setInLoading(true)
        if(!userName){
            message.error('用户名不能为空')
            setTimeout(() => {
                setInLoading(false)
            },500)
            return false
        }else if(!passWord){
            message.error('密码不能为空')
            setTimeout(() => {
                setInLoading(false)
            },500)
            return false
        }
        let dataProps = {
            'userName':userName,
            'passWord':passWord
        }
        axios({
            method:'post',
            url:servicePath.checkLogin,
            header:{ 'Access-Control-Allow-Origin':'*' },
            data:dataProps,
            withCredentials: true
        }).then(
           res=>{
               setInLoading(false)
                if(res.data.data=='登录成功'){
                    localStorage.setItem('openId', res.data.openId)
                    props.history.push('/index')
                    // console.log(res.data.openId);
                }else{
                    message.error('用户名密码错误')
                }
           }
        )

        setTimeout(()=>{
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
                        id="passWord"
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