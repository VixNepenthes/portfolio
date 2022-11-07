// Layout
import routesConfig from '../config/routes';

// Public routes
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.projects, component: Projects },
    { path: routesConfig.about, component: About },
    { path: routesConfig.contact, component: Contact },
];

// Trang không được truy cập khi chưa thoả điều kiện (VD: chưa login thì chưa setting tài khoản)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
