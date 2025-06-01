import styles from './Breeds.module.css'
import { Link } from 'react-router'

const cats = [
    {
        name: 'Abyssinian',
        id: 'abys',
        url: 'https://cdn2.thecatapi.com/images/itfFA4NWS.jpg',
    },
    {
        name: 'Aegean',
        id: 'aege',
        url: 'https://cdn2.thecatapi.com/images/MJWtDz75E.jpg',
    },
    {
        name: 'American Curl',
        id: 'acur',
        url: 'https://cdn2.thecatapi.com/images/ji-5E0VwY.jpg',
    },
]

const Breeds: React.FC = () => {
    return (
        <section className={styles.breeds}>
            <h2 className={styles.breeds__title}>
                100+ breeds and information about them!
            </h2>
            <ul className={styles.breeds__list}>
                {cats.map((el: any) => (
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
