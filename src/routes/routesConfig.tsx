import SingleCat from '../components/SingleCat/SingleCat'
import FavPage from '../pages/FavPage/FavPage'
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
        page: <FavPage />,
        url: '/favorites',
        isNav: 'Favorites',
    },
]
