import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../pages/Installation';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/apps',
                Component: Apps,
            },
            {
                path: '/installation',
                Component: Installation,
            },
        ],
    },
]);
