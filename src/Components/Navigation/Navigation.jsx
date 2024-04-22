import { Link } from "react-router-dom"
import * as styles from "./Navigation.module.css"

export default function Navigation () {
    return (
        <div className={styles.NavContainer}>
        <Link to="Flags"><div className={styles.DivLinks}>Flags</div></Link>
             <Link to="Outlines"><div>Outlines</div></Link>
             <Link to="Borders"><div>Borders</div></Link>
        </div>
    )
}