import styles from './Footer.module.css'

import git from '../../img/git.svg'
import footerLogo from '../../img/footerLogo.svg'

const Footer: React.FC = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__text}>
                        <img
                            src={footerLogo}
                            className={styles.logo}
                            alt="footerLogo"
                        />
                        <a
                            target="_blank"
                            href="https://github.com/waveafterwave69"
                            className={styles.git}
                        >
                            <img src={git} alt="git" />
                            <p>waveafterwave69</p>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
