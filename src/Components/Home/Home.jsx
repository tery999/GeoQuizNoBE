import { Link } from "react-router-dom"
import * as styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
             <Link to="Flags"><div className={styles.flagDiv}>Flags</div></Link>
             <Link to="Outlines"><div className={styles.OutDiv}>Outlines</div></Link>
             <Link to="Capitals"><div className={styles.CapDiv}>Capitals</div></Link>
        </div>
    )
}