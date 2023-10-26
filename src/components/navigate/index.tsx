import {
    HomeOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
} from '@mui/icons-material';

export const navMenu = [
    {
        name: 'Главная',
        icon: <HomeOutlined />,
        path: '/',
        id: 1
    },
    {
        name: 'Контакты',
        icon: <AutoGraphOutlined />,
        path: '/contact',
        id: 2
    },
    {
        name: 'Информация',
        icon: <MenuBookOutlined />,
        path: '/info',
        id: 3
    }
]