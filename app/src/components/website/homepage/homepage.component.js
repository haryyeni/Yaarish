import styles from './homepage.module.scss';
import WebsiteHeader from './partials/header/header.component';
import BannerImage from "../../../assets/homepage/banner.png";
import Services1 from "../../../assets/homepage/services-1.png";
import NewWorthy1 from "../../../assets/homepage/spa-women.png";
import MostBookedSerice1 from "../../../assets/homepage/most-booked-service-1.png";
import Cleaner1 from "../../../assets/homepage/cleaner-1.png";
import Team1 from "../../../assets/homepage/team-1.png";
import WebsiteFooter from './partials/footer/footer.component';

export default function HomepageComponentV2(props){
    const servicesList = [
        {
            name:'Bathroom Cleaning',
            img: Services1
        },
        {
            name:'Mens’s Haircut',
            img: Services1
        },
        {
            name:'Painting',
            img: Services1
        },
        {
            name:'Plumber',
            img: Services1
        },
        {
            name:'Electrician',
            img: Services1
        },
        {
            name:'Beautician',
            img: Services1
        }
    ];

    const newWorthyList = [
        {
            name: "spa for women",
            img: NewWorthy1
        },
        {
            name: "laser hair reduction",
            img: NewWorthy1
        }
    ];

    const mostBookedServicesList = [
        {
            name: 'Salon for women',
            img: MostBookedSerice1
        },
        {
            name: 'AC Repair',
            img: MostBookedSerice1
        },
        {
            name: 'Home full cleaning',
            img: MostBookedSerice1
        },
        {
            name: 'Massage for Men',
            img: MostBookedSerice1
        }
    ];

    const otherServicesList = [
        {
            name: "Cleaner",
            img: Cleaner1
        },
        {
            name: "Electricity",
            img: Cleaner1
        },
        {
            name: "Furniture",
            img: Cleaner1
        },
        {
            name: "mechanic",
            img: Cleaner1
        }
    ];

    const teamList = [
        {
            name: "team1",
            img: Team1,
            link: "#"
        },
        {
            name: "team2",
            img: Team1,
            link: "#"
        },
        {
            name: "team3",
            img: Team1,
            link: "#"
        },
        {
            name: "team4",
            img: Team1,
            link: "#"
        },
        {
            name: "team5",
            img: Team1,
            link: "#"
        },
        {
            name: "team6",
            img: Team1,
            link: "#"
        }
    ];
    return <>
        <div className={styles.wrapper}>
            <WebsiteHeader />

            {/* Banner Section */}
            <section
                className={styles.banner__section}
                style={{
                    '--_self-bg': `url(${BannerImage})`
                }}
            >
                <div className={styles.bg__wrapper}></div>
                <div className={`container ${styles.container}`}>
                    <div className={styles.content__div}>
                        <h1>
                            Home Services At Your <br/>door step
                        </h1>
                        <button type="button" aria-label="Homepage Banner CTA">
                            Book Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Services */}

            <section
                className={styles.services__section}
            >   
                <div className="container">
                    <h2>Our Services</h2>

                    {
                        servicesList && servicesList.length > 0 && <>
                            <div className={styles.items__row}>
                                {
                                    servicesList.map((service, index)=>{
                                        return <div className={styles.item__grid} key={index}>
                                            <img src={service.img} alt={service.name} />
                                            <p>{service.name}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
            </section>

            {/* New And Net Worthy */}
            <section className={styles.new__net__worthy}>
                <div className="container">
                    <h2>New and  Note worthy</h2>
                    {
                        newWorthyList && newWorthyList.length > 0 && <>
                            <div className={styles.items__row}>
                                {
                                    newWorthyList.map((item, index)=>{
                                        return <div key={index}>
                                            <img src={item.img} alt={item.name} />
                                            <div className={styles.content}>
                                                <p>
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
            </section>

            {/* Most Booked Services */}
            <section className={styles.most__booked__services}>
                <div className="container">
                    <h2>Most booked services</h2>
                    {
                        mostBookedServicesList && mostBookedServicesList.length > 0 && <>
                            <div className={styles.items__row}>
                                {
                                    mostBookedServicesList.map((item, index)=>{
                                        return <div key={index}>
                                            <img src={item.img} alt={item.name} />

                                            <p>{item.name}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
            </section>

            {/* Other Services */}
            <section className={styles.other__services}>
                <div className="container">
                    {
                        otherServicesList && otherServicesList.length > 0 && <>
                            <div className={styles.items__row}>
                                {
                                    otherServicesList.map((item, index)=>{
                                        return <div key={index}>
                                            <img src={item.img} alt={item.name} />

                                            <p>{item.name}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
            </section> 

            {/* Team Section*/}
            <section className={styles.team__section}>
                <div className="container">
                    <h2>Our team is Ready to serve you</h2>
                    {
                        teamList && teamList.length > 0 && <>
                            <div className={styles.items__row}>
                                {
                                    teamList.map((item, index)=>{
                                        return <div key={index}>
                                            <img src={item.img} alt={item.name} />
                                            <a href={item.link} title="">
                                                Book Now
                                            </a>
                                        </div>
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
            </section> 
            
            {/* Footer */}
            <WebsiteFooter />
        </div>    
    </>
}