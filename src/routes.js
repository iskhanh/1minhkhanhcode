import Main from './components/Main';
import Detail from './components/Detail';
import OptionUser from './components/watch';
import Login from './components/Login';
import SignUp from './components/signUp';

const publicRoutes = [
    { path: '/', element: Main },
    { path: 'detail/:id', element: Detail },
    { path: '/:list', element: Main },
    {
        path: 'watch/:option',
        element: OptionUser,
    },
    { path: '/login', element: Login },
    { path: '/signup', element: SignUp },
];

export { publicRoutes };
