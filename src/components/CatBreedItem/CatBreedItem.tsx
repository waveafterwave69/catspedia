import { useState } from 'react'
import { useGetCatsImgQuery } from '../../store/api/apiNews/apiCats'

import styles from './CatBreedItem.module.css'

import star from '../../img/star.svg'
import starNone from '../../img/starNone.svg'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToFav, removeItemFromFav } from '../../store/slices/favSlice'

const CatBreedItem: React.FC<{
    breedId: string
    name: string
    button: boolean
    newData: any
}> = ({ breedId, name, button, newData }) => {
    const { data, isLoading } = useGetCatsImgQuery(breedId)
    const [fav, setFav] = useState(false)
    const dispatch = useDispatch()
    const currData: any = newData.filter((el: any) => el.id === breedId)
    const handleAddToFav = () => {
        if (!fav) {
            dispatch(addItemToFav(currData[0]))
        } else {
            dispatch(removeItemFromFav({ id: breedId }))
        }

        setFav((prev) => !prev)
    }
    const favorites = useSelector((state: any) => state.fav)
    console.log(favorites)

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
                                onClick={handleAddToFav}
                                src={fav ? star : starNone}
                                className={styles.star}
                                style={{ width: '35px', cursor: 'pointer' }}
                            ></img>
                        )}
                        <h3 className={styles.title}>{name}</h3>
                        {button && (
                            <button
                                onClick={handleAddToFav}
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
