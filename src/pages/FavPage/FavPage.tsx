import { useEffect } from 'react'
import Fav from '../../components/Fav/Fav'

const FavPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Fav />
        </>
    )
}

export default FavPage
