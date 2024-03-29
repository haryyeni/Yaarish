import DashboardComponent from './Partials/Dashboard/dashboard.component';
import AdminHeaderComponent from './Partials/Header/header.component';
import styles from './admin.module.scss';

export default function AdminComponent(props){
    return <>
        <div className={styles.admin__wrapper}>
            <AdminHeaderComponent />
            <DashboardComponent path={props?.path}/>
        </div>
    </>
}