// pages
import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Menu from '~/pages/Menu';
import Promotion from '~/pages/Promotion';
import Stores from '~/pages/Stores';
import News from '~/pages/News';

// public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/lien-he',
        component: Contact,
    },
    {
        path: '/thuc-don',
        component: Menu,
    },
    {
        path: '/khuyen-mai',
        component: Promotion,
    },
    {
        path: '/tin-tuc',
        component: News,
    },
    {
        path: '/cua-hang',
        component: Stores,
        layout: null,
    },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
