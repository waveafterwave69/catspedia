import { Link } from 'react-router'
import styles from './Promo.module.css'

import promoImg from '../../img/promoImg.png'

const Promo: React.FC = () => {
    return (
        <>
            <section className={styles.promo}>
                <div className={styles.promo__row}>
                    <div className={styles.row__text}>
                        <h1 className={styles.text__title}>Cats</h1>
                        <p className={styles.text__subtitle}>
                            The largest collection of information about
                            different breeds!
                        </p>

                        <Link to="/list" className={styles.text__button}>
                            Find
                        </Link>
                    </div>
                    <div className={styles.img__content}>
                        <img
                            src={promoImg}
                            alt="cat"
                            className={styles.row__img}
                        />
                        <p className={styles.meow}>Meow!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Promo
