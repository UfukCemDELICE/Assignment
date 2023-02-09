import { HomeOutlined, CopyrightOutlined, CompassOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { ArrowBarLeft, ArrowBarRight } from 'react-bootstrap-icons';
import {React, useState } from 'react';
import {useNavigate} from 'react-router-dom';
const items = [
  {
    label: 'MainPage',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'Company',
    key: '/company',
    icon: <CopyrightOutlined />,
  },
  {
    label: 'Product',
    key: '/product',
    icon: <CompassOutlined />,
  },
  
  {
    label: 'Login',
    key: 'auth/login',
    icon: <ArrowBarRight/>,
  },
  {
    label: 'Register',
    key: 'auth/register',
    icon: <UserAddOutlined />,
  },
  {
    label: 'User',
    icon: <UserOutlined />,
    children: [
      {
        type: 'option',
        label: 'Logout',
        key: 'signout',
        icon: <ArrowBarLeft/>,
      }
    ],
  },
  
];
export default function Navigation() {
  //const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  //{isAuthenticated ? items[3]&&items[4] : items[5]}
  /*
  const [theme, setTheme] = useState('dark');
  const changeTheme = (value) => {
    setTheme(value ? 'light' : 'dark');
  };
  
  /*const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  <Switch
    checked={theme === 'dark'}
    onChange={changeTheme}
    checkedChildren="Dark"
    unCheckedChildren="Light"
  />
  selectedKeys={[current]}
  */
  return <Menu 
    onClick={({key})=>{
      if(key ==='signout'){
        //TODO: JWT ile logout işlemi yapılacak !!key===auth!!
      }else{
        navigate(key);
      }
      }}  mode="horizontal"  items={items}  theme='dark' />;
  
}
