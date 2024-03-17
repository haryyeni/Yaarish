import SidebarComponent from '../sidebar/sidebar.component';
import styles from './dashboard.module.scss';

export default function DashboardComponent(){
    return <>
        <div className={styles.dashbaord_section}>
            {/* Sidebar */}
            <SidebarComponent />
            <br/>
            Right Side module
        </div>
    </>
}