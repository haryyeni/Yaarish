import styles from './header.module.scss';

export default function AdminHeaderComponent(){
    const sidebarToggleClick = () => {
        const dashboardSection = document.querySelector("div[datatype='admin-dashboard-section']");
        const dataAttr = 'datasidebarshow';
        const isSidebarShow = dashboardSection.getAttribute(dataAttr) === 'true';
        dashboardSection.setAttribute(dataAttr, isSidebarShow ? "false" : "true");
    }
    return <>
        <header datatype='admin-header'>
            <div className='container'>
                <div className={styles.left}>
                    <a className={styles.logo} href='/admin' title='Logo'>Logo</a>
                    <button 
                        type='button' 
                        datatype='sidebar-toggle'
                        onClick={sidebarToggleClick}
                    >
                        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H24" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            <path d="M1 9.21387H24" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            <path d="M1 17.4287H24" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

            </div>
        </header>   
    </>
}