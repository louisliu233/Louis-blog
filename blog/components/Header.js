import React, {useState, useEffect} from 'react'
import '../styles/components/header.css'
import {Row, Col, Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { HomeOutlined, PlaySquareOutlined, SmileOutlined  } from '@ant-design/icons'

const Header = () => {
    const [navArray, setNavArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                res => {
                    return res.data.data
                }               
            )
            setNavArray(result)
        }
        fetchData()
    },[])

    const handleClick = (e)=>{
        if(e.key == 0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
  
  
    }
    return (
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className='header-logo'>Louis</span>
                <span className='header-txt'>所念皆星河，所望皆晴天</span>
                </Col>
                <Col className='menu-div' xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode='horizontal' onClick={handleClick}> 
                    <MenuItem key='0'>
                    <HomeOutlined />
                    博客首页
                    </MenuItem>
                    {
                       navArray.map((item)=>{
                          return(
                          <Menu.Item key={item.id}>
                            {item.typeName}
                          </Menu.Item>
                         )
                     }) 
                    }
                </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header