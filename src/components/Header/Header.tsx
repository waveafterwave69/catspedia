import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'

import logo from '../../img/logo.svg'
import { routesConfig } from '../../routes/routesConfig'
import { Link, NavLink } from 'react-router-dom'

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__row}>
                        <div className={styles.header__logo}>
                            <Link to="/" onClick={handleLinkClick}>
                                <img
                                    src={logo}
                                    alt="cats"
                                    className={styles.logo__img}
                                />
                            </Link>
                        </div>

                        <button
                            className={`${styles.burger} ${
                                isOpen ? styles.burgerActive : ''
                            }`}
                            onClick={toggleMenu}
                        >
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                            <span className={styles.burgerLine}></span>
                        </button>

                        {isOpen && (
                            <nav className={styles.burger__nav}>
                                {routesConfig.map(
                                    (el) =>
                                        el.isNav && (
                                            <NavLink
                                                key={el.url}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? `${styles.burger__link} ${styles.active}`
                                                        : styles.burger__link
                                                }
                                                to={el.url}
                                                onClick={handleLinkClick}
                                            >
                                                {el.isNav}
                                            </NavLink>
                                        )
                                )}
                            </nav>
                        )}
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
                                            onClick={handleLinkClick}
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
