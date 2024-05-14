import { Link } from "react-router-dom"
import * as styles from "./Capitals.module.css"

export default function CapitalsPlus() {
    return (
        <div className={styles.container}>
             <Link to="Europe"><div className={styles.Europe}>Europe PLUS</div></Link>
             <Link to="Asia"><div className={styles.Asia}>Asia PLUS</div></Link>
             <Link to="Americas"><div className={styles.America}>Americas PLUS</div></Link>
             <Link to="Africa"><div className={styles.Africa}>Africa PLUS</div></Link>
        </div>
    )
}