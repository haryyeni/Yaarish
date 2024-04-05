import { useEffect, useState } from 'react';
import SidebarComponent from '../sidebar/sidebar.component';
import styles from './dashboard.module.scss';
import AdminDashboardComponent from './Partials/AdminDashboard/admin-dashboard.component';
import ManageUsersComponent from './Partials/ManageUsers/manage-users.component';
import UserBookings from './Partials/UserBookings/user-bookings.component';
import ManageWorksComponent from './Partials/ManageWorks/manage-works.component';
import CreateORUpdateComponent from './Partials/CreateORUpdateFormV2/create-or-update.compontent';

export default function DashboardComponent(props){
    useEffect(()=>{
        document.querySelector('body').setAttribute('data-page-type', 'admin-portal');
    },[]);
    const activePage = props?.path;
    const InnerPages = {
        dashboard: <AdminDashboardComponent />,
        manageUsers: <ManageUsersComponent />,
        userBookings: <UserBookings />,
        manageWorks: <ManageWorksComponent />,
        createUpdateForm : <CreateORUpdateComponent />
    }
    return <>
        <div 
            className={styles.dashbaord_section}
            datatype='admin-dashboard-section'
            datasidebarshow="true"
        >
            {/* Sidebar */}
            <SidebarComponent />
            <div className={styles.layout__body}>
                <div className={`${styles.layout__body__inner__div}`}>
                    <div className='container'>
                        {InnerPages[activePage]}
                    </div>
                </div>
            </div>
        </div>
    </>
}