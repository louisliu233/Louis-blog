import {Avatar,Divider} from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../styles/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="/imgs/person.JPG"  /></div>
            <div className="author-introduction">
                前端练习生，一名江西农业大学计科学生，想要看遍世界的一个井底之蛙QAQ
                <Divider>社交账号</Divider>
                <Avatar size={32} icon={<GithubOutlined />} className="account"  />
                <Avatar size={32} icon={<QqOutlined />} className="account" />
                <Avatar size={32} icon={<WechatOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author