import { Link } from "react-router-dom"
import * as styles from "./Outlines.module.css"

export default function Outlines() {
    return (
        <div className={styles.container}>
             <Link to="Europe"><div className={styles.Europe}>Europe</div></Link>
             <Link to="Asia"><div className={styles.Asia}>Asia</div></Link>
             <Link to="Americas"><div className={styles.America}>Americas</div></Link>
             <Link to="Africa"><div className={styles.Africa}>Africa</div></Link>
        </div>
    )
}