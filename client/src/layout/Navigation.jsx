import { HomeOutlined, UserOutlined, CopyrightOutlined, CompassOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Moon, ArrowBarRight} from 'react-bootstrap-icons';
import {React } from 'react';
import {useNavigate} from 'react-router-dom';
//import Company from './Company';
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
    label: 'User',
    key: 'SubMenu',
    icon: <UserOutlined />,
    children: [
      {
        type: 'dashed',
        label: 'Dark Mode',
        icon: <Moon />,
      },
      {
        type: 'option',
        label: 'Sign Out',
        icon: <ArrowBarRight/>
      },
    ],
  },
  
];

export default function Navigation() {
  const navigate = useNavigate();
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
        //TODO: sign out
      }else{
        navigate(key);
      }
      }}  mode="horizontal"  items={items}  theme='dark' />;
  
}
