import { useGetCatsImgQuery } from '../../store/api/apiNews/apiCats'

import styles from './CatBreedItem.module.css'

const CatBreedItem: React.FC<{
    breedId: string
    name: string
}> = ({ breedId, name }) => {
    const { data, isLoading } = useGetCatsImgQuery(breedId)

    return (
        <div>
            {!isLoading && (
                <>
                    <div className={styles.cat}>
                        <img
                            src={data[0].url}
                            alt={name}
                            className={styles.img}
                        />
                        <h3 className={styles.title}>{name}</h3>
                    </div>
                </>
            )}
        </div>
    )
}

export default CatBreedItem
