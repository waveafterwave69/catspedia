import { useEffect } from 'react'
import CatsList from '../../components/CatsList/CatsList'

const ListPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <CatsList />
        </>
    )
}

export default ListPage
