import SingleCat from '../components/SingleCat/SingleCat'
import HomePage from '../pages/HomePage/HomePage'
import ListPage from '../pages/ListPage/ListPage'

export const routesConfig = [
    {
        page: <HomePage />,
        url: '/',
        isNav: 'Main',
    },
    {
        page: <ListPage />,
        url: '/list',
        isNav: 'List of cats',
    },
    {
        page: <SingleCat />,
        url: '/list/:id',
    },
    {
        page: <HomePage />,
        url: '/random',
        isNav: 'Random cat',
    },
    {
        page: <HomePage />,
        url: '/favorites',
        isNav: 'Favorites',
    },
]
