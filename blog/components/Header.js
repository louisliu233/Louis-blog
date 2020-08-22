import React from 'react'
import '../styles/components/header.css'
import {Row, Col, Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import { HomeOutlined, PlaySquareOutlined, SmileOutlined  } from '@ant-design/icons'

const Header = () => {
    return (
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className='header-logo'>Louis</span>
                <span className='header-txt'>所念皆星河，所望皆晴天</span>
                </Col>
                <Col className='menu-div' xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode='horizontal'> 
                    <MenuItem key='home'>
                    <HomeOutlined />
                    首页
                    </MenuItem>
                    <MenuItem key='video'>
                    <PlaySquareOutlined />
                    视频
                    </MenuItem>
                    <MenuItem key='life'>
                    <SmileOutlined />
                    生活
                    </MenuItem>
                </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header