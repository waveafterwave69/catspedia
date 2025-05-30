import { Link } from 'react-router'
import { useGetCatsQuery } from '../../store/api/apiNews/apiCats'
import CatBreedItem from '../CatBreedItem/CatBreedItem'
import styles from './CatsList.module.css'

const CatsList: React.FC = () => {
    const { data, isLoading } = useGetCatsQuery('')

    return (
        <section className={styles.cats}>
            <h2 className={styles.cats__title}>cat breeds</h2>
            <ul className={styles.cats__list}>
                {!isLoading &&
                    data.map((cat: any) => (
                        <li key={cat.id} className={styles.list__item}>
                            <Link to="/list">
                                <CatBreedItem
                                    breedId={cat.id}
                                    name={cat.name}
                                    button={true}
                                />
                            </Link>
                        </li>
                    ))}
            </ul>
        </section>
    )
}

export default CatsList
