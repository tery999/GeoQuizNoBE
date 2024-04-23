import { Link } from "react-router-dom"
import * as styles from "./Flags.module.css"

export default function Flags() {
    return (
        <div className={styles.container}>
             <Link to="Europe"><div className={styles.Europe}>Europe</div></Link>
             <Link to="Asia"><div className={styles.Asia}>Asia</div></Link>
             <Link to="Americas"><div className={styles.America}>Americas</div></Link>
             <Link to="Africa"><div className={styles.Africa}>Africa</div></Link>
        </div>
    )
}