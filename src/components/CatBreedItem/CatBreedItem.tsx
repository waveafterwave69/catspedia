import { useState, useEffect } from 'react'
import { useGetCatsImgQuery } from '../../store/api/apiNews/apiCats'
import { Link } from 'react-router-dom' // Correct import for react-router-dom

import styles from './CatBreedItem.module.css'

import star from '../../img/star.svg'
import starNone from '../../img/starNone.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToFav, removeItemFromFav } from '../../store/slices/favSlice'

interface CatBreedItemProps {
    breedId: string
    name: string
    button: boolean
    newData: any[]
}

const CatBreedItem: React.FC<CatBreedItemProps> = ({
    breedId,
    name,
    button,
    newData,
}) => {
    const { data, isLoading } = useGetCatsImgQuery(breedId)
    const [isFav, setIsFav] = useState(false)
    const dispatch = useDispatch()

    const currData: any = newData
        ? newData.filter((el: any) => el.id === breedId)
        : []

    const favorites = useSelector((state: any) => state.fav.fav)

    useEffect(() => {
        const isInFavorites = favorites.some((item: any) => item.id === breedId)
        setIsFav(isInFavorites)
    }, [breedId, favorites])

    const handleAddToFav = () => {
        if (!isFav) {
            if (currData.length > 0) {
                dispatch(addItemToFav(currData[0]))
            }
        } else {
            dispatch(removeItemFromFav({ id: breedId }))
        }

        setIsFav((prev) => !prev)
    }

    return (
        <div>
            {!isLoading && data && data.length > 0 && (
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
                                onClick={handleAddToFav}
                                src={isFav ? star : starNone}
                                className={styles.star}
                                style={{
                                    width: '35px',
                                    height: '35px',
                                    cursor: 'pointer',
                                }}
                                alt={
                                    isFav
                                        ? 'Remove from favorites'
                                        : 'Add to favorites'
                                }
                            />
                        )}
                        <h3 className={styles.title}>{name}</h3>
                        {button && (
                            <button
                                onClick={handleAddToFav}
                                className={
                                    isFav
                                        ? `${styles.cats__button} ${styles.active}`
                                        : `${styles.cats__button}`
                                }
                            >
                                {isFav ? 'Remove from Stars' : 'Add to Stars'}
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default CatBreedItem
