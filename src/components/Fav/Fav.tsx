import { useSelector } from 'react-redux'
import styles from './Fav.module.css'
import CatBreedItem from '../CatBreedItem/CatBreedItem'

const Fav: React.FC = () => {
    const favorites = useSelector((state: any) => state.fav.fav)
    console.log(favorites)

    return (
        <section className={styles.cats}>
            <>
                <h2 className={styles.cats__title}>cat breeds</h2>
                <ul className={styles.cats__list}>
                    {favorites.map((cat: any) => (
                        <li key={cat.id} className={styles.list__item}>
                            <CatBreedItem
                                newData={favorites}
                                breedId={cat.id}
                                name={cat.name}
                                button={true}
                            />
                        </li>
                    ))}
                </ul>
            </>
        </section>
    )
}

export default Fav
