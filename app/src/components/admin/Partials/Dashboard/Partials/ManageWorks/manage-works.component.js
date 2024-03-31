import TableComponent from "../../../Common/Table/table.component";
import styles from "./manage-works.module.scss";

export default function ManageWorksComponent(){
    return <>
        <div className={styles.manage__works__main}>
            <h1>Manage Work</h1>
            <TableComponent />
        </div>
    </>
}