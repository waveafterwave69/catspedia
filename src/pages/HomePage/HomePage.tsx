import Breeds from '../../components/Breeds/Breeds'
import Promo from '../../components/Promo/Promo'
import { useGetCatsQuery } from '../../store/api/apiNews/apiCats'

const HomePage: React.FC = () => {
    return (
        <>
            <Promo />
            <Breeds />
        </>
    )
}

export default HomePage
