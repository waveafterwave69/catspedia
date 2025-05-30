import styles from './Breeds.module.css'
import { useGetCatsQuery } from '../../store/api/apiNews/apiCats'
import CatBreedItem from '../CatBreedItem/CatBreedItem'
import { Link } from 'react-router'

const Breeds: React.FC = () => {
    const { data, isLoading } = useGetCatsQuery('')

    return (
        <section className={styles.breeds}>
            <h2 className={styles.breeds__title}>
                100+ breeds and information about them!
            </h2>
            {!isLoading && (
                <ul className={styles.breeds__list}>
                    <li key={data[0].id} className={styles.breeds__item}>
                        <Link to="/">
                            <CatBreedItem
                                button={false}
                                breedId={data[0].id}
                                name={data[0].name}
                            />
                        </Link>
                    </li>
                    <li key={data[1].id} className={styles.breeds__item}>
                        <Link to="/">
                            <CatBreedItem
                                button={false}
                                breedId={data[1].id}
                                name={data[1].name}
                            />
                        </Link>
                    </li>
                    <li key={data[2].id} className={styles.breeds__item}>
                        <Link to="/">
                            <CatBreedItem
                                button={false}
                                breedId={data[2].id}
                                name={data[2].name}
                            />
                        </Link>
                    </li>
                </ul>
            )}
            <Link to="/list" className={styles.breeds__button}>
                Look
            </Link>
        </section>
    )
}

export default Breeds
