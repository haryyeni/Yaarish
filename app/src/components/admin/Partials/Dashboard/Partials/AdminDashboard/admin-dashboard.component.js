import CardsComponent from "../../../Common/Cards/cards.component";
import styles from "./admin-dashboard.module.scss";
import CustomerIcon from "../../../../../../assets/admin/customers-icon.png";
import WorkerIcon from "../../../../../../assets/admin/workers-icon.png";
import BookingIcon from "../../../../../../assets/admin/bookings.png";
import SettingsIcon from "../../../../../../assets/admin/settings.png";

export default function AdminDashboardComponent(){
    const cardsList = [
        {
            label:"Customers",
            icon: CustomerIcon,
            count:200,
            countLabel: 'Members',
            link: '/manage-users'
        },
        {
            label:"Workers",
            icon: WorkerIcon,
            count:200,
            countLabel: 'Members',
            link: '/manage-works'
        }
        ,{
            label: "Works",
            icon: WorkerIcon,
            count: 5,
            countLabel: "Works",
            link: "/manage-works"
        },
        {
            label: "Bookings",
            icon:   BookingIcon,
            count : 200,
            countLabel: "Bookings",
            link: "/work-bookings"
        },
        {
            label: "Settings",
            icon: SettingsIcon,
            link: '/settings'
        }
    ]
    return <>
        <div className={styles.admin__main}>
            {
                cardsList.length > 0 && <>
                    <div className={styles.cards__parent}>
                        {
                            cardsList.map((card, index)=>{
                                return <CardsComponent key={index} card={card}/>
                            })
                        }
                    </div>
                </>
            }
        </div>
    </>
}