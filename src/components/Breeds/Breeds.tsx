import styles from './Breeds.module.css'
import { useGetCatsQuery } from '../../store/api/apiNews/apiCats'
import CatBreedItem from '../CatBreedItem/CatBreedItem'
import { Link } from 'react-router'

const Breeds: React.FC = () => {
    const { data, isLoading } = useGetCatsQuery(3)

    return (
        <section className={styles.breeds}>
            <h2 className={styles.breeds__title}>
                100+ breeds and information about them!
            </h2>
            {!isLoading && (
                <ul className={styles.breeds__list}>
                    {data.map((el: any) => (
                        <li key={el.id} className={styles.breeds__item}>
                            <CatBreedItem
                                button={false}
                                breedId={el.id}
                                name={el.name}
                            />
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/list" className={styles.breeds__button}>
                Look
            </Link>
        </section>
    )
}

export default Breeds
