import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {Col, Row, List, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Avthor'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import Link from 'next/link'
import servicePath from '../config/apiUrl'
import { FireOutlined, CalendarOutlined, FolderOutlined } from '@ant-design/icons';


const myList = (list) => {
  const [mylist, setMylist] = useState(list.data)
  useEffect(()=>{
    setMylist(list.data)
   })
  return (
      <>
      <Head>
        <title>Home-List</title>
      </Head>
      <Header></Header>
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
            </Breadcrumb>
            </div>
          </div>
        <List 
            header={<div>最新日志</div>}
            itemLayout='vertical'
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className='list-title'>
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className='list-icon'>
                  <span><CalendarOutlined />{item.addTime}</span>
                  <span><FolderOutlined />{item.typeTime}</span>
                  <span><FireOutlined />{item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
        />   
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
        </Col>
      </Row>
      <Footer />
      </>
  )
}


myList.getInitialProps = async (context)=>{

  let id =context.query.id  
  return await axios(servicePath.getListById+id).then(
      res => res.data
      )
}
  

export default myList