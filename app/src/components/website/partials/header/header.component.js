import styles from "./header.module.scss";

export default function WebsiteHeaderV2(){
    return <>
        <header>
            <div className="container">
                <div className={styles.header__first__row}>
                    <div className={styles.search__div}>
                        <div className={styles.input__div}>
                            <span>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#111111"/>
                                    <path d="M16 16L13 13" stroke="#111111" stroke-linecap="round"/>
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search for services"
                            />
                        </div>
                        <button type="button">Sign In</button>
                    </div>
                </div>
                <div className={styles.header__second__row}>
                    <a href="#" title="Logo">
                        Logo
                    </a>
                    <ul className={styles.nav__list}>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Cleaning
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Massage
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Repair
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </> 
}