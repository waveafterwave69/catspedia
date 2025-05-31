import { useState } from 'react'
import { useGetCatsImgQuery } from '../../store/api/apiNews/apiCats'

import styles from './CatBreedItem.module.css'

import star from '../../img/star.svg'
import starNone from '../../img/starNone.svg'
import { Link } from 'react-router'

const CatBreedItem: React.FC<{
    breedId: string
    name: string
    button: boolean
}> = ({ breedId, name, button }) => {
    const { data, isLoading } = useGetCatsImgQuery(breedId)
    const [fav, setFav] = useState(false)

    const addToFav = () => {
        setFav((prev) => !prev)
    }

    return (
        <div>
            {!isLoading && (
                <>
                    <div className={styles.cat}>
                        <Link to={`/list/${breedId}`}>
                            <img
                                src={data[0]?.url}
                                alt={name}
                                className={styles.image}
                            />
                        </Link>
                        {button && (
                            <img
                                onClick={addToFav}
                                src={fav ? star : starNone}
                                className={styles.star}
                                style={{ width: '35px', cursor: 'pointer' }}
                            ></img>
                        )}
                        <h3 className={styles.title}>{name}</h3>
                        {button && (
                            <button
                                onClick={addToFav}
                                className={
                                    fav
                                        ? `${styles.cats__button} ${styles.active}`
                                        : `${styles.cats__button}`
                                }
                            >
                                {fav ? 'Remove from Stars' : 'Add to Stars'}
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default CatBreedItem
