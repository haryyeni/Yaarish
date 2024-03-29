import styles from "./sidebar.module.scss";
import DummyLogo from "../../../../assets/admin/admin-logo-dummy.png";
import { useState } from "react";
import { useLocation, useParams } from "react-router";

export default function SidebarComponent(){
    const location = useLocation();
    const pathName = location.pathname;

    const prepareList = ({name = '', subList = {}, path = ''}) => {
        const obj = {
            name,
            subList, 
            path
        }
        return obj;
    }
    const btnList = {
        dashboard: prepareList({name:'dashboard', path: "/dashboard"}),
        manageUsers: prepareList({
            name: "Manage Users",
            subList : {
                users: prepareList({
                    name: 'Users',
                    path: '/manage-users'
                }),
                bookings: prepareList({
                    name:'Bookings',
                    path: '/user-bookings'
                })
            }
        }),
        manageWorks: prepareList({
            name: "Manage Works",
            subList : {
                works: prepareList({
                    name: 'Works',
                    path: '/manage-works'
                }),
                bookings: prepareList({
                    name:'Bookings',
                    path: '/work-bookings'
                })
            }
        }),
        settings: prepareList({
            name:'Settings',
            subList:{
                account: prepareList({
                    name:'Account',
                    subList:{},
                    path:'/account'
                })
            }
        })
    }
    return <>
        <div className={styles.admin__sidebar}>
            <div className={styles.admin__sidebar__inner}>
                <div className={styles.logo__div}>
                    <img src={DummyLogo} alt="Admin Logo" />
                    <div>
                        <p className={styles.title}>
                            Anupama
                        </p>
                        <span>Admin</span>
                    </div>
                </div>
                <div className={styles.navbar__list__parent}>
                    {
                        Object.keys(btnList).length > 0 && Object.keys(btnList).map((btnkey, index)=>{
                            const btn = btnList[btnkey];
                            const subList = btn.subList;
                            const pathCondition = 
                                btn.path === '' 
                                ? 
                                Object.keys(subList).length > 0 
                                && Object.keys(subList).some((key, index)=> subList[key].path === pathName)
                                :
                                btn.path === pathName; 
                            return <a 
                                key={index}
                                datatype={btn.name}
                                datastate={`${pathCondition}`}
                                href={btn.path === '' ? '#' : btn.path}
                                title={btn.name}

                            >
                                {
                                    btn.name === 'dashboard' && <>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.75 7.4985C0.551088 7.4985 0.360322 7.41948 0.21967 7.27883C0.0790178 7.13818 0 6.94741 0 6.7485V0.75C0 0.551088 0.0790178 0.360322 0.21967 0.21967C0.360322 0.0790178 0.551088 0 0.75 0H6.75C6.94891 0 7.13968 0.0790178 7.28033 0.21967C7.42098 0.360322 7.5 0.551088 7.5 0.75V6.7485C7.5 6.94741 7.42098 7.13818 7.28033 7.27883C7.13968 7.41948 6.94891 7.4985 6.75 7.4985H0.75ZM11.25 7.4985C11.0511 7.4985 10.8603 7.41948 10.7197 7.27883C10.579 7.13818 10.5 6.94741 10.5 6.7485V0.75C10.5 0.551088 10.579 0.360322 10.7197 0.21967C10.8603 0.0790178 11.0511 0 11.25 0H17.2485C17.4474 0 17.6382 0.0790178 17.7788 0.21967C17.9195 0.360322 17.9985 0.551088 17.9985 0.75V6.7485C17.9985 6.94741 17.9195 7.13818 17.7788 7.27883C17.6382 7.41948 17.4474 7.4985 17.2485 7.4985H11.25ZM0.75 17.9985C0.551088 17.9985 0.360322 17.9195 0.21967 17.7788C0.0790178 17.6382 0 17.4474 0 17.2485V11.2485C0 11.0496 0.0790178 10.8588 0.21967 10.7182C0.360322 10.5775 0.551088 10.4985 0.75 10.4985H6.75C6.94891 10.4985 7.13968 10.5775 7.28033 10.7182C7.42098 10.8588 7.5 11.0496 7.5 11.2485V17.2485C7.5 17.4474 7.42098 17.6382 7.28033 17.7788C7.13968 17.9195 6.94891 17.9985 6.75 17.9985H0.75ZM11.25 17.9985C11.0511 17.9985 10.8603 17.9195 10.7197 17.7788C10.579 17.6382 10.5 17.4474 10.5 17.2485V11.2485C10.5 11.0496 10.579 10.8588 10.7197 10.7182C10.8603 10.5775 11.0511 10.4985 11.25 10.4985H17.2485C17.4474 10.4985 17.6382 10.5775 17.7788 10.7182C17.9195 10.8588 17.9985 11.0496 17.9985 11.2485V17.2485C17.9985 17.4474 17.9195 17.6382 17.7788 17.7788C17.6382 17.9195 17.4474 17.9985 17.2485 17.9985H11.25Z" fill="#3E3E3E"/>
                                        </svg>
                                    </>
                                }
                                <span>
                                    {btn.name}
                                </span>

                                {/* SubList */}
                                {
                                    Object.keys(subList).length > 0 && <>
                                        <ul datatype="sublist">
                                            {
                                                Object.keys(subList).map((subListKey, subListIndex)=>{
                                                    const subListItem = subList[subListKey];
                                                    return <li
                                                        key={subListIndex}
                                                        datastate={`${subListItem.path != '' && subListItem.path === pathName}`}
                                                    >
                                                        <a 
                                                            href={subListItem.path} 
                                                            title={subListItem.name}
                                                        >
                                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13 5L13.2828 4.71716L13.5657 5L13.2828 5.28284L13 5ZM1 5.4C0.779086 5.4 0.6 5.22091 0.6 5C0.6 4.77909 0.779086 4.6 1 4.6V5.4ZM9.28284 0.717157L13.2828 4.71716L12.7172 5.28284L8.71716 1.28284L9.28284 0.717157ZM13.2828 5.28284L9.28284 9.28284L8.71716 8.71716L12.7172 4.71716L13.2828 5.28284ZM13 5.4H1V4.6H13V5.4Z" fill="#222222"/>
                                                            </svg>
                                                            <span>
                                                                {subListItem.name}
                                                            </span>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </>
                                }

                            </a>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}