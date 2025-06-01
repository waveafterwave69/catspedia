import styles from './WayToFav.module.css'

import pawsAll from '../../img/pawsAll.png'
import favImg from '../../img/favImg.png'

const WayToFav: React.FC = () => {
    return (
        <>
            <section className={styles.fav}>
                <h2 className={styles.fav__title}>
                    possibility of including cats in your
                    <span>favorites!</span>
                </h2>
                <div className={styles.fav__row}>
                    <div className={styles.fav__textcontent}>
                        <p className={styles.fav__text}>
                            To add a cat to your favorites, just click on the
                            star next to its photo!
                        </p>
                        <button className={styles.fav__button}>
                            List of cats
                        </button>
                    </div>
                    <img src={favImg} alt="" className={styles.fav__image} />
                </div>
                <img src={pawsAll} alt="paws" />
            </section>
        </>
    )
}

export default WayToFav
