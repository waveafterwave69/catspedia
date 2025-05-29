import styles from './Header.module.css'

import logo from '../../img/logo.svg'
import { routesConfig } from '../../routes/routesConfig'
import { Link, NavLink } from 'react-router'

const Header: React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__row}>
                        <div className={styles.header__logo}>
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="cats"
                                    className={styles.logo__img}
                                />
                            </Link>
                        </div>
                        <nav className={styles.header__nav}>
                            {routesConfig.map(
                                (el) =>
                                    el.isNav && (
                                        <NavLink
                                            key={el.url}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${styles.nav__link} ${styles.active}`
                                                    : styles.nav__link
                                            }
                                            to={el.url}
                                        >
                                            {el.isNav}
                                        </NavLink>
                                    )
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
