import { defaultCats } from '../../services/cats'
import styles from './Breeds.module.css'
import { Link } from 'react-router'

const Breeds: React.FC = () => {
    return (
        <section className={styles.breeds}>
            <h2 className={styles.breeds__title}>
                100+ breeds and information about them!
            </h2>
            <ul className={styles.breeds__list}>
                {defaultCats.map((el: any) => (
                    <li key={el.id}>
                        <Link
                            to={`/list/${el.id}`}
                            className={styles.breeds__item}
                        >
                            <img
                                src={el.url}
                                alt={el.name}
                                className={styles.image}
                            />
                            <h3 className={styles.title}>{el.name}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/list" className={styles.breeds__button}>
                Look
            </Link>
        </section>
    )
}

export default Breeds
