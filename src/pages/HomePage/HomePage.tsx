import { useEffect } from 'react'
import Breeds from '../../components/Breeds/Breeds'
import Promo from '../../components/Promo/Promo'

const HomePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Promo />
            <Breeds />
        </>
    )
}

export default HomePage
