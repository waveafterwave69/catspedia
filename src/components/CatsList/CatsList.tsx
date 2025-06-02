import { useGetCatsQuery } from '../../store/api/apiNews/apiCats'
import CatBreedItem from '../CatBreedItem/CatBreedItem'
import styles from './CatsList.module.css'

const CatsList: React.FC = () => {
    let { data, isLoading } = useGetCatsQuery('')
    return (
        <section className={styles.cats}>
            {!isLoading && (
                <>
                    <h2 className={styles.cats__title}>cat breeds</h2>
                    <ul className={styles.cats__list}>
                        {data.map((cat: any) => (
                            <li key={cat.id} className={styles.list__item}>
                                <CatBreedItem
                                    newData={data}
                                    breedId={cat.id}
                                    name={cat.name}
                                    button={true}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}

export default CatsList
