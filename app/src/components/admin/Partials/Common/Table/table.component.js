import styles from "./table.module.scss";

export default function TableComponent(){
    return <>
        <div className={styles.table__main__div}>
            <div className={styles.header__div}>
                <p className={styles.title}>
                    Work List
                </p>
                <div className={styles.right}>
                    <div className={styles.header__search}>
                        <span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7" cy="7" r="6" stroke="#A19B9B"/>
                                <path d="M16 16L13 13" stroke="#A19B9B" strokeLinecap="round"/>
                            </svg>
                        </span>
                        <input placeholder="Search Work" type="text"/>
                    </div>
                    <button className={styles.add__btn}>
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18.5" cy="18.5" r="18.5" fill="#407BFF"/>
                            <path d="M18.5 10.2783L18.5 26.7228" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                            <path d="M26.7236 18.5L10.2792 18.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={styles.table__div}>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Category Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                01
                            </td>
                            <td datatype="title">
                                Electrician
                            </td>
                            <td>
                                <img src="" alt="Image" />
                            </td>
                            <td datatype="description">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                            </td>
                            <td>
                                <button datatype="">edit icon</button>
                            </td>
                            <td>
                                <button>
                                    Delete icon
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}