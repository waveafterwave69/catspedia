import { useParams } from 'react-router'
import styles from './SingleCat.module.css'
import {
    useGetCatsImgQuery,
    useGetCatsQuery,
} from '../../store/api/apiNews/apiCats'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToFav, removeItemFromFav } from '../../store/slices/favSlice'

const SingleCat: React.FC = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetCatsQuery('')
    const catImg = useGetCatsImgQuery(id)
    const [isFav, setIsFav] = useState(false)
    const dispatch = useDispatch()

    let newData

    if (!isLoading) {
        newData = data.filter((el: any) => el.id === id)
    }

    const currData: any = newData
        ? newData.filter((el: any) => el.id === id)
        : []

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const favorites = useSelector((state: any) => state.fav.fav)

    useEffect(() => {
        const isInFavorites = favorites.some((item: any) => item.id === id)
        setIsFav(isInFavorites)
    }, [id, favorites])

    const handleAddToFav = () => {
        if (!isFav) {
            if (currData.length > 0) {
                dispatch(addItemToFav(currData[0]))
            }
        } else {
            dispatch(removeItemFromFav({ id: id }))
        }

        setIsFav((prev) => !prev)
    }

    return (
        <>
            {!isLoading && (
                <section className={styles.single}>
                    <div className={styles.single__row}>
                        <div className={styles.row__text}>
                            <h2 className={styles.row__title}>
                                <span>{newData[0].name}</span> Cat
                            </h2>
                            <h3 className={styles.row__subtitle}>
                                {newData[0].description}
                            </h3>
                            <div className={styles.row__params}>
                                <p className={styles.params__life}>
                                    life expectancy: {newData[0].life_span}.
                                </p>
                                <p className={styles.params__life}>
                                    temperament: {newData[0].temperament}.
                                </p>
                            </div>
                            <a
                                href={newData[0].wikipedia_url}
                                className={styles.wikipedia}
                            >
                                Wikipedia
                            </a>
                            <button
                                onClick={handleAddToFav}
                                className={
                                    isFav
                                        ? `${styles.row__button} ${styles.active}`
                                        : `${styles.row__button}`
                                }
                            >
                                {isFav ? 'Remove from Stars' : 'Add to Stars'}
                            </button>
                        </div>
                        <img
                            src={catImg && catImg.data[0].url}
                            alt="cat"
                            className={styles.row__img}
                        />
                    </div>
                </section>
            )}
        </>
    )
}

export default SingleCat
