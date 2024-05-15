import { Link } from "react-router-dom"
import * as styles from "./Flags.module.css"

export default function FlagsPlus() {
    return (
        <div className={styles.container}>
             <Link to="Europe"><div className={styles.Europe}>Europe Plus</div></Link>
             <Link to="Asia"><div className={styles.Asia}>Asia Plus</div></Link>
             <Link to="Americas"><div className={styles.America}>Americas Plus</div></Link>
             <Link to="Africa"><div className={styles.Africa}>Africa Plus</div></Link>
        </div>
    )
}